import { Mail, Phone, MapPin, ExternalLink, GraduationCap, BookOpen, School } from "lucide-react"

function LinkedinIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function SiteFooter({ socialLinks = [] }: { socialLinks?: any[] }) {
  return (
    <footer id="contact" className="border-t border-border bg-card/70 backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-primary/95 px-6 py-3 sm:px-10 font-mono text-[0.68rem] uppercase tracking-widest text-primary-foreground flex flex-col sm:flex-row justify-between items-center gap-2 border-b border-primary/20">
        <span>Dr. Koushik Roy — Structural Dynamics &amp; SHM Lab</span>
        <span>Department of Civil &amp; Environmental Engineering</span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 py-12 sm:px-10 max-w-7xl mx-auto">
        {/* Column 1: About */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-primary font-medium">Dr. Koushik Roy</h3>
          <p className="font-mono text-xs uppercase tracking-wider text-orange">
            Assistant Professor, Structural Engineering
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Specializing in vibration-based structural health monitoring, dynamic damage identification, seismic resilience, and soil-structure interaction.
          </p>
          <div className="pt-2 text-xs font-mono text-muted-foreground/80">
            PhD (IIT Kanpur) • MTech (IIT Roorkee / KIT Germany) • BE (BESU Shibpur)
          </div>
        </div>

        {/* Column 2: Contact Details */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-semibold border-b border-border pb-2">
            Get In Touch
          </h3>
          <ul className="space-y-3.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-orange shrink-0" />
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:koushik@iitp.ac.in"
                  className="hover:text-orange transition-colors font-mono text-xs"
                >
                  koushik@iitp.ac.in
                </a>
                <a
                  href="mailto:koushikbesus@gmail.com"
                  className="hover:text-orange transition-colors font-mono text-xs"
                >
                  koushikbesus@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-orange shrink-0" />
              <a
                href="tel:+919936084996"
                className="hover:text-orange transition-colors font-mono text-xs"
              >
                +91 9936084996
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-orange shrink-0" />
              <span className="text-xs leading-relaxed">
                Department of Civil and Environmental Engineering,<br />
                Indian Institute of Technology Patna,<br />
                Bihta, Bihar — 801106, India
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3: Academic Profiles & Links */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-semibold border-b border-border pb-2">
            Academic Profiles
          </h3>
          <ul className="space-y-2.5">
            {socialLinks.length > 0 ? socialLinks.map((link: any, i: number) => {
              const lowerKey = link.key.toLowerCase()
              let Icon = ExternalLink
              if (lowerKey.includes("scholar")) Icon = GraduationCap
              else if (lowerKey.includes("researchgate")) Icon = BookOpen
              else if (lowerKey.includes("linkedin")) Icon = LinkedinIcon
              else if (lowerKey.includes("academia")) Icon = School

              return (
                <li key={i}>
                  <a
                    href={link.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wide text-muted-foreground hover:text-orange transition-all"
                  >
                    <Icon className="h-3.5 w-3.5 text-muted-foreground group-hover:text-orange transition-colors" />
                    <span>{link.key}</span>
                    <ExternalLink className="h-2.5 w-2.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              )
            }) : (
              <p className="text-xs text-muted-foreground">No links added.</p>
            )}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-4 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground/70">
        <span>© {new Date().getFullYear()} Dr. Koushik Roy. All rights reserved.</span>
        <span>IIT Patna Structural Dynamics &amp; SHM Lab</span>
      </div>
    </footer>
  )
}
