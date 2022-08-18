import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Appbar, Btn } from '../..';
import { MaterialSymbolIcon } from '../../components/MaterialSymbolIcon';

const Template: ComponentStory<typeof Appbar> = (args) => (
  <div className="max-w-md m-auto overflow-hidden rounded">
    <Appbar
      searchCallback={(d) => {
        // eslint-disable-next-line no-console
        console.log(d);
      }}
      icon={<MaterialSymbolIcon icon="home" />}
      title={args.title}
      tailing={(
        <Btn icon>
          <MaterialSymbolIcon icon="settings" />
        </Btn>
      )}
    />
  </div>
);
export default {
  component: Appbar,
  title: 'Layout/Appbar',
} as ComponentMeta<typeof Appbar>;

export const Default = Template.bind({});
Default.args = {
  title: 'App Name',
};
