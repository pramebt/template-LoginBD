import React, { useState } from 'react'

const Login = () => {
  // const [Email,setEmail] = useState('');
  // const [Password,setPassword] = useState('');
  return (
    <>
    <div className='largeBox w-[300px] h-[420px] border-2
     border-white rounded-[24px] bg-gray-100 bg-opacity-[20%] border-opacity-15 backdrop-blur-sm shadow-2xl  flex flex-col p-[24px]'>

      <label className='text-white text-[30px]  font-semibold text-center'>
        Login
      </label>
      
      <div className='space-y-3 mt-[24px]'>
      <label className='text-white  font-semibold '>
        Username
      </label>
      <input  placeholder = 'Email'  type="email" className='pl-[12px] outline-none w-full h-[40px] rounded-sm bg-white bg-opacity-10 text-white text-opacity-50 border-[1px] focus:border-cyan-500 '/>
      </div>

      <div className='space-y-3 mt-[24px]'>
      <label className='text-white  font-semibold '>
        Password
      </label>
      <input placeholder = 'Password'  type="password" className='pl-[12px] outline-none w-full h-[40px] rounded-sm bg-white bg-opacity-10 text-white text-opacity-50 border-[1px] focus:border-cyan-500'/>
      </div>

      <button className='text-black bg-white font-semibold p-[12px] mt-[24px] rounded-md active:bg-cyan-300'>
        Login
      </button>
        
    </div>
    {/* <div className='curcle1 h-[200px] w-[200px] bg-blue-500 rounded-[50%] absolute'> */}
        
    
        
  
    </>
  )
}

export default Login