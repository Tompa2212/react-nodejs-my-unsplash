import styled from "styled-components";
import { variables } from "../../styles/styled-variables";
import { Modal, DeleteForm } from "..";
import { useState } from "react";
import { useAuth } from "../../context/auth";

const Image = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    user: {
      user: { id },
    },
  } = useAuth();

  const { img_desc, img_url, user_id } = image;

  return (
    <>
      <Wrapper>
        <img src={img_url} alt="slika" />
        <div className="img-actions">
          <button
            className={id === user_id ? "btn" : "disabled"}
            onClick={() => setIsModalOpen(true)}
          >
            delete
          </button>
          <p>{img_desc}</p>
        </div>
      </Wrapper>
      {isModalOpen && (
        <Modal
          setOpen={setIsModalOpen}
          content={<DeleteForm setIsModalOpen={setIsModalOpen} />}
        />
      )}
    </>
  );
};

export default Image;

const Wrapper = styled.figure`
  align-self: start;
  border-radius: 2.4rem;
  overflow: hidden;
  position: relative;

  .disabled {
    opacity: 0;
    pointer-events: none;
  }

  &:hover .img-actions {
    opacity: 1;
    pointer-events: auto;
  }

  img {
    display: block;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .img-actions {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    padding: 2rem;
    background: rgba(0, 0, 0, 0.38);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition: opacity 200ms ease;

    button {
      color: ${variables.$btnRed};
      background: transparent;
      border: 1px solid ${variables.$btnRed};
      padding: 0.5rem 2rem;
      border-radius: 3.8rem;
      margin-left: auto;
    }

    p {
      color: ${variables.$white};
      justify-self: flex-end;
    }
  }
`;
