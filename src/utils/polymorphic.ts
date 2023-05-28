/**
 * Referenced from https://github.com/mantinedev/mantine
 */
import { type ElementType, type ComponentPropsWithRef, type ComponentPropsWithoutRef, type FunctionComponent, type ReactElement } from 'react'

type ExtendedProps<Props = Record<string, unknown>, OverrideProps = Record<string, unknown>> = OverrideProps & Omit<Props, keyof OverrideProps>

type PropsOf<C extends ElementType> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>

export interface PolymorphicComponentProp<C> {
  as?: C
}

type InheritedProps<C extends ElementType, Props = Record<string, unknown>> = ExtendedProps<PropsOf<C>, Props>

export type PolymorphicRef<C> = C extends ElementType
  ? ComponentPropsWithRef<C>['ref']
  : never

export type PolymorphicComponentProps<C, Props = Record<string, unknown>> = C extends ElementType
  ? InheritedProps<C, Props & PolymorphicComponentProp<C>> & { ref?: PolymorphicRef<C> }
  : Props & { component: ElementType }

export function createPolymorphicComponent<
  ComponentDefaultType,
  Props,
  StaticComponents = Record<string, never>,
> (component: any) {
  type ComponentProps<C> = PolymorphicComponentProps<C, Props>

  type _PolymorphicComponent = <C = ComponentDefaultType>(
    props: ComponentProps<C>
  ) => ReactElement

  type ComponentProperties = Omit<FunctionComponent<ComponentProps<any>>, never>

  type PolymorphicComponent = _PolymorphicComponent & ComponentProperties & StaticComponents

  return component as PolymorphicComponent
}
