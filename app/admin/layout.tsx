import { auth, signIn, signOut } from "@/auth"
import Link from "next/link"
import { LogOut, Home, FileText, ArrowLeft, FlaskConical, Users, Trophy, Briefcase, Settings } from "lucide-react"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()

  if (!session?.user) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-background p-6">
        <div className="max-w-md w-full p-8 border border-border bg-card text-center rounded-lg shadow-xl">
          <h2 className="font-serif text-2xl text-primary mb-2">CMS Admin Login</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Sign in with an authorized Google account (defined in .env as EMAIL_ADMIN or EMAIL_SIR) to manage site content.
          </p>
          <form action={async () => { "use server"; await signIn("google", { redirectTo: "/admin" }) }}>
            <button type="submit" className="w-full px-6 py-3 bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 border-r border-border bg-card/60 flex flex-col shrink-0">
        <div className="p-6 border-b border-border">
          <h2 className="font-serif text-xl text-primary font-medium">CMS Admin</h2>
          <p className="text-xs text-muted-foreground truncate mt-1">{session.user.email}</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 font-mono text-xs uppercase tracking-wider">
          <Link href="/admin" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <Home size={15} /> Dashboard
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <Settings size={15} /> Site Settings
          </Link>
          <Link href="/admin/publications" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <FileText size={15} /> Publications
          </Link>
          <Link href="/admin/research" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <FlaskConical size={15} /> Research &amp; Grants
          </Link>
          <Link href="/admin/students" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <Users size={15} /> Scholars / Students
          </Link>
          <Link href="/admin/awards" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <Trophy size={15} /> Awards &amp; Honours
          </Link>
          <Link href="/admin/consultancy" className="flex items-center gap-3 px-3 py-2.5 text-foreground hover:bg-secondary/60 rounded-md transition-colors">
            <Briefcase size={15} /> Consultancy
          </Link>
          
          <div className="pt-6 border-t border-border mt-4">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 text-muted-foreground hover:text-orange transition-colors">
              <ArrowLeft size={15} /> View Live Website
            </Link>
          </div>
        </nav>
        <div className="p-4 border-t border-border">
          <form action={async () => { "use server"; await signOut() }}>
            <button type="submit" className="flex w-full items-center gap-3 px-3 py-2 text-destructive hover:bg-destructive/10 rounded-md font-mono text-xs uppercase tracking-wider transition-colors">
              <LogOut size={15} /> Sign out
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto bg-background">
        {children}
      </main>
    </div>
  )
}
