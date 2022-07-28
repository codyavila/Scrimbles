import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin } from '@react-oauth/google'

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'></div>

      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0'>
        <div className='p-5'>
          <img src='' alt='logo' />
        </div>

        <div className='shadow-2x1'>
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log(console.log('Error'))}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
