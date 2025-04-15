import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface ClientOnlyPortalProps {
  children: ReactNode;
  selector: string;
}

export function ClientOnlyPortal({
  children,
  selector,
}: ClientOnlyPortalProps) {
  const ref = useRef<Element | DocumentFragment>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) || document.body;
    setMounted(true);
  }, [selector]);

  return mounted
    ? createPortal(children, ref.current as DocumentFragment)
    : null;
}
