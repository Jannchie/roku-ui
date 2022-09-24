import {
  ReactNode, useState, useMemo, useContext, createContext, useEffect, useRef,
} from 'react'
import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, Transition } from 'react-transition-group'
import {
  Appbar, Btn, Footer, HolyGrail, MaterialSymbolIcon, useOnClickOutside,
} from '../src'
import useWindowSize, { WindowSize } from '../src/hooks/useWindowSize'
import '../src/index.css'
import { router } from './router'

interface ThemeType {
  theme: 'light' | 'dark' | 'auto'
  setTheme: (theme: 'light' | 'dark') => void
}

export const ThemeContext = createContext<ThemeType>({
  theme: 'auto',
  setTheme: () => {},
})

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (typeof window !== 'undefined' && isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const ctx = useMemo(() => ({
    theme,
    setTheme: (value: 'light' | 'dark' | 'auto') => {
      setTheme(value)
      if (value === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    },
  }), [theme, setTheme])
  return (
    <ThemeContext.Provider value={ctx}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

function getNavItem (icon: string, hover: boolean, title: string, width: number) {
  return function ActivableBtn ({ isActive }: { isActive: boolean }) {
    return (
      <Btn
        left
        text
        style={{
          transition: 'all color 0.3s ease-in-out',
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
          <div style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
            transition: 'opacity 0.3s ease-in-out, width 0.3s ease-in-out',
            width: hover ? `${width - 72}px` : '0px',
            opacity: hover ? 1 : 0,
          }}
          >
            {title}
          </div>
        </div>
      </Btn>
    )
  }
}

function DocLayout () {
  const { theme, setTheme } = useContext(ThemeContext)
  const size = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)
  const appbar = <Appbar
    style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1 }}
    varient="pattern"
    title="Roku UI"
    leading={size.width < 640
      ? (
        <Btn
          text
          icon
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          <MaterialSymbolIcon
            icon="menu"
          />
        </Btn>
      )
      : null}
    tailing={(
      <Btn
        text
        icon
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
      >
        <MaterialSymbolIcon
          icon={theme === 'light' ? 'dark_mode' : 'light_mode'}
        />
      </Btn>
    )}
  />
  const pageBodyRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const outlet = useOutlet()
  const timeoutMS = 200
  return (
    <HolyGrail
      style={{
        minHeight: '100vh',
      }}
      innerLeft={<LeftMenu size={size} showMenu={ showMenu} setShowMenu={setShowMenu} />}
      header={appbar}
      main={
        <SwitchTransition
          mode="out-in"
        >
          <Transition
            key={location.pathname}
            unmountOnExit
            nodeRef={pageBodyRef}
            timeout={timeoutMS}
          >
            {(state) => {
              return <div ref={pageBodyRef} style={{
                marginTop: 100,
                minHeight: 'calc(100vh - 100px - 29px)',
                transition: `all ${timeoutMS}ms ease-out`,
                opacity: state === 'entered' ? 1 : 0,
                transform: state === 'entered' ? 'translateY(0)' : 'translateY(10px)',
              }}>
                {outlet}
              </div>
            }}
          </Transition>
        </SwitchTransition>
      }
      footer={(
        <Footer>Jannchie Studio @ { new Date().getFullYear()}</Footer>
      )}
    />
  )
}

export const App = () => (
  <ThemeProvider>
    <DocLayout />
  </ThemeProvider>
)

function LeftMenu ({
  size, showMenu, setShowMenu,
}: { size: WindowSize, showMenu: boolean, setShowMenu: (show: boolean) => void }) {
  const width = 240
  const { theme } = useContext(ThemeContext)
  const ref = useRef(null)
  useOnClickOutside(ref, () => {
    setShowMenu(false)
  })
  const [hover, setHover] = useState(false)
  return size.width > 640
    ? (
      <div
        style={{
          maxHeight: '100vh',
          position: 'sticky',
          top: 54,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 100,
          padding: 8,
          transition: 'all 0.3s ease-in-out',
          minWidth: hover ? width : 54,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {router.map((route) => (
          <NavLink
            key={route.path}
            end
            to={route.path}
          >
            {getNavItem(route.icon, hover, route.title, width)}
          </NavLink>
        ))}
      </div>
    )
    : <div
      ref={ref}
      style={{
        zIndex: 10,
        height: '100vh',
        position: 'fixed',
        backgroundColor: theme === 'dark' ? 'rgb(24 24 27)' : 'white',
        padding: 8,
        left: showMenu ? 0 : -width,
        transition: 'all 0.3s ease-in-out',
        width,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {router.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
        >
          {getNavItem(route.icon, true, route.title, width)}
        </NavLink>
      ))}
    </div>
}
