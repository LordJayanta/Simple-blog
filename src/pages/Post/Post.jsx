import { Categorie, Container } from '../../component'
import React from 'react'

const Post = () => {
    return (
        <Container>
            <section className='flex gap-3'>
                <div className='w-full md:w-3/4'>
                    <div className='h-1/2  mb-10'>
                        <img
                            className='h-full rounded-xl  mx-auto'
                            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
                    </div>

                    <h1 className='text-4xl mb-10 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ipsum obcaecati incidunt.</h1>
                    <p className='first-letter:text-4xl text-lg'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo eveniet optio voluptas repellat quia eaque perspiciatis! Ipsum harum ex saepe eveniet necessitatibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo eveniet optio voluptas repellat quia eaque perspiciatis! Ipsum harum ex saepe eveniet necessitatibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo
                        Lorem ipsum dolor si
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo eveniet optio voluptas repellat quia eaque perspiciatis! Ipsum harum ex saepe eveniet necessitatibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo eveniet optio voluptas repellat quia eaque perspiciatis! Ipsum harum ex saepe eveniet necessitatibus repellendus!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus, odio totam cum, iusto quae explicabo
                        Lorem ipsum dolor si
                    </p>
                </div>
                <div className='hidden md:block md:w-1/4'>
                    <Categorie/>
                </div>
            </section>
        </Container>
    )
}

export default Post
