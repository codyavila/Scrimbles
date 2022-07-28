import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import jwt_decode from 'jwt-decode'

import { client } from '../client'

const Login = () => {
  const navigate = useNavigate()
  const createOrGetUser = async (response, addUser) => {
    const decoded = jwt_decode(response.credential)
    console.log(decoded)

    localStorage.setItem('user', JSON.stringify(decoded))

    const { name, picture, sub } = decoded

    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
    }

    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'></div>

      <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0'>
        <div className='p-5'>
          <img src='' alt='logo' />
        </div>

        <div className='shadow-2x1'>
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response)}
            onError={() => console.log(console.log('Error'))}
            cookiePolicy='single_host_origin'
          />
        </div>
      </div>
    </div>
  )
}

export default Login
