import { createPortal } from 'react-dom'
import './../styles/modal.css'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>,
    document.querySelector('.modal')
  )
}

export default Modal
