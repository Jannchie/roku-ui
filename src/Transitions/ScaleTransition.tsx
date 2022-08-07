import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

export function ScaleTransitionChild({
  children,
  as = "div",
  appear = false,
}: {
  children: ReactNode;
  as?: any;
  appear?: boolean;
}) {
  return (
    <Transition.Child
      enter="ease-out duration-100"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
      as={as}
      appear={appear}
    >
      {children}
    </Transition.Child>
  );
}

export function ScaleTransition({
  children,
  as = "div",
  show = true,
  appear = false,
}: {
  children: ReactNode;
  as?: any;
  show?: boolean;
  appear?: boolean;
}) {
  return (
    <Transition
      enter="ease-out duration-100"
      enterFrom="opacity-0 scale-0"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-0"
      as={as}
      show={show}
      appear={appear}
    >
      {children}
    </Transition>
  );
}
