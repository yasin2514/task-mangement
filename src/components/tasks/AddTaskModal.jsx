import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Your Task"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="rounded-md"
                placeholder="Enter your task title"
                {...register("title")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                className="rounded-md"
                placeholder="Enter your description"
                {...register("description")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                className="rounded-md"
                placeholder="Enter your task deadline"
                {...register("date")}
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="assignTo">Assign To</label>
              <select
                id="assignTo"
                className="rounded-md"
                {...register("assignedTo")}
              >
                <option value="Yasin Khan">Yasin Khan</option>
                <option value="Rakib Mollah">Rakib Mollah</option>
                <option value="Al Mamun">Al Mamun</option>
                <option value="Majedul Hasan">Majedul Hasan</option>
                <option value="Reduan Sahariar">Reduan Sahariar</option>
                <option value="Anupom Paul">Anupom Paul</option>
                <option value="Jisan">Jisan </option>
                <option value="Miraz">Miraz</option>
                <option value="Rakib Akter">Rakib Akter</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 ">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                className="rounded-md"
                {...register("priority")}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="flex gap-4 justify-end mt-5">
            <button type="reset" className="btn btn-danger">
              {" "}
              Reset
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddTaskModal;
