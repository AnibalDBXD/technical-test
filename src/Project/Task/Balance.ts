import Task, { ITaskProps } from ".";

interface IBalanceProps extends ITaskProps {
    amount: number;
    amountToComplete: number;
}

export default class Balance extends Task{
    public amount: number;
    public amountToComplete: number;

    constructor({ amount, amountToComplete, ...superProps }: IBalanceProps) {
      super(superProps);
      this.amountToComplete = amountToComplete;
      this.amount = amount;
    }

    public get isCompleted(): boolean {
      return super.canComplete ? this.amount >= this.amountToComplete : false;
    }
}
