import classNames from 'classnames'
import { createContext, HTMLAttributes, ReactElement, ReactNode, useContext } from 'react'
import './Steps.css'
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
      className={classNames('flex items-center whitespace-nowrap gap-2 transition-all', {
        'text-primary-1': current >= index,
        'text-fg-3': current < index,
      })}
      {...props}
    >
      {children}
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
      <ul {...props} className="r-step-container flex gap-2 justify-between items-stretch">
        {children}
      </ul>
    </ctx.Provider>
  )
}

export const Step = Object.assign({}, { Container, Item })
