import { createPortal } from "react-dom";
import { ModalProps } from "../interfaces/Modal"


function Modal({children}: ModalProps): JSX.Element {
  return createPortal(
    <div className="modal-background">
      {children}
    </div>,
    document.getElementById("modal") as HTMLElement
  );
}

export { Modal };
