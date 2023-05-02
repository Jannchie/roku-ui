import { type ReactNode, useEffect, useState, lazy, Suspense, useRef } from 'react'
import { Btn, Loading, Panel } from '../../src'
import './Demo.css'
import Prism from 'prismjs'
import { TablerCopy } from '@roku-ui/icons-tabler'

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
    <Panel
      border
      className={prose ? '' : 'not-prose'}
      style={{ padding: 0, maxWidth: 'calc(100vw - 16px)' }}
    >
      <div ref={compRef} >
        <div>
          <Suspense fallback={<div style={{ height: '8rem', display: 'flex', justifyContent: 'center', padding: '1rem' }}><Loading /></div>}>
            <div
              className="comp-wrapper"
            >
              { comp }
            </div>
          </Suspense>
        </div>
      </div>
      { code &&
      <pre
        style={{
          margin: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          overflowX: 'auto',
          fontSize: 12,
          borderRadius: '0 0 1rem 1rem',
          zIndex: 0,
        }}
        tabIndex={-1}
      >
        <Btn
          text
          style={{ position: 'absolute', right: '1rem', color: 'white' }}
          onClick={() => {
            void navigator.clipboard.writeText(code)
          }}
        >
          <TablerCopy width="1rem" />
        </Btn>
        <code
          ref={ref}
          className="language-tsx line-numbers"
        >
          { code }
        </code>
      </pre>
      }
    </Panel>
  )
}
