import { ReactNode } from "react";
import { Transition } from "@headlessui/react";

export function FadeTransitionChild({
  children,
  appear = false,
}: {
  children: ReactNode;
  appear?: boolean;
}) {
  return (
    <Transition.Child
      enter="ease-out duration-100 absolute"
      enterFrom="opacity-0"
      enterTo="opacity-100 "
      leave="ease-in duration-100 absolute"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  );
}
