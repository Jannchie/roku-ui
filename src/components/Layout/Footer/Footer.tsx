import { ReactNode } from 'react';
import './Footer.css';

export function Footer({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <footer className="r-footer-wrapper">
      {children}
    </footer>
  );
}
