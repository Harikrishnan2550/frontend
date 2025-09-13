// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../Context/ShopContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Login = () => {

//   const [currentState,setCurrentState]=useState('Login')

//   const {token,setToken,navigate,backendUrl}=useContext(ShopContext)

//   const [name,setName]=useState('')
//   const [password,setPassword]=useState('')
//   const [email,setEmail]=useState('')


//    const onSubmitHandler = async (e) =>{
//       e.preventDefault()
//       try {
//         if (currentState === 'Sign Up') {

//           const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)
//           }else{
//             toast.error(response.data.message)
//           }
//         }else{
//           const response=await axios.post(backendUrl + '/api/user/login',{email,password})
//           if (response.data.success) {
//             setToken(response.data.token)
//             localStorage.setItem('token',response.data.token)

//           }else{
//             toast.error(response.data.message)
//           }
          
//         }
//       } catch (error) {
//         console.log(error)
//         toast.error(error.message)
//       }
//    }

//    useEffect(()=>{
//     if (token) {
//       navigate('/')
//     }
//    },[token])

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='prata-regular text-3xl'>{currentState}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
//       </div>
//       {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-500' placeholder='Name'/>}
//       <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-500' placeholder='Email'/>
//       <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-500' placeholder='Password'/>
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot your password?</p>
//         {
//           currentState === 'Login'
//           ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
//           : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
//         }
//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ?  'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login

import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const API_BASE_URL = 'http://localhost:4000/api';
  const SIGNUP_API = `${API_BASE_URL}/signup`;
  const LOGIN_API = `${API_BASE_URL}/login`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      if (currentState === 'Sign Up') {
        // Signup API call
        const response = await axios.post(SIGNUP_API, {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        console.log('Signup successful:', response.data);
        setSuccessMessage('Account created successfully! Please login.');
        setCurrentState('Login');
      } else {
        // Login API call
        const response = await axios.post(LOGIN_API, {
          email: formData.email,
          password: formData.password
        });
        console.log('Login successful:', response.data);
        // Store token in localStorage or context
        localStorage.setItem('token', response.data.token);
        // Redirect user or update app state
        setSuccessMessage('Login successful! Redirecting...');
        // Here you would typically redirect or update global auth state
      }
    } catch (err) {
      console.error('API error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleFormState = () => {
    setCurrentState(prev => prev === 'Login' ? 'Sign Up' : 'Login');
    setFormData({ name: '', email: '', password: '' });
    setError('');
    setSuccessMessage('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className='flex flex-col items-center w-[90%] md:w-[25%] lg:w-[25%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      
      {error && (
        <div className="w-full p-2 bg-red-100 text-red-700 text-sm rounded">
          {error}
        </div>
      )}
      
      {successMessage && (
        <div className="w-full p-2 bg-green-100 text-green-700 text-sm rounded">
          {successMessage}
        </div>
      )}
      
      {currentState === 'Sign Up' && (
        <input 
          name="name"
          onChange={handleChange}
          value={formData.name}
          type="text" 
          className='w-full px-3 py-2 border border-gray-500' 
          placeholder='Name'
          required
        />
      )}
      
      <input 
        name="email"
        onChange={handleChange}
        value={formData.email}
        type="email" 
        className='w-full px-3 py-2 border border-gray-500' 
        placeholder='Email'
        required
      />
      
      <input 
        name="password"
        onChange={handleChange}
        value={formData.password}
        type="password" 
        className='w-full px-3 py-2 border border-gray-500' 
        placeholder='Password'
        required
        minLength={6}
      />
      
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:underline'>Forgot your password?</p>
        <p 
          onClick={toggleFormState} 
          className='cursor-pointer hover:underline'
        >
          {currentState === 'Login' ? 'Create account' : 'Login Here'}
        </p>
      </div>
      
      <button 
        type="submit" 
        className='bg-black text-white font-light px-8 py-2 mt-4 hover:bg-gray-800 transition-colors disabled:opacity-50'
        disabled={loading}
      >
        {loading ? (
          'Processing...'
        ) : (
          currentState === 'Login' ? 'Sign In' : 'Sign Up'
        )}
      </button>
    </form>
  );
};

export default Login;