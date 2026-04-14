export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
    
          {children}
        

        

        <footer
        style={{
          backgroundColor: "skyblue",
          padding : 15,
        }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}