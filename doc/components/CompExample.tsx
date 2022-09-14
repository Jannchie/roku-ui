import { ReactNode, useRef } from 'react'
import { Panel, Typography } from '../../src'
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js'
// import ReactDOM from 'react-dom/client'
export const CompExample = ({ title, desc, comp, code }: {
  title: ReactNode
  desc: ReactNode
  comp: JSX.Element
  code?: string
}) => {
  const compWrapper = useRef(null)
  // ReactDOM.createRoot(compWrapper.current).render(comp)
  return (
    <div>
      <Typography.H3>
        {title}
      </Typography.H3>
      <Typography.P>
        {desc}
      </Typography.P>
      <Panel border style={{ padding: 16 }}>
        <div ref={compWrapper} />
        {code && <pre dangerouslySetInnerHTML={{ __html: hljs.highlightAuto(code, ['tsx']).value }} />}
      </Panel>
    </div>
  )
}
