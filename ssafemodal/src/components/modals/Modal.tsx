import {
  ModalBlock,
  ModalBackground,
  ModalHeader,
  ModalMain,
} from "./Modal.element";
import { ReactNode } from "react";
interface IModal {
  title: string;
  subtitle: string;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: ReactNode;
}

export const Modal: React.FC<IModal> = ({
  title,
  subtitle,
  setIsModalOpen,
  form,
}) => {
  return (
    <>
      <ModalBackground onClick={() => setIsModalOpen(false)} />
      <ModalBlock>
        <ModalHeader>
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </ModalHeader>
        <ModalMain>{form}</ModalMain>
      </ModalBlock>
    </>
  );
};
