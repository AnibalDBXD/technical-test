import Task, { ITaskProps } from ".";

interface IDocumentsProps extends ITaskProps {
    documents: string[];
    numberOfDocumentsNeeded: number;
}

export default class Documents extends Task{
    private _documents: string[];
    public numberOfDocumentsNeeded: number;

    constructor({ documents, numberOfDocumentsNeeded, ...superProps }: IDocumentsProps) {
      super(superProps);
      this.numberOfDocumentsNeeded = numberOfDocumentsNeeded;
      this._documents = documents;
    }

    public get isCompleted(): boolean {
      return super.canComplete ? this._documents.length === this.numberOfDocumentsNeeded : false;
    }
}
