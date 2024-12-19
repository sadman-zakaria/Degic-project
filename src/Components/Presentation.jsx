import React from 'react'
import {ArrowForward} from "@mui/icons-material"
function Presentation() {
    const CardData = [
        {
            Source:"Group 31.png",
            heading:"Managment",
            text:"Software platform for running your new internet business"
        },
        {
            Source:"Group 32.png",
            heading:"Entertainment",
            text:"Software platform for running your new internet business"
        },
        {
            Source:"Group 33.png",
            heading:"Marketing",
            text:"Software platform for running your new internet business"
        },
        {
            Source:"Group 4.png",
            heading:"References",
            text:"Software platform for running your new internet business"
        }
    ];
  
    const socialLink = [
        {Link:"Vector.png"},
        {Link:"instagram.png"},
        {Link:"t.png"},
    ]
  return (
    <section className='bg-gray-50'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-12 px-12 md:px-12 1g:px-16 max-w-[1400px] mx-auto'>
            {/* left section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
                {CardData.map((card, index)=>(
                    <div key={index} className='p-4 gap-4 bg-white  transition-all text-center rounded-xl hover:bg-gray-100'>
                        <div className='flex items-center justify-center'>
                        <img src={card.Source} alt="" />
                        </div>

                        <div>
                        <h1 className='text-black text-lg md:text-xl font-semibold'>{card.heading}</h1>
                        <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                        </div>

                    </div>
                ))}
            </div>

            <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
                <h1 className='text-black text-3xl md:text-4xl lg:text-5xl font-semibold max-w-md lg:text-start text-center  lg:max-0'>The quickest way to create modern presentation</h1>
                <p className='text-gray-400 max-w-md  lg:mx-0 text-sm md:text-base'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>

                <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-300 mx-auto sm:mx-0 ">
                    Explore All
                    <ArrowForward sx={{ fontSize: 24}} />
                </button>

                <p className='text-gray-500 !mt-[85px] '>Follow us</p>
                <div className='flex justify-center lg:justify-start gap-4 mt-6 items-center'>
                    
                    {socialLink.map((social) => (
                            <a className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transitior duration-300'>
                                <img className='w-[30px] h-[30px] hover:cursor-pointer' src={social.Link} alt="" />
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Presentation