import { Article } from '../../src'
export default function Demo () {
  return (
    <Article style={{ maxWidth: '80ch' }}>
      <h1>标题1</h1>
      <h2>标题2</h2>
      <h3>标题3</h3>
      <p>段落</p>
      <code>代码</code>
      <pre>代码块</pre>
      <ul>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ul>
      <ol>
        <li>列表</li>
        <li>列表</li>
        <li>列表</li>
      </ol>
    </Article>
  )
}
