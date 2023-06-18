import classnames from 'classnames'
import { createContext, type HTMLAttributes, type ReactElement, type ReactNode, useContext } from 'react'
type StepItemProps = {
  index: number
  children?: ReactNode
} & HTMLAttributes<HTMLLIElement>

type StepContainerProps = {
  current: number
  children: Array<ReactElement<StepItemProps>> | ReactElement<StepItemProps>
} & HTMLAttributes<HTMLUListElement>

const ctx = createContext({ current: 0 })

function Item ({
  children,
  title,
  index,
  className,
  ...props
}: StepItemProps) {
  const { current } = useContext(ctx)
  return (
    <li
      className={classnames('flex items-center whitespace-nowrap gap-2', {
        'text-primary-1': current >= index,
        'text-f-3': current < index,
      })}
      {...props}
    >
      { children }
    </li>
  )
}
function Container ({
  children,
  current,
  className,
  ...props
}: StepContainerProps) {
  return (
    <ctx.Provider value={{ current }}>
      <ul
        {...props}
        className="flex gap-2 justify-between items-stretch"
      >
        { children }
      </ul>
    </ctx.Provider>
  )
}

export const Step = Object.assign({}, { Container, Item })
