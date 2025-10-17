import React, { forwardRef, JSX } from 'react';
import { cn } from '@/lib/utils';

// Reusable helper to create components with consistent structure
const createComponent = <T extends HTMLElement>(
  tag: keyof JSX.IntrinsicElements,
  defaultClassName: string,
  displayName: string
) => {
  const Component = forwardRef<T, React.HTMLAttributes<T>>((props, ref) => {
    return React.createElement(
      tag,
      { ...props, ref, className: cn(defaultClassName, props.className) },
      props.children
    );
  });
  Component.displayName = displayName;
  return Component;
};

export const H1 = createComponent<HTMLHeadingElement>(
  'h1',
  'scroll-m-20 font-[var(--font-playfair)] font-bold tracking-tight leading-tight text-[clamp(2.25rem,1.5rem+2.5vw,3.25rem)]',
  'H1'
);

export const H2 = createComponent<HTMLHeadingElement>(
  'h2',
  'scroll-m-20 font-[var(--font-playfair)] font-bold tracking-tight leading-snug text-[clamp(1.875rem,1.25rem+1.8vw,2.5rem)]',
  'H2'
);

export const H3 = createComponent<HTMLHeadingElement>(
  'h3',
  'scroll-m-20 font-[var(--font-lato)] font-bold tracking-tight leading-snug text-[clamp(1.5rem,1.1rem+1.2vw,2rem)]',
  'H3'
);

export const H4 = createComponent<HTMLHeadingElement>(
  'h4',
  'scroll-m-20 font-[var(--font-lato)] font-semibold tracking-tight leading-snug text-[clamp(1.25rem,1rem+0.8vw,1.5rem)]',
  'H4'
);

export const H5 = createComponent<HTMLHeadingElement>(
  'h5',
  'scroll-m-20 font-[var(--font-lato)] font-semibold leading-snug text-[1.125rem]',
  'H5'
);

export const H6 = createComponent<HTMLHeadingElement>(
  'h6',
  'scroll-m-20 font-[var(--font-lato)] font-semibold leading-snug text-[1rem]',
  'H6'
);

export const Lead = createComponent<HTMLParagraphElement>(
  'p',
  'font-[var(--font-lato)] text-lg md:text-xl leading-relaxed text-muted-foreground',
  'Lead'
);

export const P = createComponent<HTMLParagraphElement>(
  'p',
  'font-[var(--font-lato)] leading-relaxed [&+&]:mt-6',
  'P'
);

export const Large = createComponent<HTMLDivElement>(
  'div',
  'font-[var(--font-lato)] text-lg font-semibold',
  'Large'
);

export const Small = createComponent<HTMLParagraphElement>(
  'p',
  'font-[var(--font-lato)] text-sm font-medium leading-none',
  'Small'
);

export const Muted = createComponent<HTMLSpanElement>(
  'span',
  'font-[var(--font-lato)] text-sm text-muted-foreground',
  'Muted'
);

export const InlineCode = createComponent<HTMLSpanElement>(
  'code',
  'relative rounded-sm bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  'InlineCode'
);

export const MultilineCode = createComponent<HTMLPreElement>(
  'pre',
  'relative rounded-sm bg-muted p-4 font-mono text-sm font-semibold overflow-x-auto',
  'MultilineCode'
);

export const List = createComponent<HTMLUListElement>(
  'ul',
  'my-6 ml-6 list-disc [&>li]:mt-1',
  'List'
);

export const Quote = createComponent<HTMLQuoteElement>(
  'blockquote',
  'mt-6 border-l-2 pl-6 italic text-muted-foreground',
  'Quote'
);
