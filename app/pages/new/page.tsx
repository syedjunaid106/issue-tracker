'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import Link from 'next/link'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm,Controller } from 'react-hook-form'
import axios from 'axios';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
interface IssueForm{
  title:string,
  description:string
}
const NewIssuePage = () => {
  const [error,setError]=useState('');
  const {register,control,handleSubmit}=useForm<IssueForm>();
  const router=useRouter();
  return (
    <div className='max-w-xl'>
      {error && <Callout.Root className='mb-5' color='red'>
        <Callout.Icon>
  </Callout.Icon>
  <Callout.Text>
    {error}
  </Callout.Text></Callout.Root>}
    <form className=' space-y-3' onSubmit={handleSubmit (async(data)=>{
   try{
    await  axios.post('/api/issues',data)
    router.push('/pages/issues')
   }
   catch(error){
    setError('An unexpected error occured')
   }
  }
    )}>
      <TextField.Root>
        <TextField.Input className='text-white' placeholder='Title' {...register('title')}/>
      </TextField.Root>
      <Controller
      name='description'
      control={control}
      render={({field})=>
        <SimpleMDE  placeholder='Description' {...field}/>
      }
      />
       <Button>Submit new issue</Button>

    </form>
    </div>
  )
}

export default NewIssuePage
