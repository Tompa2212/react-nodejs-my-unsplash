import { useState } from "react";
import { Modal } from ".";
import { UploadForm } from "./Forms/UploadForm";
import { Navigation } from "./Navigation";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header>
        <Navigation />
      </header>
      {isModalOpen && (
        <Modal
          setOpen={setIsModalOpen}
          content={<UploadForm setIsModalOpen={setIsModalOpen} />}
        />
      )}
    </>
  );
};

export default Header;
