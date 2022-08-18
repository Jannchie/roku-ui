import { ReactNode } from 'react';
import './HolyGrail.css';

export function HolyGrail(args: {
  icon?: ReactNode;
  title?: ReactNode;
  searchCallback?: ((value: string) => void) | undefined;
  tailing?: ReactNode;
  outerLeft?: ReactNode;
  outerRight?: ReactNode;
  innerLeft?: ReactNode;
  innerRight?: ReactNode;
  main?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="holy-grail-wrapper">
      { args.outerLeft && (args.outerLeft) }
      <div className="holy-grail-main-wrapper">
        { args.header && (args.header) }
        <main className="holy-grail-main">
          { args.innerLeft && (args.innerLeft) }
          <div className="holy-grail-content">
            { args.main }
          </div>
          { args.innerRight && (args.innerRight) }
        </main>
        { args.footer && (args.footer) }
      </div>
      { args.outerRight && (args.outerRight) }
    </div>
  );
}
