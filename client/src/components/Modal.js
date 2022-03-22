import React, { useRef } from "react";
import styled from "styled-components";
import { variables } from "../styles/styled-variables";
import useClickOutside from "../hooks/useClickOutside";

export default function Modal({ component, setOpen }) {
  const modalRef = useRef();

  const onClickOutside = () => {
    setOpen(false);
  };

  useClickOutside(modalRef, onClickOutside);

  return (
    <Wrapper>
      <div ref={modalRef} className="content">
        {component}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  display: grid;
  place-items: center;

  .content {
    width: 95%;
    max-width: 60rem;
    padding: 3rem;
    background: ${variables.$white};
    border-radius: 1.2rem;
  }
`;
