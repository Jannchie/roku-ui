import { ReactNode, useEffect, useState, lazy, Suspense, useRef, useContext } from 'react'
import { Panel, useAutoSetHeight } from '../../src'
import { ThemeContext } from '../app'

export const Demo = ({ name }: {
  name: string
}) => {
  const [comp, setComp] = useState<ReactNode>()
  const [code, setCode] = useState<string>()
  useEffect(() => {
    const Comp = lazy(async () => await import(`../demo/${name}.demo.tsx`))
    setComp(<Comp/>)
    import(`../demo/${name}.demo.tsx?raw`).then((module) => {
      setCode(module.default.replace('../../src', 'roku-ui').replaceAll('\n', ' \n'))
    }).catch((err) => console.error(err))
  }, [name])
  const compRef = useRef<HTMLDivElement>(null)
  useAutoSetHeight(compRef)
  const { theme } = useContext(ThemeContext)
  const ref = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if (ref.current) {
      window.Prism.highlightElement(ref.current, false, (e) => { })
    }
  }, [code])
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
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            {comp}
          </Suspense>
        </div>
      </div>
      <div className="not-prose">
        {code &&
          <pre
            ref={ref}
            className="language-tsx"
            style={{
              margin: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              padding: 16,
              overflowX: 'auto',
              fontFamily: 'monospace',
              fontSize: 12,
              background: '#1e1e1e',
              color: '#d4d4d4',
            }}
          >
            {code}
          </pre>
        }
      </div>
    </Panel>
  )
}
