import React, { useState , useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from './validate'
import { notify } from './toast';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';

 const SignUp = () => {

    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});
    
    useEffect(() =>{
         setErrors(validate(data , "signup"))
         
    },[data , touched])

    const changeHandler = event =>{
        if( event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        }else{
            setData({...data, [event.target.name]: event.target.value})
        }
        // console.log(data);
    }

    const focusHandler = event =>{
        setTouched({...touched, [event.target.name]: true})
    }

    const submithandler= event => {
      event.preventDefault();
      notify();
      if(!Object.keys(errors).length){     
        // console.log(data)
        notify("ثبت نام با موفقیت انجام شد" , "success");
      }else{
        notify("مقادیر نامعتبر " , "error");
        setTouched({
          name: true,
          email: true,
          password: true,
          confirmPassword: true,
          isAccepted: true
        })
      }
    }


  return (
      <div className={styles.container}>
         <form onSubmit={submithandler} className={styles.formContainer}> 
            <h1 className={styles.header}>SignUp</h1>
            <div className={styles.formFieled}>
              <label>نام کاربری</label>
              <input 
                className={(errors.name && touched.name ? styles.uncompleted : styles.formInput) }
                type="text" 
                name="name" 
                value={data.name} 
                onChange={changeHandler} onFocus={focusHandler}
              />
                {errors.name && touched.name && <span>{errors.name}</span>}        
            </div>
            <div className={styles.formFieled}>
              <label>ایمیل</label>
              <input 
                className={(errors.email && touched.email ? styles.uncompleted : styles.formInput) }
                type="text" 
                name="email"
                value={data.email}
                onChange={changeHandler} onFocus={focusHandler}
              />
                  {errors.email && touched.email && <span>{errors.email}</span>}
            </div> 
             <div className={styles.formFieled}>
              <label>رمز عبور</label>
              <input 
                className={(errors.password && touched.password ? styles.uncompleted : styles.formInput) } 
                type="password" 
                name="password" 
                value={data.password} 
                onChange={changeHandler} onFocus={focusHandler}
              />
                  {errors.password && touched.password && <span>{errors.password}</span>}
            </div>
            <div className={styles.formFieled}>
              <label>تکرار رمز عبور</label>
              <input 
                className={(errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput) }
                type="password" 
                name="confirmPassword" 
                value={data.confirmPassword} 
                onChange={changeHandler} onFocus={focusHandler}
              />
                  {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
            </div> 
             <div className={styles.formFieled}>
               <div className={styles.checkBoxContainer}>
                 <label>با تمام قوانین و مفررات موافق هستم</label>
                 <input 
                   type="checkbox" 
                   name="isAccepted" 
                   value={data.isAccepted} 
                   onChange={changeHandler} onFocus={focusHandler}
                  />
                </div>
                  {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
            </div>

            <div className={styles.formButtons}>
              <Link to='/login'>ورود</Link>
              <button type='submit'>ثبت نام</button>
            </div>
         </form>
         <ToastContainer />
    </div>
  )
}

export default SignUp;