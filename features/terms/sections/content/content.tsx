import { Section, Container } from '@/components/layouts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { termsContentData } from './content.data'
import { H2, H3, P } from '@/components/ui/typography'

export function TermsContentSection() {
  return (
    <Section>
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>
              <H2 className="text-balance">{termsContentData.title}</H2>
            </CardTitle>
            <P className="text-xs sm:text-sm text-muted-foreground">
              Last updated: {termsContentData.lastUpdated}
            </P>
          </CardHeader>
          <CardContent className="space-y-6">
            {termsContentData.sections.map((section, index) => (
              <div key={index}>
                {index > 0 && <Separator className="mb-6" />}
                <section className="space-y-3">
                  <H3 className="text-balance">{section.heading}</H3>
                  <P className="text-muted-foreground">{section.content}</P>
                </section>
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}
