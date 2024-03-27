import { useState } from 'react';

type Form = { id: string; title: string; content: string; tagList: string[] };

const useModal = () => {
  const [modalType, setModalType] = useState<string>('');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<Form>({ id: '', title: '', content: '', tagList: [] });

  const openModal = (type: string, data?: Form) => {
    setModalType(type);
    if (type === 'survey') {
      setFormData(data!);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFormData = (data: Form) => {
    setFormData(data);
  };

  return {
    modalType,
    modalOpen,
    openModal,
    closeModal,
    formData,
    handleFormData,
  };
};

export default useModal;
