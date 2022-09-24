import { Article } from '../../src'
import Markdown from 'markdown-to-jsx'
import { Demo } from './Demo'
export function Page ({ md }: { md: string, path?: string }) {
  return (
    <div style={{ marginLeft: 8, marginRight: 8, marginBottom: 100 }}>
      <Article style={{ maxWidth: '80ch' }}>
        <Markdown options={{
          overrides: {
            Article: { component: Article },
            Demo: { component: Demo },
          },
        }}>
          {md}
        </Markdown>
      </Article>
    </div>
  )
}
