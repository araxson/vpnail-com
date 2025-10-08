import { Container } from '@/components/layouts'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className="py-8">
      <div className="prose prose-lg max-w-4xl mx-auto">
        {children}
      </div>
    </Container>
  );
}
