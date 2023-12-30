import * as Yup from 'yup';

const otpValidationSchema = Yup.object().shape({
    otp: Yup.string()  // Use Yup.string() for length validation
    .required("OTP is required")
    .matches(/^\d{4}$/, "OTP should be exactly 4 characters")
});

export default otpValidationSchema;
