import React from 'react'
import { Input, InputFile } from '../../component'


const AddPost = () => {
  return (
    <>
      <section className='flex gap-3'>

        <div className='w-3/4 md:pr-2.5 md:border-r-2 border-zinc-300'>
          <h1 className='text-xl font-bold'>Add Post</h1>
          <Input
            label='Post Title'
            placeholder='Enter Post Title'
          />
        </div>

        <div className='w-1/4 md:pl-2.5'>
          <h1 className='text-xl font-bold'>Additional Info</h1>

          <InputFile/>
          
          <Input
            label='Post Slug (Auto detected)'
            type='Text'
            placeholder='post slug (Auto detected)'
          />
        </div>

      </section>
    </>
  )
}

export default AddPost
