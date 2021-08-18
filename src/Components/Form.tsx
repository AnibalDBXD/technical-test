import React, { useState } from 'react';
import useField from '../hook/useField';
import { ITask } from '../Project';
import Balance from '../Project/Task/Balance';
import Documents from '../Project/Task/Documents';

interface IFormProps{
    addTask: (newTask: ITask) => void;
}

const Form = ({ addTask }: IFormProps): JSX.Element => {
  const [selectedTask, setSelectedTask] = useState("Balance");
  const taskName = useField({ type: "Add Name", placeholder: "Task Name"});
  const taskSkippable = useField({ type: "checkbox" });

  //on select Balance
  const amount = useField({ type: "number", placeholder: "Current amount"});
  const amountToComplete = useField({ type: "number", placeholder: "Amount to complete" });

  //on select Documents
  const documentsNeeded = useField({ type: "number", placeholder: "Documents Needed"});
  const document1 = useField({ type: "text", placeholder: "Document 1" });
  const document2 = useField({ type: "text", placeholder: "Document 2" });
  const document3 = useField({ type: "text", placeholder: "Document 3" });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const commonProps = {
      isSkippable: taskSkippable.value === "true",
      name: taskName.value,
    };

    if (selectedTask === "Balance") {
      addTask(new Balance({
        ...commonProps,
        amount: Number(amount.value),
        amountToComplete: Number(amountToComplete.value)
      }));
    }
    if (selectedTask === "Documents") {
      const documents = [
        document1.value,
        document2.value,
        document3.value
      ];
      addTask(new Documents({
        ...commonProps,
        documents: documents.filter((doc) => doc),
        numberOfDocumentsNeeded: Number(documentsNeeded.value)
      }));
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tasks">
          Select a task type
        <select id="tasks" name="tasks" onChange={(event): void => setSelectedTask(event.target.value)}>
          <option value="Balance">Balance</option>
          <option value="Documents">Documents</option>
        </select>
      </label>
      <input {...taskName} />
      <label htmlFor="isSkippable">
          The task is Skippable?
        <input id="isSkippable" name="isSkippable" {...taskSkippable}  />
      </label>
      {selectedTask === "Balance" && (
        <>
          <input {...amount} />
          <input {...amountToComplete} />
        </>
      )}
      {selectedTask === "Documents" && (
        <>
          <input {...documentsNeeded} />
          <input {...document1} />
          <input {...document2} />
          <input {...document3} />
        </>
      )}
      <button>Create task</button>
    </form>
  );
};

export default Form;
