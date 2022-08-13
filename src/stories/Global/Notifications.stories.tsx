import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useRef } from 'react';
import { Notifications, pushNotice, Btn } from '../..';

export default {
  component: Btn,
  title: 'Global/Notifications',
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = () => {
  const idx = useRef(0);
  return (
    <div style={{ height: 500, position: 'relative', inset: 5 }}>
      <Btn
        onClick={() => {
          const type = ['success', 'info', 'warning', 'danger'][
            idx.current % 4
          ] as 'success' | 'info' | 'warning' | 'danger';
          idx.current += 1;
          pushNotice({
            desc: 'This is the description',
            existsMS: 3000,
            title: 'This is the title',
            type,
          });
        }}
      >
        Show Notification
      </Btn>
      <Notifications bottom className="mt-2 w-96" maxCount={3} />
    </div>
  );
};
export const Default = Template.bind({});

const StackTemplate: ComponentStory<typeof Btn> = () => {
  const idx = useRef(0);
  return (
    <div style={{ height: 500, position: 'relative', inset: 5 }}>
      <Btn
        onClick={() => {
          const type = ['success', 'info', 'warning', 'danger'][
            idx.current % 4
          ] as 'success' | 'info' | 'warning' | 'danger';
          idx.current += 1;
          pushNotice({
            desc: 'This is the description',
            existsMS: 3000,
            title: 'This is the title',
            type,
          });
        }}
      >
        Show Notification
      </Btn>
      <Notifications stack className="mt-2 w-96" maxCount={3} />
    </div>
  );
};
export const Stack = StackTemplate.bind({});
