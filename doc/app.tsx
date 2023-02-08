import {
  useState, useRef,
} from 'react'
import { NavLink, useLocation, useOutlet } from 'react-router-dom'
import { SwitchTransition, Transition } from 'react-transition-group'
import {
  Appbar, Btn, Footer, HolyGrail, MaterialSymbolIcon, Panel, Tag, useOnClickOutside, useTheme,
} from '../src'
import useWindowSize, { type WindowSize } from '../src/hooks/useWindowSize'
import '../src/index.css'
import { router } from './router'

function getNavItem (icon: string, hover: boolean, title: string, width: number) {
  return function ActivableBtn ({ isActive }: { isActive: boolean }) {
    return (
      <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
        <Btn
          left
          text
          icon
          style={{
            margin: '0 8px',
            transition: 'all color 0.1s ease-in-out',
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
          </div>

        </Btn>
        <div
          style={{
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            textAlign: 'left',
            transition: 'opacity 0.3s ease-in-out, width 0.1s ease-in-out',
            width: hover ? `${width - 72}px` : '0px',
            opacity: hover ? 1 : 0,
            fontSize: '0.8rem',
            color: isActive ? 'hsl(var(--r-primary-2)' : 'hsl(var(--r-frontend-2)',
          }}
        >
          {title}
        </div>
      </div>
    )
  }
}

function DocLayout () {
  const { theme, setTheme } = useTheme()
  const size = useWindowSize()
  const [showMenu, setShowMenu] = useState(false)
  const appbar = <Appbar
    style={{ position: 'fixed', top: 0, width: '100%' }}
    varient="pattern"
    title={(<div style={{
      display: 'flex',
      gap: 8,
    }}>
      <span>
        Roku UI
      </span>
      <Tag size="sm">
        Ver.{APP_VERSION}
      </Tag>
    </div>)}
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
      <>
        <Btn text icon onClick={() => window.open('https://github.com/jannchie/roku-ui', '_blank')}>
          <svg style={{
            fill: 'currentColor',
          }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </Btn>
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
      </>
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
                opacity: state === 'entered' ? undefined : 0,
                transform: state === 'entered' ? undefined : 'translateY(10px)',
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
  <DocLayout />
)

function LeftMenu ({
  size, showMenu, setShowMenu,
}: { size: WindowSize, showMenu: boolean, setShowMenu: (show: boolean) => void }) {
  const width = 240
  const ref = useRef(null)
  useOnClickOutside(ref, () => {
    setShowMenu(false)
  })
  const [hover, setHover] = useState(false)
  return size.width > 640
    ? (
      <Panel
        style={{
          maxHeight: '100vh',
          position: 'sticky',
          top: 54,
          display: 'flex',
          flexDirection: 'column',
          marginTop: 100,
          marginLeft: 8,
          marginBottom: 8,
          padding: '16px 0',
          transition: 'all 0.1s ease-in-out',
          minWidth: hover ? width : 54,
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
        onMouseEnter={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}
      >
        {router.filter(d => d.path !== 'test').map((route) => (
          <NavLink
            key={route.path}
            end
            to={route.path}
          >
            {getNavItem(route.icon, hover, route.title, width)}
          </NavLink>
        ))}
      </Panel>
    )
    : <div
      ref={ref}
      className="bg-background-2 shadow"
      style={{
        zIndex: 10,
        height: '100vh',
        position: 'fixed',
        padding: 8,
        left: showMenu ? 0 : -width,
        transition: 'all 0.1s ease-in-out',
        width,
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {router.filter(d => d.path !== 'test').map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
        >
          {getNavItem(route.icon, true, route.title, width)}
        </NavLink>
      ))}
    </div>
}
