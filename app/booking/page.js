"use client";

import { bookingSlots, bookingSlotsByDate } from "@/data/bookingSlots";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const weekdayLabels = ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"];
const monthNames = [
  "Januar",
  "Februar",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "December",
];

const pad2 = (num) => String(num).padStart(2, "0");

const getUniqueYearMonths = () => {
  const set = new Set(bookingSlots.map((slot) => slot.date.slice(0, 7)));
  return Array.from(set).sort();
};

const getDaysInMonth = (year, monthIndex) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const getFirstWeekdayIndex = (year, monthIndex) => {
  const jsDay = new Date(year, monthIndex, 1).getDay();
  return (jsDay + 6) % 7;
};

const formatDateLabel = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  const day = parseInt(d, 10);
  const monthName = monthNames[parseInt(m, 10) - 1];
  return `${day}. ${monthName} ${y}`;
};

export default function BookingPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [bookedTimes, setBookedTimes] = useState({});

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();

        if (!res.ok) {
          console.error("Kunne ikke hente bookinger", data);
          return;
        }

        const mapped = {};
        Object.entries(data || {}).forEach(([date, timesObj]) => {
          if (timesObj && typeof timesObj === "object") {
            mapped[date] = Object.keys(timesObj);
          }
        });

        setBookedTimes(mapped);
      } catch (err) {
        console.error("Fejl ved hentning af bookinger:", err);
      }
    };

    fetchBookings();
  }, []);

  const yearMonths = getUniqueYearMonths();
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const currentYearMonth = yearMonths[currentMonthIndex];
  const [yearStr, monthStr] = currentYearMonth.split("-");
  const currentYear = parseInt(yearStr, 10);
  const currentMonth = parseInt(monthStr, 10) - 1;

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstWeekdayIndex = getFirstWeekdayIndex(currentYear, currentMonth);

  const datesWithSlotsSet = new Set(
    bookingSlots
      .filter((slot) => slot.date.startsWith(currentYearMonth))
      .map((slot) => parseInt(slot.date.slice(8, 10), 10))
  );

  const handleDateSelect = (dayNumber) => {
    if (!datesWithSlotsSet.has(dayNumber)) return;

    const dateString = `${currentYear}-${pad2(currentMonth + 1)}-${pad2(
      dayNumber
    )}`;

    setSelectedDate(dateString);
    setSelectedTime(null);
    setShowForm(false);
    setIsSubmitted(false);
    setErrorMessage("");
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setErrorMessage("");
  };

  const handleContinue = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    if (!selectedDate || !selectedTime) {
      setErrorMessage("Vælg venligst både dato og tidspunkt før du booker.");
      return;
    }

    const payload = {
      date: selectedDate,
      time: selectedTime,
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);

        setBookedTimes((prev) => ({
          ...prev,
          [selectedDate]: [...(prev[selectedDate] || []), selectedTime],
        }));
        setSelectedTime(null);
        setShowForm(false);
      } else {
        setErrorMessage(data.error || "Noget gik galt — prøv igen.");
      }
    } catch (err) {
      console.error("Booking submit error:", err);
      setErrorMessage("Serverfejl — prøv igen senere.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePrevMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
      setSelectedDate(null);
      setSelectedTime(null);
      setShowForm(false);
      setIsSubmitted(false);
      setErrorMessage("");
    }
  };

  const handleNextMonth = () => {
    if (currentMonthIndex < yearMonths.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
      setSelectedDate(null);
      setSelectedTime(null);
      setShowForm(false);
      setIsSubmitted(false);
      setErrorMessage("");
    }
  };

  let timesForSelectedDate = selectedDate
    ? bookingSlotsByDate[selectedDate] || []
    : [];

  if (selectedDate && bookedTimes[selectedDate]) {
    timesForSelectedDate = timesForSelectedDate.filter(
      (t) => !bookedTimes[selectedDate].includes(t)
    );
  }

  let selectedDayNumber = null;
  if (selectedDate && selectedDate.startsWith(currentYearMonth)) {
    selectedDayNumber = parseInt(selectedDate.slice(8, 10), 10);
  }

  const readableSelectedDate = selectedDate
    ? formatDateLabel(selectedDate)
    : "";

  return (
    <main className={styles.page} aria-labelledby="booking-title">
      <h1 id="booking-title" className={styles.bookingTitle}>
        Book en gratis samtale
      </h1>

      <div className={styles.bookingInfo}>
        <p className={styles.bookingInfoBold}>
          Lad os tale om dine mål, udfordringer og næste skridt - helt
          uforpligtende.
        </p>
        <p>
          Udfyld bookingen nedenfor for at booke en uforpligtende samtale
          vedrørende personlig træning eller vægttabscoaching.
        </p>
      </div>

      {!showForm && (
        <section
          className={styles.bookingLayout}
          aria-label="Vælg dato og tidspunkt for din samtale"
        >
          <div
            className={styles.calendarCard}
            aria-label="Kalender med ledige tider"
          >
            <div className={styles.calendarHeader}>
              <button
                onClick={handlePrevMonth}
                disabled={currentMonthIndex === 0}
                type="button"
                className={styles.navButton}
                aria-label="Forrige måned"
              >
                ←
              </button>

              <div className={styles.monthLabel} aria-live="polite">
                {monthNames[currentMonth]} {currentYear}
              </div>

              <button
                onClick={handleNextMonth}
                disabled={currentMonthIndex === yearMonths.length - 1}
                type="button"
                className={styles.navButton}
                aria-label="Næste måned"
              >
                →
              </button>
            </div>

            <div className={styles.weekdayRow} aria-hidden="true">
              {weekdayLabels.map((label) => (
                <div key={label} className={styles.weekday}>
                  {label}
                </div>
              ))}
            </div>

            <div
              className={styles.calendarGrid}
              role="grid"
              aria-label="Kalender"
            >
              {Array.from({ length: firstWeekdayIndex }).map((_, index) => (
                <div key={`empty-${index}`} />
              ))}

              {Array.from({ length: daysInMonth }).map((_, index) => {
                const dayNumber = index + 1;

                const baseHasSlots = datesWithSlotsSet.has(dayNumber);

                const dateString = `${currentYear}-${pad2(
                  currentMonth + 1
                )}-${pad2(dayNumber)}`;

                const baseTimesForDate = bookingSlotsByDate[dateString] || [];

                const bookedForDate = bookedTimes[dateString] || [];

                const availableTimesForDate = baseTimesForDate.filter(
                  (t) => !bookedForDate.includes(t)
                );

                const hasSlots =
                  baseHasSlots && availableTimesForDate.length > 0;

                const isSelected = hasSlots && selectedDayNumber === dayNumber;

                const dayClassNames = [
                  styles.dayButton,
                  !hasSlots && styles.dayButtonDisabled,
                  isSelected && styles.dayButtonSelected,
                ]
                  .filter(Boolean)
                  .join(" ");

                const readableDate = formatDateLabel(dateString);

                return (
                  <button
                    key={dayNumber}
                    type="button"
                    onClick={() => hasSlots && handleDateSelect(dayNumber)}
                    disabled={!hasSlots}
                    className={dayClassNames}
                    aria-pressed={isSelected}
                    aria-label={
                      hasSlots
                        ? `${readableDate} – der er ledige tider`
                        : `${readableDate} – ingen ledige tider`
                    }
                  >
                    {dayNumber}
                  </button>
                );
              })}
            </div>
          </div>

          <div className={styles.timesCard}>
            <h2 id="times-heading" className={styles.subheading}>
              {selectedDate
                ? "Vælg tidspunkt"
                : "Vælg en dato med ledige tider"}
            </h2>

            {selectedDate ? (
              timesForSelectedDate.length > 0 ? (
                <div
                  className={styles.timesList}
                  role="radiogroup"
                  aria-labelledby="times-heading"
                >
                  {timesForSelectedDate.map((time) => {
                    const isSelected = selectedTime === time;
                    const timeClassNames = [
                      styles.timeButton,
                      isSelected && styles.timeButtonSelected,
                    ]
                      .filter(Boolean)
                      .join(" ");

                    return (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={timeClassNames}
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={`${time} – ${
                          readableSelectedDate || "valgt dato"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}

                  {selectedTime && (
                    <button
                      type="button"
                      onClick={handleContinue}
                      className={styles.continueButton}
                    >
                      Fortsæt
                    </button>
                  )}
                </div>
              ) : (
                <p className={styles.helperText}>
                  Ingen ledige tider denne dag.
                </p>
              )
            ) : (
              <p className={styles.helperText}>
                Vælg en dato i kalenderen for at se ledige tider.
              </p>
            )}
          </div>
        </section>
      )}

      {showForm && !isSubmitted && (
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          aria-labelledby="form-heading"
          aria-describedby={errorMessage ? "booking-error" : undefined}
        >
          <h2 id="form-heading" className={styles.subheading}>
            Udfyld dine oplysninger
          </h2>
          <p className={styles.selectedSlot}>
            Du har valgt{" "}
            <strong>
              {selectedDate} kl. {selectedTime}
            </strong>
          </p>

          <label className={styles.field}>
            <span>
              Navn <span className={styles.required}>*</span>
            </span>
            <input name="name" required className={styles.input} />
          </label>

          <label className={styles.field}>
            <span>
              Email <span className={styles.required}>*</span>
            </span>
            <input
              type="email"
              name="email"
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <span>
              Besked <span className={styles.required}>*</span>
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className={styles.textarea}
            />
          </label>

          {errorMessage && (
            <p id="booking-error" className={styles.errorText} role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? "Sender booking..." : "Bekræft booking"}
          </button>
        </form>
      )}

      {isSubmitted && (
        <section
          className={styles.confirmation}
          aria-live="polite"
          role="status"
        >
          <h2 className={styles.subheading}>Tak for din booking!</h2>
          <p>
            Du modtager en bekræftelse på email, når bookingen er gennemført.
          </p>
        </section>
      )}
    </main>
  );
}
