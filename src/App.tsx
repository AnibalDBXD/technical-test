import React, { useState } from 'react';
import './App.css';
import Project, { ITask } from './Project';
// import Balance from './Project/Task/Balance';
// import Binaries from './Project/Task/Binaries';
// import Documents from './Project/Task/Documents';
import Table from "./Components/Table";
import Form from './Components/Form';
import useForceUpdate from './hook/useForceUpdate';

// const task1 = new Documents(
//   {
//     numberOfDocumentsNeeded: 4,
//     documents: ["document 1", "document 2", "document 3"],
//     isSkippable: false,
//     name: "Documentos"
//   }
// );

// const task2 = new Balance(
//   { amount: 100, amountToComplete: 100, isSkippable: false, name: "Balance" }
// );

// const task3 = new Binaries(
//   { dependence: 4, taskRef: task1,  isSkippable: false, name: "Binaries" }
// );

// const task4 = new Balance(
//   {
//     amount: 100, amountToComplete: 90, isSkippable: false, name: "Tarea4", taskToComplete: {
//       taskAmount: task2.amount,
//       taskAmountNeeded: 90
//     } } //This task shoul be true
// );

// const myProject = new Project([task1, task2, task3, task4]);
// console.log(myProject)

const myProject = new Project([]);
function App(): JSX.Element {
  //Force update on update the tasks
  const forceUpdate = useForceUpdate();

  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (task: ITask): void => {
    setTasks(myProject.add(task));
    forceUpdate();
  };

  const handleClear = (): void => {
    setTasks(myProject.clear());
    forceUpdate();
  };

  return (
    <main className="container">
      <h1>Create a new Task</h1>
      <Form addTask={handleAddTask} />
      <Table tasks={tasks} />
      <button onClick={handleClear}>Clear</button>
    </main>
  );
}

export default App;
