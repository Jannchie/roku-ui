import { Tag } from '../../src'

export default function TagBaseDemo () {
  return (
    <div>
      <div>
        <span className="text-lg">
          大标签
        </span>
        <Tag size="lg">LG</Tag>
      </div>
      <div>
        <span className="text-base">
          普通大小的标签
        </span>
        <Tag size="md">MD</Tag>
      </div>
      <div>
        <span className="text-sm">
          小号的标签
        </span>
        <Tag size="sm">SM</Tag>
      </div>
      <div>
        <span className="text-xs">
          更小的标签
        </span>
        <Tag size="xs">XS</Tag>
      </div>
    </div>
  )
}
