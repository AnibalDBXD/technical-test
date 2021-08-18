import React from 'react';
import { ITask } from '../Project';

const Table = ({ tasks }: { tasks: ITask[] }): JSX.Element => {
  return (
    <table className="tasksTable">
      <tbody>
        <tr className="tasksItem head">
          <th>Name</th>
          <th>Completed</th>
          <th>Skipped</th>
        </tr>
        {tasks.map((task, index) => (
          <tr className={`tasksItem task-${task.isCompleted}`} key={index}>
            <td>{task.name}</td>
            <td>{String(task.isCompleted)}</td>
            <td>{String(task.isSkippable)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
