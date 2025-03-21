// import { redirect } from "next/navigation";
import Link from "next/link";
import SessionProvider from "./SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = null

  // if (!session?.user) redirect("/login");

  return (
    <SessionProvider value={session || null}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-bold text-xl">
                Next.js 15 Starter
              </Link>
            </div>
            <nav className="flex items-center gap-4">
              <Link 
                href="https://github.com/yourusername/next-15-starter" 
                target="_blank"
                className="text-sm font-medium hover:underline"
              >
                GitHub
              </Link>
              <Link 
                href="https://nextjs.org/docs" 
                target="_blank"
                className="text-sm font-medium hover:underline"
              >
                Docs
              </Link>
            </nav>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Next.js 15 Starter. All rights reserved.
            </p>
            <nav className="flex items-center gap-4">
              <Link 
                href="https://nextjs.org" 
                target="_blank"
                className="text-sm text-muted-foreground hover:underline"
              >
                Next.js
              </Link>
              <Link 
                href="https://tailwindcss.com" 
                target="_blank"
                className="text-sm text-muted-foreground hover:underline"
              >
                Tailwind CSS
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </SessionProvider>
  );
}
