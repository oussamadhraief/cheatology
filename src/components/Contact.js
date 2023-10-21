import React, { useState } from 'react'

export default function Contact() {
  const [form,setForm]=useState({name: '',email:'',fstudies:'',year:'',technologies:'',description:'',deadline:'',explantion:'no'})

  const handleChange=(event)=>{
    const {name,value}=event.target 
    setForm({
      ...form,
      [name]: value
    })
  }
  function handleSubmit(event) {
    event.preventDefault()
    console.log(form);
  }
  return (
    <section className='imported-background py-32 flex flex-col items-center'>
        <h1 className="text-primary text-3xl font-semibold">Contact us</h1>
        <p className='mt-5 text-sm text-zinc-500 font-bold'>Leave us a message and try to make it as clear and detailed as you can, we'll be in touch ! </p>
        <form onSubmit={handleSubmit} className='w-full max-w-[600px] mt-14 bg-white rounded-xl shadow-card p-10 flex flex-col'>
            <label htmlFor='name' className='text-zinc-600'>Full name</label>
            <input type="text" name="name" id='name' required onChange={handleChange} value={form.name} className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='email' className='text-zinc-600 mt-8'>Email</label>
            <input type="email" name="email" id='email' required onChange={handleChange} value={form.email} className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='fstudies' className='text-zinc-600 mt-8'>Field of studies</label>
            <input type="text" name="fstudies" id='fstudies' required onChange={handleChange} value={form.fstudies} className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='year' className='text-zinc-600 mt-8'>Which year</label>
            <input type="text" name="year" id='year' required onChange={handleChange} value={form.year} className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='technologies' className='text-zinc-600 mt-8'>Technologies to use for your project</label>
            <input type="text" name="technologies" id='technologies' required onChange={handleChange} value={form.technologies} className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <label htmlFor='description' className='text-zinc-600 mt-8'>Project description</label>
            <textarea rows="4" cols="50" onChange={handleChange} required id='description' name='description' className='bg-zinc-200 rounded'>{form.description}</textarea>
            <label htmlFor='deadline' className='text-zinc-600 mt-8'>Deadline for your project</label>
            <input type="date" name="deadline" required onChange={handleChange} value={form.deadline} id='deadline' className='mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />
            <p className='text-zinc-600 mt-8'>Would you like a full explanation of the project's code</p>
            <label><input type="radio" name="explantion" required onChange={handleChange} value='yes' checked={form.explantion=='yes'}  className=' mr-2 mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />Yes</label>
            <label><input type="radio" name="explantion" required onChange={handleChange} value='no' checked={form.explantion=='no'}  className='mr-2 mt-2 bg-zinc-200 outline-none p-2.5 text-sm rounded' />No, thanks</label>
            <div className="w-32 mx-auto h-fit rounded-md bg-primary overflow-visible mt-14">
            <button className="w-32 py-3 border border-white rounded bg-primary text-white hover:translate-x-1 hover:-translate-y-1 transition-all">
              Contact us
            </button>
          </div>
        </form>
    </section>
  )
}
