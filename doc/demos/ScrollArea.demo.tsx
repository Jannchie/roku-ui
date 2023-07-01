import { ScrollArea } from '../../src'

// 示例用法
export default function App () {
  const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
  return (
    <ScrollArea className="h-[200px] w-[200px]">
      <div style={{ padding: '15px 20px' }}>
        <div className="Text">Tags</div>
        { TAGS.map((tag) => (
          <div
            key={tag}
            className="Tag"
          >
            { tag }
          </div>
        )) }
      </div>
    </ScrollArea>
  )
}
