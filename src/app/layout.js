import "./globals.css";

export const metadata = {
  title: "Oasis Web Design",
  description: "Alexis, Agustin y Marcos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
