import React from 'react'

function Hero() {
  return (
    <>
    <hr className='md:mt-[-50px]'/>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16 container max-w-[1400px] mx-auto">
            <div className='flex-1 flex flex-col items-start gap-6'>
                <h1 className='text-3xl lg:text-6xl font-bold max-w-lg '>Simply explained  <br />  with illustrations</h1>

                <p className='text-lg lg:text-xltext-gray-500 max-w-md mt-[-15px]'>There are a lot of different components that will help you create the perfect look for your project</p>

                <div className='flex gap-8 flex-wrap'>
                    <button className='bg-[#5F62E2] hover:bg-blue-800 font-semibold text-white py-2 px-5 sm:px-6 sm:py-3  rounded-lg transition duration-300'>Get Started</button>
                    <button className='bg-indigo-100 font-semibold text-[#5F62E2] py-2 px-5 sm:px-6 sm:py-3 rounded-lg transition hover:bg-indigo-300 duration-300'>Learn More</button>
                </div>
            </div>

            <div>
                <img className='w-full max-w-lg h-auto' src="/Component 1.png" alt="" />
            </div>
            
        </section>
    </>
  )
}

export default Hero