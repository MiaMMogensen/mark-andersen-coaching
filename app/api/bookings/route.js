import nodemailer from "nodemailer";

export async function GET(request) {
  try {
    const url = `${process.env.FIREBASE_DB_URL}/bookings.json`;
    const res = await fetch(url);
    const data = await res.json();

    // Hvis der ikke er noget endnu
    if (!data || typeof data !== "object") {
      return Response.json({});
    }

    return Response.json(data);
  } catch (error) {
    console.error("GET /api/bookings error:", error);
    return Response.json({ error: "Failed to load bookings" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { date, time, name, email, message } = body;

    // 1. felt-validering
    if (!date || !time || !name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    // Firebase-path til bookingen
    const bookingPath = `${process.env.FIREBASE_DB_URL}/bookings/${date}/${time}.json`;

    // 2. Check om tiden allerede er booket
    const existing = await fetch(bookingPath).then((r) => r.json());

    if (existing) {
      return Response.json(
        { error: "Tiden er allerede booket" },
        { status: 409 }
      );
    }

    // 3. Gem booking i Firebase
    const saveResult = await fetch(bookingPath, {
      method: "PUT",
      body: JSON.stringify({
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!saveResult.ok) {
      return Response.json(
        { error: "Booking kunne ikke gemmes" },
        { status: 500 }
      );
    }

    // 4. Opsæt email-transport (Nodemailer via Gmail SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // Gmail adresse
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
    });

    // 5. Send bekræftelsesmail
    await transporter.sendMail({
      from: `"Mark Andersen Coaching" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Bekræftelse på din booking",
      text: `
Hej ${name},

Tak for din booking til en uforpligtende samtale med mig! 

Jeg glæder mig til at tale med dig.

📌 Dato: ${date}
⏰ Tid: ${time}
📍 Sted: Frijsenborgvej 5A, 8240 Risskov

Bedste hilsner,  
Mark Andersen Coaching
      `,
    });

    // 6. Svar tilbage til frontend
    return Response.json({ success: true });
  } catch (error) {
    console.error("Booking API error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
