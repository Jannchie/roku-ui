import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactNode } from 'react';
import { Btn, TextField } from '../..';
import { MaterialSymbolIcon } from '../../components/MaterialSymbolIcon';

function Appbar({
  icon, title, searchCallback, tailing,
}: {
  icon?: ReactNode;
  title?: ReactNode,
  searchCallback?: (value: string) => void
  tailing?: ReactNode;
}) {
  return (
    <div className="flex text-sm w-full border-b border-default-700 bg-default-800 px-4 py-1 items-center justify-between">
      <div className="my-3 mx-2 flex">
        <div className="mr-2">
          {icon}
        </div>
        <div>
          {title}
        </div>
      </div>
      <div className="flex gap-2">
        {
          searchCallback && (
            <div>
              <TextField
                prefix={<MaterialSymbolIcon icon="search" />}
                value={undefined}
                onChange={(e) => {
                  searchCallback(e.target.value);
                }}
              />
            </div>
          )
        }
        {tailing}
      </div>
    </div>
  );
}

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
