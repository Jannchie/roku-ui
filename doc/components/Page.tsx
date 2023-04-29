import { Article, Notice } from '../../src'
import Markdown from 'markdown-to-jsx'
import { Demo } from './Demo'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DemoNoBG } from './DemoNoBG'

const DocNotice = ({ type, content }: {
  type: 'info' | 'warning' | 'danger'
  content: string
}) => {
  return <Notice color={type} title={type.toUpperCase()} desc={content} className="my-2" />
}
export function Page ({ md = '' }: { md?: string, path?: string }) {
  const { pathname } = useLocation()
  const [body, setBody] = useState(md)
  useEffect(() => {
    if (body === '') {
      const name = pathname.replace('/', '')
      void import(`../markdown/${name}.md?raw`).then(md => {
        setBody(md.default)
      })
    }
  }, [body, pathname])
  return (
    <div style={{ marginLeft: 8, marginRight: 8, marginBottom: 100 }}>
      <Article style={{ maxWidth: '80ch' }}>
        <Markdown options={{
          overrides: {
            Article: { component: Article },
            Demo: { component: Demo },
            DemoNoBG: { component: DemoNoBG },
            Notice: { component: DocNotice },
          },
        }}>
          { body }
        </Markdown>
      </Article>
    </div>
  )
}
