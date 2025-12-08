import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mark Andersen Coaching",
  description: "Personlig træning, kostvejledning og vanecoaching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <script async src="https://www.instagram.com/embed.js"></script>
        <Footer />
      </body>
    </html>
  );
}
