import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { termsContentData } from './content.data'

export function TermsContentSection() {
  return (
    <Section>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl">{termsContentData.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: {termsContentData.lastUpdated}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            {termsContentData.sections.map((section, index) => (
              <div key={index}>
                {index > 0 && <Separator className="mb-6" />}
                <section>
                  <h2 className="text-2xl font-bold mb-3">{section.heading}</h2>
                  <p className="text-muted-foreground">
                    {section.content}
                  </p>
                </section>
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
