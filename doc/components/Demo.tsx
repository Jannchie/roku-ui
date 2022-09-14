import { ReactNode, useEffect, useState, lazy, Suspense } from 'react'
import { Panel } from '../../src'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
export const Demo = ({ name }: {
  name: string
}) => {
  const [comp, setComp] = useState<ReactNode>()
  const [code, setCode] = useState<string>()
  useEffect(() => {
    const Comp = lazy(async () => await import(`../demo/${name}.demo.tsx`))
    setComp(<Comp/>)
    import(`../demo/${name}.demo.tsx?raw`).then((module) => {
      setCode(module.default)
    }).catch((err) => console.error(err))
  }, [name])
  return (
    <div>
      <Panel border style={{ padding: 0 }}>
        <div style={{ padding: 16, borderBottom: '1px solid rgba(102, 102, 102, 0.4)' }}>
          <Suspense fallback={<div>Loading...</div>}>
            {comp}
          </Suspense>
        </div>
        {code && <pre dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code, ['tsx']).value }} style={{ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }} />}
      </Panel>
    </div>
  )
}
