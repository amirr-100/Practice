import Link from "next/link";

const navlinks=[
  {name : "Login", href: "/login"},
  {name : "Register", href : "/register"},
  {name : "forgot password", href: "/forgot-password"},

]

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          {navlinks.map((link) => {
            return(
              <Link key={link.href} href={link.name} >
                {link.name}
              </Link>
            );

          })}
          {children}
        </div>
  
      
      </body>
    </html>
  );
}