import Task, { ITaskProps } from ".";
import Balance from "./Balance";
import Documents from "./Documents";

type ITaskRef = Documents | Balance

interface IBinariesProps extends ITaskProps {
    /* dependence: string[] | number because the other tags have this dependece to complete*/
    dependence: string[] | number;
    taskRef: ITaskRef
}

export default class Binaries extends Task{
    private _dependence: string[] | number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private _taskRef: any;
    constructor({ dependence, taskRef, ...superProps}: IBinariesProps) {
      super(superProps);
      this._dependence = dependence;
      this._taskRef = taskRef;
    }

    public get isCompleted() : boolean {
      if (this._taskRef.documentsNeeded) {
        return this._taskRef.documentsNeeded === this._dependence;
      }
      if (this._taskRef.amount) {
        return this._taskRef.amount === this._dependence;
      }
      return false;
    }
}