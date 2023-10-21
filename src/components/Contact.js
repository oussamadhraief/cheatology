import React from 'react'

export default function Contact() {
  return (
    <section className='imported-background py-32 flex flex-col items-center'>
        <h1 className="text-primary text-3xl font-semibold">Contact us</h1>
        <p className='mt-5 text-sm text-zinc-500 font-bold'>Leave us a message and try to make it as clear and detailed as you can, we'll be in touch ! </p>
        <form className='w-full max-w-[600px] mt-14 bg-white rounded-xl shadow-card p-10 flex flex-col'>
            <label htmlFor='name' className='text-zinc-600'>Full name</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='email' className='text-zinc-600 mt-8'>Email</label>
            <input type="email" name="email" id='email' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Field of studies</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Which year</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Technologies to use for your project</label>
            <input type="checkbox" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Other technologies</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Project description</label>
            <textarea rows="4" cols="50" className='bg-zinc-200 rounded'></textarea>
            <label htmlFor='name' className='text-zinc-600 mt-8'>Deadline for your project</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='name' className='text-zinc-600 mt-8'>Would you like a full explanation of the project's code</label>
            <input type="text" name="name" id='name' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <div className="w-32 mx-auto h-fit rounded-md bg-primary overflow-visible mt-14">
            <button className="w-32 py-3 border border-white rounded bg-primary text-white hover:translate-x-1 hover:-translate-y-1 transition-all">
              Contact us
            </button>
          </div>
        </form>
    </section>
  )
}
