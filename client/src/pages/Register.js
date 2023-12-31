import { useEffect, useState } from 'react'
import {Logo,FormRow,Alert} from '../components'
import Wrapper   from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const initialState={
    name:'',
    email:'',
    password:'',
    isMember:true,

}

const Register=()=>{

    const navigate=useNavigate()
    const [values,setvalues]=useState(initialState);
    const {user,isLoading,showAlert,displayAlert,registerUser,loginUser}=useAppContext(initialState)
      
    const toggleMember =()=>{
        setvalues({...values,isMember:!values.isMember})

    }
    const handleChange=(e)=>{
        setvalues({...values,[e.target.name]:e.target.value})
      
       

    }

    const onSubmit=(e)=>{
        e.preventDefault();
        const {name,email,password,isMember}=values;
        if(!email || !password || (!isMember && !name)){
         displayAlert();
         return;
        }

        const currentUser={name,email,password};
        if(isMember){
            loginUser(currentUser)

        }
        else{
            registerUser(currentUser)
        }
        
    }
    useEffect(()=>{
        if(user){
            setTimeout(()=>{
            navigate("/");
            },3000);

        }

    },[user,navigate]);


  

    

    return(

       <Wrapper className='full-page'>
       <form className='form' onSubmit ={onSubmit}>
       <Logo />
       <h3>{values.isMember? 'Login' : 'Register'}</h3>
       {showAlert && <Alert />}

       {!values.isMember && (
       <FormRow 
        type='text'
        name='name'
        value={values.name} 
        handleChange={handleChange} 
         />
       )}

        
        {/* {for email} */}
        <FormRow 
        type='email'
        name='email'
        value={values.email} 
        handleChange={handleChange} 
         />

        {/* {for password} */}
        <FormRow 
        type="password"
        name='password'
        value={values.password} 
        handleChange={handleChange} 
         />
      
       <button type='submit' className='btn btn-block' disabled={isLoading}>
        submit
       </button>
       <p>
        {values.isMember ? 'Not a member yet ?':'Already a member?'}
        <button type='button' onClick={toggleMember}
        className='member-btn'>
           {values.isMember ? 'Register' : 'Login'}
        </button>
       </p>
       </form>
        
        </Wrapper>

    )
       }

export default Register;