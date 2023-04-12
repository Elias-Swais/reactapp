import React from 'react'
import styles from './ShopForm.module.css'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'

const onSubmit = async (values:any,actions:any) =>{
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve,1000));
    actions.resetForm()
  }


const ShopForm = () => {
    
    const {values, errors, touched,isSubmitting, handleBlur , handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: "",
            age: "",
            password: ""
        },
        validationSchema: basicSchema,
        onSubmit,
        
    })

    console.log(errors);
  return (
    <div className= {styles.container}>
        <h1>Please enter your email and password to shop</h1>
        <form onSubmit={handleSubmit}>
        <label className={styles.labels}  htmlFor="email">
            Email: <br /> <input id = {touched.email && errors.email ? styles["input-error"]: "default"} value ={values.email} onChange={handleChange}   type="email" name ="email"  placeholder='Enter Email...' onBlur={handleBlur}/>
            {errors.email && touched.email && <p className='error'>{errors.email}</p>}
        </label>
        
        <label className={styles.labels} htmlFor="age">
           Age: <br /> <input id = {touched.age && errors.age ? styles["input-error"]: "default"} type="number" name="age"  placeholder='Enter Age...' onBlur={handleBlur} onChange={handleChange}/>
           {errors.age && touched.age && <p className='error'>{errors.age}</p>}
        </label>

        <label className={styles.labels} htmlFor="password">
           Password: <br /> <input id = {touched.password && errors.password ? styles["input-error"]: "default"} type="password" name="password" placeholder='Enter Password' onChange={handleChange}onBlur={handleBlur}/>
           {errors.password && touched.password && <p className='error'>{errors.password}</p>}
        </label>
        
        <button disabled={isSubmitting}className={styles.btn} type="submit"> Sign in</button>
        </form>
    </div>
  )
}

export default ShopForm