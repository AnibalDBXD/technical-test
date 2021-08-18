interface ITaskToComplete {
  taskAmount: number;
  taskAmountNeeded: number;
}

export interface ITaskProps {
  isSkippable: boolean;
  name: string;
  taskToComplete?: ITaskToComplete
}

export default class Task {
    public isSkippable: boolean;
    public name: string;
    private taskToComplete?: ITaskToComplete;

    constructor({ isSkippable, name, taskToComplete }: ITaskProps) {
      this.isSkippable = isSkippable;
      this.name = name;
      this.taskToComplete = taskToComplete;
    }

    public get canComplete(): boolean {
      if (this.taskToComplete) {
        return this.taskToComplete.taskAmount >= this.taskToComplete.taskAmountNeeded;
      }
      return true;
    }
}
