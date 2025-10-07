import { TermsContentSection } from './sections/content'

export function TermsPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <TermsContentSection />
      </div>
    </main>
  )
}
