import { type ReactNode, useEffect, useState, lazy, Suspense, useRef } from 'react'
import { Flex, Loading, Panel } from '../../src'
import './Demo.css'
import Prism from 'prismjs'

export const DemoNoBG = ({ name, prose = false }: {
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
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }, [name])
  const compRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLPreElement>(null)
  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current, false)
    }
  }, [code])
  return (
    <Flex
      direction="column"
      gap="1rem"
    >
      <div>
        <div>
          <Suspense fallback={<div style={{ height: '8rem', display: 'flex', justifyContent: 'center', padding: '1rem' }}><Loading /></div>}>
            <div>
              { comp }
            </div>
          </Suspense>
        </div>
      </div >
      <Panel
        border
        className={prose ? '' : 'not-prose'}
        style={{ padding: 0, maxWidth: 'calc(100vw - 16px)' }}
      >
        <div ref={compRef} />
        <div
          className="line-numbers"
        >
          { code &&
          <pre
            style={{
              margin: 0,
              overflowX: 'auto',
              fontFamily: 'monospace',
              fontSize: 12,
              background: '#1e1e1e',
              borderRadius: '1rem',
            }}
            tabIndex={-1}
          >
            <code
              ref={ref}
              className="language-tsx"
            >
              { code }
            </code>
          </pre>
          }
        </div>
      </Panel>
    </Flex>
  )
}
