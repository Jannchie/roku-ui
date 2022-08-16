import { ComponentMeta, ComponentStory } from '@storybook/react';
import classNames from 'classnames';
import { useState } from 'react';
import {
  Chip, colorClass, Colors, Digital, TextField,
} from '../..';

export default {
  component: Chip.Group,
  title: 'Display/Statistic',
} as ComponentMeta<typeof Chip.Group>;

function Statistic({
  value,
  label,
  format,
  numberColor = 'default',
  labelColor = 'primary',
  numberClassName,
  labelClassName,
  animate,
  reverse,
  className,
  ...other
}: {
  value: number;
  label: string;
  format?: (val: number) => string;
  numberColor?: Colors;
  labelColor?: Colors;
  reverse?: boolean;
  animate?: boolean;
  numberClassName?: string;
  labelClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const numberColorCls = colorClass({ text: numberColor });
  const labelColorCls = colorClass({ text: labelColor });
  return (
    <div
      {...other}
      className={classNames('flex flex-col', {
        'flex-col-reverse': reverse,
      }, className)}
    >
      <div className={classNames('text-xs', labelColorCls, labelClassName)}>{label}</div>
      <Digital className={classNames('text-3xl', numberColorCls, numberClassName)} animate={animate} value={value} format={format} />
    </div>
  );
}

const Template: ComponentStory<typeof Statistic> = () => {
  const [value, setValue] = useState('100');
  const formater = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    notation: 'compact',
    compactDisplay: 'short',
  });
  return (
    <div className="text-center">
      <TextField
        value={value}
        setValue={setValue}
      />
      <div className="mt-10">
        <Statistic animate value={Number(value)} label="Follower Count" format={formater.format} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip',
};
