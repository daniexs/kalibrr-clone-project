import { useState } from "react";

export default function useToggle() {
    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return [show, handleClose, handleShow];
}