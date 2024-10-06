import { useForm } from 'react-hook-form';
import './App.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {
  const schema =  yup.object().shape({
      name : yup.string().required('بدبخت مرضی نام ضروری است نام خود را بنویس وی'),
      email : yup.string().required('ایمل نا معتبر است').email(),
      age : yup.number('سن باید عدد باشد').positive('باید سن درست را وارد کنید').min(18,'سن شما کم است').max(100,'سن زیاد قبول نمیکند').required('چند ساله هستیدید؟'),
      password : yup.string().min(4,'کمتر از 4 نباشد').max(15, 'بیشتر از 15 نباشد').required('پسورد ضروری است'),
      confirmPassword : yup.string().oneOf([yup.ref('password')],"تائیدی پسورد اشتبا است").required('تائیدی پسورد ضروری است')
  })
  
  const {register , handleSubmit ,formState:{errors}} = useForm({resolver : yupResolver(schema)})
  const formSubmit = (data) =>{
    console.log(data)
  } 

  return (
    <div className={`App`}>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type='text' placeholder='name...' {...register('name')}/><br />
        {errors.name && 
          <p>{errors.name?.message}</p>
        }
        <input type='email'  placeholder='email...' {...register('email')} /><br />
        {errors.email && 
          <p>{errors.email?.message}</p>
        }
        <input type='number'  placeholder='age...'  {...register('age')}/><br />
        {errors.age && 
          <p>{errors.age?.message}</p>
        }
        <input type='password'  placeholder='password...'  {...register('password')}/><br />
        {errors.password && 
          <p>{errors.password?.message}</p>
        }
        <input type='password'  placeholder='confirmPassword...'  {...register('confirmPassword')}/><br />
        {errors.confirmPassword && 
          <p>{errors.confirmPassword?.message}</p>
        }
        <button>Submit</button>
      </form>
    </div>
  ); 

}
export default App;