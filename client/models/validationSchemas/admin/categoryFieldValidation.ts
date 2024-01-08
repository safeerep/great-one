import * as Yup from 'yup'

const categoryFieldValidationSchema = Yup.object().shape({
    categoryName: Yup.string()
        .required("category name is required")
        .min(4, "category name should contain atleast 4 chars"),
    inputFields: Yup.array().of(
        Yup.string().required("label is required for input field")
    ),
    checkBoxFields: Yup.array().of(
        Yup.object().shape({
            label: Yup.string(),
            options: Yup.string().matches(
                /^([^,]+,[^,]+)(,[^,]+)*$/, "options for the check box field should be atleast two"
            )
        })
    ),
    radioButtonFields: Yup.array().of(
        Yup.object().shape({
            label: Yup.string().required("label is required for radiobutton fields"),
            options: Yup.string().matches(
                /^([^,]+,[^,]+)(,[^,]+)*$/, "atleast two options should be there for a radiobutton field"
            )
        })
    )
});

export default categoryFieldValidationSchema;