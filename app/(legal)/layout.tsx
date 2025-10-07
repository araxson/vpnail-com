export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-4 py-8">
      <div className="prose prose-lg max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
}