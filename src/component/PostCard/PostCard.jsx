import React from 'react'

const PostCard = ({
  title = 'Post Title',
  body = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
  tags = ['#Mackbook', '#Apple', '#Laptop']
}) => {
  return (
    <div className='border rounded-md flex flex-col md:flex-row md:max-w-xl lg:max-w-4xl hover:shadow-md bg-white hover:bg-gray-50 my-3'>
      <div className='h-full w-full md:h-[200px] md:w-[300px] overflow-hidden'>
        <img
          className='h-full w-full rounded-md object-cover'
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="" />
      </div>
      <div className='p-4 flex flex-col gap-3'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <h6 className='text-sm text-gray-600'>{body}</h6>
        <div id="posttags">
          {tags.map((tag,index) => <span key={tag+index} className='text-[10px] border border-gray-300 bg-gray-200 hover:bg-gray-300 cursor-pointer transition-all rounded-full mr-2 px-3 py-1'>{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default PostCard
