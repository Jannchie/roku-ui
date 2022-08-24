import { HTMLAttributes, ReactNode } from 'react';

function H1({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 {...props}>{children}</h1>
  );
}

function H2({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 {...props}>{children}</h2>
  );
}

function H3({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 {...props}>{children}</h3>
  );
}

function H4({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 {...props}>{children}</h4>
  );
}

function H5({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 {...props}>{children}</h5>
  );
}

function H6({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6 {...props}>{children}</h6>
  );
}

function P({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p {...props}>{children}</p>
  );
}

export const Typography = {
  H1, H2, H3, H4, H5, H6, P,
};
