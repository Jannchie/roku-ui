import { ReactNode, useEffect, useState, lazy, Suspense, useRef } from 'react'
import { Loading, Panel } from '../../src'
import './Demo.css'
export const Demo = ({ name, prose = false }: {
  name: string
  prose?: boolean
}) => {
  const [comp, setComp] = useState<ReactNode>()
  const [code, setCode] = useState<string>()
  useEffect(() => {
    try {
      const Comp = lazy(async () => await import(`../demo/${name}.demo.tsx`))
      setComp(<Comp />)
      void import(`../demo/${name}.demo.tsx?raw`).then((module) => {
        setCode(module.default.replace('../../src', 'roku-ui'))
      })
    } catch (err) {
      console.error(err)
    }
  }, [name])
  const compRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if (ref.current) {
      window.Prism.highlightElement(ref.current, false, (e) => { })
    }
  }, [code])
  return (
    <Panel
      border
      className={prose ? '' : 'not-prose'}
      style={{ padding: 0, maxWidth: 'calc(100vw - 16px)' }}>
      <div ref={compRef} style={{
        transitionProperty: 'height',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '300ms',
      }}>
        <div>
          <Suspense fallback={<div style={{ height: '8rem', display: 'flex', justifyContent: 'center', padding: '1rem' }}><Loading /></div>}>
            <div
              className="comp-wrapper"
            >
              {comp}
            </div>
          </Suspense>
        </div>
      </div>
      <div className="line-numbers">
        {code &&
          <pre
            style={{
              margin: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              overflowX: 'auto',
              fontFamily: 'monospace',
              fontSize: 12,
              background: '#1e1e1e',
              borderRadius: '0 0 1rem 1rem',
            }}
          >
            <code
              ref={ref}
              className="language-tsx"
            >
              {code}
            </code>
          </pre>
        }
      </div>
    </Panel>
  )
}
