import { useContext } from "react";
import "./Modal.css";
import ModalContext from "./ModalContext";

function Modal() {
  const { modalSrc, setModalSrc } = useContext(ModalContext);

  return (
    <div
      onClick={(event) => {
        if (!event.target.closest(".modal-image")) {
          setModalSrc(null);
        }
      }}
      className={`modal ${modalSrc === null ? "hide-modal" : ""}`}
    >
      {modalSrc && <img className="modal-image" src={modalSrc} />}
      <div onClick={() => setModalSrc(null)} className="modal-close">
        <span className="material-symbols-outlined modal-close">close</span>
      </div>
    </div>
  );
}

export default Modal;
