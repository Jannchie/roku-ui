import {
  ReactNode, useState, useMemo, useContext, createContext,
} from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  Appbar, Btn, HolyGrail, MaterialSymbolIcon, Typography,
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

function getNavIcon(icon: string, hover: boolean, title: string, width: number) {
  function activableBtn({ isActive }: { isActive: boolean; }) {
    return (
      <Btn
        left
        text
        style={{
          transition: 'all 0.3s ease-in-out',
        }}
        color={isActive ? 'primary' : 'default'}
      >
        <div style={{
          display: 'flex',
          gap: 16,
        }}
        >

          <MaterialSymbolIcon
            style={{
            }}
            icon={icon}
          />
          <Typography.Button style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
            width: hover ? `${width - 72}px` : '0px',
            transition: 'all 0.3s ease-in-out',
            opacity: hover ? 1 : 0,
          }}
          >
            {title}
          </Typography.Button>
        </div>
      </Btn>
    );
  }
  return activableBtn;
}

function DocLayout() {
  const { theme, setTheme } = useContext(ThemeContext);
  const width = 240;
  const appbar = (
    <Appbar
      title="Roku UI"
      tailing={(
        <div>
          <Btn
            text
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
  const [hover, setHover] = useState(false);
  const innerLeft = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 8,
        gap: 8,
        transition: 'all 0.3s ease-in-out',
        width: hover ? width : 54,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NavLink to="">{getNavIcon('home', hover, 'Home', width)}</NavLink>
      <NavLink to="comment">{getNavIcon('comment', hover, 'Comment', width)}</NavLink>
      <NavLink to="typography">{getNavIcon('title', hover, 'Typography', width)}</NavLink>
      <NavLink to="btn">{getNavIcon('crop_16_9', hover, 'Button', width)}</NavLink>
      <NavLink to="result">{getNavIcon('check_circle', hover, 'Result', width)}</NavLink>
      <NavLink to="chip">{getNavIcon('label', hover, 'Chip', width)}</NavLink>
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
