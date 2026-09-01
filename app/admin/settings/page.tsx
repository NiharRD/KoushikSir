import { prisma } from "@/lib/prisma"
import { updateSettings } from "./actions"
import { KeyValueEditor } from "@/components/admin/key-value-editor"
import { ImageUploadInput } from "@/components/admin/image-upload-input"

export default async function AdminSettings() {
  const settings = await prisma.siteSettings.upsert({
    where: { id: 1 },
    create: { 
      id: 1,
      socialLinks: JSON.stringify([
        { key: "Google Scholar", value: "https://scholar.google.com/citations?user=j3-TJncAAAAJ&hl=en" },
        { key: "ResearchGate", value: "https://www.researchgate.net/profile/Koushik-Roy-10" },
        { key: "LinkedIn Profile", value: "https://www.linkedin.com/in/dr-koushik-roy-2b87768a/?originalSubdomain=in" },
        { key: "Academia.edu", value: "https://iitp.academia.edu/KoushikRoy" },
        { key: "IIT Patna Faculty Page", value: "https://www.iitp.ac.in/" }
      ])
    },
    update: {},
  })

  return (
    <div className="p-10 max-w-4xl">
      <h1 className="font-serif text-3xl text-primary mb-8">Site Settings</h1>

      <form action={updateSettings} className="space-y-12">
        {/* Section A: Hero Stats */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="font-serif text-xl text-primary">Hero Stats Bar</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Note: Publication count and Ph.D. Scholars count are auto-computed from the database.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-card border border-border p-6 rounded-lg">
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Years of Experience Label</label>
              <input 
                name="yearsExperience" 
                defaultValue={settings.yearsExperience} 
                required 
                className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-muted-foreground mb-1">Research Grants Label</label>
              <input 
                name="grantsLabel" 
                defaultValue={settings.grantsLabel} 
                required 
                className="w-full bg-background border border-border px-3 py-2 text-sm rounded-sm" 
              />
            </div>
          </div>
        </section>

        {/* Section B: Profile Photo */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="font-serif text-xl text-primary">Profile Photo</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Upload the portrait image shown on the hero section.
            </p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded-lg">
            <ImageUploadInput initialUrl={settings.profileImageUrl} />
          </div>
        </section>

        {/* Section C: Social Links */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="font-serif text-xl text-primary">Social & Academic Profiles</h2>
            <p className="text-xs text-muted-foreground mt-1">
              Links shown below the hero description and in the site footer. Use labels like "Google Scholar", "LinkedIn", "ResearchGate" to auto-match icons.
            </p>
          </div>
          
          <div className="bg-card border border-border p-6 rounded-lg">
            <KeyValueEditor 
              name="socialLinks" 
              initialValue={settings.socialLinks} 
              keyPlaceholder="Label (e.g. Google Scholar)"
            />
          </div>
        </section>

        <div className="pt-4 border-t border-border flex justify-end">
          <button 
            type="submit" 
            className="px-8 py-3 bg-primary text-primary-foreground font-mono text-sm tracking-widest hover:opacity-90 transition-opacity rounded-sm"
          >
            Save All Settings
          </button>
        </div>
      </form>
    </div>
  )
}
