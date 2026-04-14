export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header 
        style = {{
          backgroundColor: 'beige',
          padding:15,
          
        }}>
          <p>Header</p>


        </header>
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