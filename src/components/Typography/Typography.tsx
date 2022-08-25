import classNames from 'classnames';
import { HTMLAttributes, ReactNode } from 'react';
import './Typography.css';

function H1({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={classNames({
        'r-typography-h1': true,
      }, props.className)}
      {...props}
    >
      {children}
    </h1>
  );
}

function H2({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={classNames({
        'r-typography-h2': true,
      }, props.className)}
      {...props}
    >
      {children}

    </h2>
  );
}

function H3({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={classNames({
        'r-typography-h3': true,
      }, props.className)}
      {...props}
    >
      {children}
    </h3>
  );
}

function H4({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={classNames({
        'r-typography-h4': true,
      }, props.className)}
      {...props}
    >
      {children}
    </h4>
  );
}

function H5({ children, ...props }: {children: ReactNode} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={classNames({
        'r-typography-h5': true,
      }, props.className)}
      {...props}
    >
      {children}

    </h5>
  );
}

function H6({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className={classNames({
        'r-typography-h6': true,
      }, props.className)}
      {...props}
    >
      {children}
    </h6>
  );
}

function P({ children, ...props }: { children: ReactNode } & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={classNames({
        'r-typography-p': true,
      }, props.className)}
      {...props}
    >
      {children}
    </p>
  );
}

export const Typography = {
  H1, H2, H3, H4, H5, H6, P,
};
