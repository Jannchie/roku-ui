import { ReactNode, useEffect, useState, lazy, Suspense, useRef, useContext } from 'react'
import { Panel, useAutoSetHeight } from '../../src'
import hljs from 'highlight.js'
import { ThemeContext } from '../app'
import 'highlight.js/styles/tokyo-night-dark.css'

export const Demo = ({ name }: {
  name: string
}) => {
  const [comp, setComp] = useState<ReactNode>()
  const [code, setCode] = useState<string>()
  useEffect(() => {
    const Comp = lazy(async () => await import(`../demo/${name}.demo.tsx`))
    setComp(<Comp/>)
    import(`../demo/${name}.demo.tsx?raw`).then((module) => {
      setCode(module.default.replace('../../src', 'roku-ui'))
    }).catch((err) => console.error(err))
  }, [name])
  const compRef = useRef<HTMLDivElement>(null)
  useAutoSetHeight(compRef)
  const { theme } = useContext(ThemeContext)
  return (

    <Panel
      border
      style={{ padding: 0, maxWidth: 'calc(100vw - 16px)' }}>
      <div ref={compRef} style={{
        transitionProperty: 'height',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '300ms',
        overflow: 'hidden',
        padding: 16,
        borderBottom: theme === 'dark' ? '1px solid rgba(102, 102, 102, 0.4)' : '1px solid rgb(228 228 231 / var(--tw-border-opacity))',
      }}>
        <Suspense fallback={<div>Loading...</div>}>
          {comp}
        </Suspense>
      </div>
      <div className="not-prose">
        {code &&
          <pre
            dangerouslySetInnerHTML={{
              __html: hljs.highlightAuto(code, ['tsx']).value,
            }}
            style={{
              margin: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              padding: 16,
              overflowX: 'scroll',
              fontFamily: 'monospace',
              fontSize: 12,
              background: '#1e1e1e',
              color: '#d4d4d4',
            }}
          />
        }
      </div>
    </Panel>
  )
}
