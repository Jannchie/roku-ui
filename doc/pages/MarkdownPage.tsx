import { Container, Article, Typography } from '../../src'
import { CompExample } from '../components/CompExample'

export function ArticlePage () {
  return (
    <Container>
      <Typography.H1 className="gradient-text">
          Markdown
      </Typography.H1>
      <CompExample title="文章（Article）" desc="支持格式化从 Markdown 渲染的 HTML。" >
        <Article>
          # 标题1
          ## 标题2
          ### 标题3
        </Article>
      </CompExample>
    </Container>
  )
}
