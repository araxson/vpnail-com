'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCw, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section, Container } from '@/components/layouts';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    console.error('Page Error:', error);

    if (process.env.NODE_ENV === 'production') {
      console.error('Production Error:', {
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        digest: error.digest,
        retryCount,
      });
    }
  }, [error, retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    reset();
  };

  const handleReload = () => {
    window.location.reload();
  };

  const getErrorMessage = () => {
    if (error.message.includes('fetch')) {
      return 'We had trouble loading some data. This might be a temporary network issue.';
    }
    if (error.message.includes('404')) {
      return 'The requested page or resource could not be found.';
    }
    return 'We encountered an unexpected error while loading this page.';
  };

  return (
    <Section className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12">
      <Container className="max-w-2xl">
        <Card className="border-orange-200 bg-orange-50/50 dark:border-orange-800 dark:bg-orange-950/30">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-orange-600 dark:text-orange-400" />
            </div>
            <CardTitle className="text-2xl sm:text-3xl text-orange-800 dark:text-orange-200">
              Oops! Something went wrong
            </CardTitle>
            <p className="text-orange-700 dark:text-orange-300 mt-2">
              {getErrorMessage()}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleRetry}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try Again {retryCount > 0 && `(${retryCount})`}
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

            {/* Error Details Toggle */}
            <div className="border-t border-orange-200 dark:border-orange-800 pt-4">
              <div className="flex justify-center text-orange-700 dark:text-orange-300">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  {showDetails ? (
                    <>
                      <ChevronUp className="mr-2 h-4 w-4" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="mr-2 h-4 w-4" />
                      Show Error Details
                    </>
                  )}
                </Button>
              </div>

              {showDetails && (
                <div className="mt-4 bg-orange-100/50 dark:bg-orange-900/20 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong>Error Message:</strong>
                  </p>
                  <p className="text-sm font-mono mt-1 break-all text-muted-foreground">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs mt-2 opacity-70 text-muted-foreground">
                      Error ID: {error.digest}
                    </p>
                  )}
                  <p className="text-xs mt-2 opacity-70 text-muted-foreground">
                    Timestamp: {new Date().toLocaleString()}
                  </p>
                </div>
              )}
            </div>

            {/* Help Section */}
            <div className="text-center pt-4 border-t border-orange-200 dark:border-orange-800">
              <p className="text-sm mb-3 text-muted-foreground">
                Need help? Our support team is here to assist you.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Contact Support
                  </Link>
                </Button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <p className="text-sm font-medium mb-2 text-blue-800 dark:text-blue-200">
                Quick troubleshooting tips:
              </p>
              <ul className="text-sm text-blue-700 dark:text-blue-300 list-disc list-inside space-y-1">
                <li>Check your internet connection</li>
                <li>Try refreshing the page</li>
                <li>Clear your browser cache</li>
                <li>Try accessing the site in an incognito/private window</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  );
}
