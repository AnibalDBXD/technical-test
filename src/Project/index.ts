import Balance from "./Task/Balance";
import Binaries from "./Task/Binaries";
import Documents from "./Task/Documents";

export type ITask = Documents | Balance | Binaries;

export default class Project {
    public tasks: ITask[];
    constructor(tasks: ITask[]) {
      this.tasks = tasks;
    }

    public add(newTask: ITask): ITask[] {
      this.tasks.push(newTask);
      return this.tasks;
    }

    public clear(): ITask[] {
      this.tasks = [];
      return this.tasks;
    }

    public get isCompleted(): boolean {
      return this.tasks.every((task) => task.isCompleted === true);
    }
}