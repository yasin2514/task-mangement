import Modal from "../../ui/Modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Component Modal Created"}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dolorem inventore assumenda molestias maiores incidunt cum magnam
          beatae. Incidunt vero facere obcaecati harum quasi cum iusto in magni
          iure quia.
        </p>
      </Modal>
    </>
  );
};

export default AddTaskModal;
