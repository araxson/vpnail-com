import Link from 'next/link';
import { Home, Search, FileQuestion, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, Container } from '@/components/layouts';

export default function NotFound() {
  return (
    <Section className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container className="max-w-2xl">
        <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/30">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <FileQuestion className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle>
              <h1 className="text-6xl sm:text-7xl text-blue-600 dark:text-blue-400 mb-2">
                404
              </h1>
              <h2 className="text-xl text-blue-800 dark:text-blue-200">
                Page Not Found
              </h2>
            </CardTitle>
            <p className="text-blue-700 dark:text-blue-300 mt-2">
              Sorry, we couldn&apos;t find the page you&apos;re looking for.
              The page may have been moved, deleted, or the URL might be incorrect.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/services" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Browse Services
                </Link>
              </Button>
            </div>

            {/* Popular Pages */}
            <div className="border-t border-blue-200 dark:border-blue-800 pt-6">
              <p className="text-sm font-medium mb-4 text-center text-blue-800 dark:text-blue-200">
                Popular pages you might be looking for:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/services" className="justify-start">
                    Services
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/about" className="justify-start">
                    About Victoria Park Nails and Spa
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/contact" className="justify-start">
                    Contact Us
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/services" className="justify-start">
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </div>

            {/* Help Section */}
            <div className="text-center pt-4 border-t border-blue-200 dark:border-blue-800">
              <p className="text-sm mb-3 text-muted-foreground">
                Still can&apos;t find what you&apos;re looking for?
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="bg-muted/50 rounded-lg p-4 border border-border">
              <p className="text-sm font-medium mb-2">
                Quick Help:
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Check the URL for any typos</li>
                <li>Use the navigation menu to find what you need</li>
                <li>Try searching from our homepage</li>
                <li>Contact us if you believe this is an error</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
