import { Schema } from "mongoose";
import { ICategory, CheckBoxField, radioButtonFields } from "../../../../entities/categoryEntities";
const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
        unique: true
    },
    inputFields: [{
        type: String,
    }],
    checkBoxFields: [
        {
            label: String,
            options: [
                {type: String}
            ]
        }
    ]
})