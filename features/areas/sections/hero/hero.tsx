import { Section, Container } from '@/components/layouts'
import { areasHeroData } from './hero.data'
import { H1, Lead } from '@/components/ui/typography'

export function AreasHeroSection() {
  return (
    <Section>
      <Container>
        <div className="space-y-4">
          <H1>{areasHeroData.title}</H1>
          <Lead>{areasHeroData.description}</Lead>
        </div>
      </Container>
    </Section>
  )
}
