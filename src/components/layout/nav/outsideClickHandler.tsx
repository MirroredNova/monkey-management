import React, { useRef, useEffect } from 'react';

interface OutsideClickListenerProps {
  onOutsideClick: () => void;
  exceptionElementId: string;
  children: React.ReactNode;
}

const isExceptionElementClicked = (
  target: Element,
  exceptionElementId: string
) => target.closest(`#${exceptionElementId}`) !== null;

const OutsideClickListener: React.FC<OutsideClickListenerProps> = ({
  onOutsideClick,
  children,
  exceptionElementId
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        !isExceptionElementClicked(event.target as Element, exceptionElementId)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick, exceptionElementId]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickListener;
