
import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { FaHeadphonesSimple } from "react-icons/fa6";

 const ServiceDta =[
    {
        id :1,
        icon:<FaCarSide className="text-4xl md:text-5xl text-[red]" />,
        title :"Free Shipping",
        description :"Free Shipping on All Order",
    },

    {
        id:2,
        icon :<FaCheckCircle className='text-4xl md:text-5xl text-[red]' />,
        title:"Safe Money",
        description :"30 Days Money Back",
    },
    {
        id:3,
        icon :<FaWallet className='text-4xl md:text-5xl text-[red]' />,
        title :"Secure Payment",
        description:"All Payment Secure",
    },
    {
        id:4,
        icon :<FaHeadphonesSimple className='text-4xl md:text-5xl text-[red]' />,
        title :"Online Support 24/7",
        description:"Technical Support 24/7",
    },

 ];

export default function Services() {
  return (
    <div>
        <div className='container my-14 md:my-20 '>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 '>

                {
                    ServiceDta.map((data)=>(
                        <div className='flex flex-col items-start sm:flex-row gap-4' >

                            {data.icon}

                            <div>
                                <h1 className='lg:text-xl font-bold ' > {data.title} </h1>
                                <h1 className='text-gray-400 text-sm' > {data.description} </h1>
                                
                            </div>
                        </div>
                    ))
                }
                <div></div>
            </div>
        </div>
    </div>
  )
}
