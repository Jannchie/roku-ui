import "./RModal.css";
import { FC, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FadeTransition } from "../Transitions";
import { ScaleTransition } from "../Transitions/ScaleTransition";
export const RModal: FC<{
  children?: ReactNode;
  show?: boolean;
  hide?: () => void;
  background?: boolean;
  className?: string;
}> = ({ background, children, show, hide: hide = () => {} }) => {
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
};
