import * as yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Field Required"),
    age: yup.number().positive().integer().required("Field Required"),
    password: yup.string().min(5).matches(passwordRules,{message:"Please enter a stronger password"}).required("Field Required")
    
})