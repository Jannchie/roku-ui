import "./RModal.css";
import { Dialog, Transition } from "@headlessui/react";
import { FadeTransitionChild, ScaleTransitionChild } from "../..";
import { RModalProps } from "./RModalProps";

export function RModal({
  background,
  children,
  show,
  hide: hide = () => {},
}: RModalProps) {
  return (
    <Transition appear show={show}>
      <Dialog
        className="relative z-10"
        onClose={() => {
          hide();
        }}
      >
        {background && (
          <FadeTransitionChild>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </FadeTransitionChild>
        )}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <ScaleTransitionChild>
              <Dialog.Panel>{children}</Dialog.Panel>
            </ScaleTransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
