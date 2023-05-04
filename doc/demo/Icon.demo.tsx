import { TablerIcons } from '@roku-ui/icons-tabler'
import { type Color, Flex, Icon, Panel, AutoComplete, type IconVariant } from '../../src'
import { type Rounded, type Size } from '../../src/utils/type'
import { useState } from 'react'

export default function Demo () {
  const colorList: Color[] = ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info']
  const sizeList: Size[] = ['xs', 'sm', 'base', 'md', 'lg', 'xl']
  const roundedList: Rounded[] = ['xs', 'sm', 'base', 'md', 'lg', 'xl', 'full']
  const variantList: IconVariant[] = ['default', 'fill', 'text']

  const [color, setColor] = useState<Color>('default')
  const [size, setSize] = useState<Size>('base')
  const [rounded, setRounded] = useState<Rounded>('base')
  const [variant, setVariant] = useState<IconVariant>('default')
  return (
    <>
      <Icon
        color={color}
        size={size}
        rounded={rounded}
        variant={variant}
      >
        <TablerIcons />
      </Icon>
      <Panel padding>
        <Flex
          gap="0.25rem"
          justify="space-between"
        >
          <AutoComplete
            defaultValue={color}
            setValue={setColor}
            options={colorList}
          />
          <AutoComplete
            defaultValue={size}
            setValue={setSize}
            options={sizeList}
          />
          <AutoComplete
            defaultValue={rounded}
            setValue={setRounded}
            options={roundedList}
          />
          <AutoComplete
            defaultValue={variant}
            setValue={setVariant}
            options={variantList}
          />
        </Flex>
      </Panel>
    </>
  )
}
