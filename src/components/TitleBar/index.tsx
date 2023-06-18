import { type ReactNode } from 'react'
import { Btn } from '../Btn'
import { TablerBoxMultiple, TablerX } from '@roku-ui/icons-tabler'
import { MaterialSymbolsMinimize } from '@roku-ui/icons-material-symbols'
import classnames from 'classnames'
import { useTheme } from '../../hooks'

export function TitleBar ({
  logo,
  title,
  os = 'win',
  ...other
}: {
  title?: ReactNode
  logo?: ReactNode
  os?: 'mac' | 'win'
}) {
  return (
    <div className="flex items-center">
      { os === 'win'
        ? (
          <WindowTitleBar
            logo={logo}
            title={title}
          />
        )
        : (
          <MacTitleBar
            logo={logo}
            title={title}
          />
        ) }
    </div>
  )
}

export function MacTitleBar ({
  logo,
  title,
}: {
  logo?: ReactNode
  title?: ReactNode
}) {
  return (
    <>
      <div className="flex gap-2 p-2">
        <div className="w-3 h-3 bg-red-5 rounded-full" />
        <div className="w-3 h-3 bg-yellow-5 rounded-full" />
        <div className="w-3 h-3 bg-green-5 rounded-full" />
      </div>
      <div className="p-2">{ title }</div>
    </>
  )
}

export function WindowTitleBar ({
  logo,
  title,
}: {
  title?: ReactNode
  logo?: ReactNode
}) {
  const { theme } = useTheme()
  return (
    <>
      <div className="flex-grow-2 w-1/5">
        { logo }
      </div>
      <div className="min-w-[0] max-w-[fit-content] mx-2 text-sm w-3/5">
        { title }
      </div>
      <div className="flex-grow-2 flex justify-end w-1/5">
        <Btn
          contrast
          hoverColor="default"
        >
          <MaterialSymbolsMinimize width={16} />
        </Btn>
        <Btn
          contrast
        >
          <TablerBoxMultiple width={16} />
        </Btn>
        <Btn
          contrast
          className={classnames({ 'hover:text-white': theme === 'light' })}
          hoverColor="danger"
        >
          <TablerX width={16} />
        </Btn>
      </div>
    </>
  )
}
