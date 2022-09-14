import { Article } from '../../src'
import Markdown from 'markdown-to-jsx'
import { CompExample } from './CompExample'
export function Page ({ md }: { md: string }) {
  return (
    <div style={{ marginLeft: 8, marginRight: 8 }}>
      <Article>
        <Markdown options={{
          overrides: {
            CompExample: { component: CompExample },
            Article: { component: Article },
          },
        }}>
          {md}
        </Markdown>
      </Article>
    </div>
  )
}
