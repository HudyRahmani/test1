import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export default function SubmitHomeForm() {
    

    const sechema = yup.object().shape({
        name : yup.string().required("نام اجباری است"),
        email:yup.string().email("ایمل باید اعتباری باشد").required('ایمل اجباری است'),
        age: yup.number().positive().min(18).max(100).required('سن مهم است'),
        password:yup.string().min(4).max(15).required('پسورد فرض است'),
        confirmpassword:yup.string().oneOf([yup.ref("password")],"پسورد برابر نیست").required()

    })

    const {register , handleSubmit ,formState:{errors}} = useForm({resolver : yupResolver(sechema)})
    const onFormSubmit = (data) =>{
        console.log(data)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type='text' placeholder='name...' {...register("name")} /> <br />
            {errors.name && (
                <p>{errors.name?.message}</p>
            )}
            <input type='text' placeholder='email...'  {...register("email")}/><br /> 
                <p>{errors.email?.message}</p>
            <input type='number' placeholder='age...'  {...register("age")} /><br /> 
                <p>{errors.number?.message}</p>
            <input type='password' placeholder='password...'  {...register("password")}/><br /> 
                <p>{errors.password?.message}</p>
            <input type='password' placeholder='confirmpassword...'  {...register("confirmpassword")}/><br /> 
                <p>{errors.confirmpassword?.message}</p>
            <button>Submit</button>
        </form>
    </div>
  )
}
