import { ITypeExpense} from "./typeExpense";

export interface IExpense {
    id?: number;
    dateInclusion?: Date;
    dateReference?: Date;
    isReceived?: boolean;
    value?: number;
    typeIncome?: ITypeExpense;
    description?: string;
}