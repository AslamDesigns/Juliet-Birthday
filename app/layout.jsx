import "./globals.css";
export const metadata = { title: "Juliet's Creative World", description: "Happy Birthday Juliet 🌸" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
