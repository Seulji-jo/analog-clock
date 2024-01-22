import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setElement(document.getElementById("portal"));
  }, []);

  return !element ? null : createPortal(children, element);
}

export default Portal;
