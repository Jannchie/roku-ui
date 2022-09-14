import { Article } from '../../src'
import Markdown from 'markdown-to-jsx'
import md from '../markdown/home.md?raw'
export function HomePage () {
  return (
    <Article>
      <Markdown>
        {md}
      </Markdown>
    </Article>
  )
}
