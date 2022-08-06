import "./RModal.css";
import { Dialog, Transition } from "@headlessui/react";
import { FadeTransition, ScaleTransition } from "../..";
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
          <FadeTransition>
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </FadeTransition>
        )}
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <ScaleTransition>
              <Dialog.Panel>{children}</Dialog.Panel>
            </ScaleTransition>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
