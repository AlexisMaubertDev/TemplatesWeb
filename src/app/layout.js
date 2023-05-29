import "./globals.css";

export const metadata = {
  title: "Crea tu propia página",
  description: "Podés elegir los elementos que quieras!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
