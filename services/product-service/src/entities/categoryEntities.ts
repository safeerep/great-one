import { Document, ObjectId } from "mongoose";

export interface CheckBoxField {
    label: string,
    options: string[]
}

export interface radioButtonFields extends CheckBoxField{}

export interface ICategory extends Document {
    _id: ObjectId,
    categoryName: string,
    // category specific additional fields
    inputFields: string[],
    checkBoxFields: CheckBoxField[],
    radioButtonFields: radioButtonFields[],
}