import { ReactNode } from 'react';
import { MaterialSymbolIcon } from '../../MaterialSymbolIcon';
import { TextField } from '../../TextField';
import './Appbar.css';

export function Appbar({
  icon, title, searchCallback, tailing,
}: {
  icon?: ReactNode;
  title?: ReactNode;
  searchCallback?: (value: string) => void;
  tailing?: ReactNode;
}) {
  return (
    <header className="r-appbar-wrapper">
      <div className="r-appbar-title">
        <div className="r-appbar-title__icon">
          {icon}
        </div>
        <div>
          {title}
        </div>
      </div>
      <div className="r-appbar-tailing">
        {searchCallback && (
          <div>
            <TextField
              prefix={<MaterialSymbolIcon icon="search" />}
              value={undefined}
              onChange={(e) => {
                searchCallback(e.target.value);
              }}
            />
          </div>
        )}
        {tailing}
      </div>
    </header>
  );
}
