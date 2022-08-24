import {
  ReactNode, useState, useMemo, useContext, createContext,
} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Appbar, Btn, HolyGrail, MaterialSymbolIcon,
} from '../src';
import '../src/index.css';

type ThemeType = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeType>({
  theme: 'dark',
  setTheme: () => {},
});
const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const ctx = useMemo(() => ({ theme, setTheme: (value: 'light'|'dark') => setTheme(value) }), [theme, setTheme]);
  return (
    <ThemeContext.Provider value={ctx}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

function getNavIcon(icon: string) {
  function activableBtn({ isActive }: { isActive: boolean; }) {
    return (
      <Btn
        icon
        color={isActive ? 'primary' : 'default'}
      >
        <MaterialSymbolIcon icon={icon} />
      </Btn>
    );
  }
  return activableBtn;
}

function DocLayout() {
  const { theme, setTheme } = useContext(ThemeContext);

  const appbar = (
    <Appbar
      title="Roku UI"
      tailing={(
        <div>
          <Btn
            icon
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light');
            }}
          >
            <MaterialSymbolIcon
              icon={theme === 'light' ? 'dark_mode' : 'light_mode'}
            />
          </Btn>
        </div>
      )}
    />
  );
  const innerLeft = (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      padding: 8,
      gap: 8,
    }}
    >
      <NavLink to="">{getNavIcon('home')}</NavLink>
      <NavLink to="comment">{getNavIcon('comment')}</NavLink>
    </div>
  );
  return (
    <HolyGrail
      header={appbar}
      main={<Outlet />}
      innerLeft={innerLeft}
    />
  );
}

export const App = () => (
  <ThemeProvider>
    <DocLayout />
  </ThemeProvider>
);
