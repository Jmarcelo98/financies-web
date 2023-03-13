import { ITypeIncome } from "./typeIncome";

export interface IIncome {
    id?: number;
    dateInclusion?: Date;
    isReceived?: boolean;
    value?: number;
    typeIncome?: ITypeIncome;
    description?: string;
}
