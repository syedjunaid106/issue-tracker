'use client'
import { Button, TextArea, TextField } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root>
        <TextField.Input placeholder='Title'/>
      </TextField.Root>
      <TextArea placeholder='write your issue here'/>
       <Button><Link href='/pages/issues'>Submit new issue</Link></Button>

    </div>
  )
}

export default NewIssuePage
