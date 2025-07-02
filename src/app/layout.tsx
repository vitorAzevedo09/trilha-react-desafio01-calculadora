import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="h-screen w-full flex flex-col items-center justify-center"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#fafafa",
        }}
      >
        {children}
      </body>
    </html>
  );
}
