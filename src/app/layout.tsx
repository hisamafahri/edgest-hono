import "./globals.css";

export const metadata = {
  title: "Edgest App",
  description: "The latest tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
