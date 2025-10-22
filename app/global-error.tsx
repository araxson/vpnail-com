'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, MessageCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, Container } from '@/components/layouts';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);

    if (process.env.NODE_ENV === 'production') {
      // Example: sendErrorToService(error);
    }
  }, [error]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <html>
      <body className="bg-background">
        <Section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <Container className="max-w-2xl" noPaddingMobile>
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader className="text-center pb-6">
                <div className="flex justify-center mb-4">
                  <AlertTriangle className="h-16 w-16 text-destructive" />
                </div>
                <CardTitle className="text-2xl sm:text-3xl text-destructive">
                  Critical Error
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  We encountered a critical error that affected the entire application.
                  This is unusual and we apologize for the inconvenience.
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Error Details */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Error Details:</strong>
                  </p>
                  <p className="text-sm font-mono mt-1 break-all text-muted-foreground">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs mt-2 opacity-70 text-muted-foreground">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => reset()}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Try Again
                  </Button>

                  <Button
                    variant="outline"
                    onClick={handleReload}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reload Page
                  </Button>

                  <Button variant="outline" asChild>
                    <Link href="/">
                      <Home className="mr-2 h-4 w-4" />
                      Go Home
                    </Link>
                  </Button>
                </div>

                {/* Contact Support */}
                <div className="text-center pt-4 border-t border-border/50">
                  <p className="text-sm mb-3 text-muted-foreground">
                    If this error persists, please contact our support team:
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                </div>

                {/* Technical Info */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Victoria Park Nails and Spa &copy; {new Date().getFullYear()} - Error Recovery System
                  </p>
                </div>
              </CardContent>
            </Card>
          </Container>
        </Section>
      </body>
    </html>
  );
}
