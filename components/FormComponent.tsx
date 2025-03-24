import React from 'react'
import { Form } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Button } from './ui/button'
import Link from 'next/link'

const FormComponent = () => {
  return (
    <div className='w-[380px] border-3 rounded-4xl p-12 flex flex-col justify-center'>
    <div className='p-4'>
      <Label id='username'>Username:</Label>
      <Input placeholder='enter your name'/>
    </div>
    <div className='p-4'>
      <Label id='email'>Email:</Label>
      <Input placeholder='enter your email'/>
    </div>
    <div className='p-4'>
      <Label id='password'>Password:</Label>
      <Input placeholder='enter your password'/>
    </div>
    <div className='flex justify-center'>
        <Button className='mt-5 '>
            <Link href="/" >Login</Link>
        </Button>
    </div>
    </div>
    
  )
}

export default FormComponent
