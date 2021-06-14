import { Modal } from "../Modal";
import { Form } from './styled';
import { Input } from '../Input';

import { FiCheckSquare } from 'react-icons/fi';
import { useRef } from "react";
import { FormHandles } from "@unform/core";

interface ModalEditFoodProps {
  isOpen: boolean,
  setIsOpen: ()=>void,
  editingFood: {},
  handleUpdateFood: (data: FormEditFood )=>void,
}

interface FormEditFood {
  id: number,
  name: string,
  description: string,
  price: number,
  available: boolean,
  image: string,
}

export const ModalEditFood = (props: ModalEditFoodProps) => {
  const {
    isOpen,
    setIsOpen,
    editingFood,
    handleUpdateFood,
  } = props;

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data:FormEditFood) => {
    handleUpdateFood(data);
    setIsOpen();
  }
  
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}