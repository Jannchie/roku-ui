import { ReactNode } from 'react'
import { Panel, Typography } from '../../src'

export const CompExample = ({ title, desc, children }: {
  title: ReactNode
  desc: ReactNode
  children: ReactNode
}) => (
  <div>
    <Typography.H3>
      {title}
    </Typography.H3>
    <Typography.P>
      {desc}
    </Typography.P>
    <Panel border>
      {children}
    </Panel>
  </div>
)
