import "./globals.css";
// import ParticlesBg from "./components/ParticlesBg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white">{children}</body>
    </html>
  );
}
