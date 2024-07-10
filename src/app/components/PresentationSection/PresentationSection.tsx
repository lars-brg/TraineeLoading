import React from 'react'
import Image from "next/image";
import ImagemFundo from "/public/img/ilustração.svg";

const PresentationSection = () => {
    return (
        <div className='flex flex-row w-full h-auto bg-basic_purple relative'>
            <div className='flex-col text-left lg:block absolute z-20 top-1/3 ml-14 w-2/5 text-primary_white font-montserrat'>
                <p className='text-base md:text-xl'>
                    Transformando ideias em realidade digital
                </p>
                <h1 className='text-4xl md:text-6xl'>
                    Construindo <br></br> um futuro com <b>criatividade</b> e <b>inovação</b>
                </h1>
            </div>
            <div className='w-full h-[560px] relative'>
                <div className='absolute bottom-0 right-0'>
                    <Image 
                    src={ImagemFundo} 
                    alt="Ilustração"
                    layout='intrinsic'
                    width={800} 
                    height={800}
                    quality={100}
                    className="object-cover">
                    </Image>
                </div>
            </div>
        </div>
    )
}
export default PresentationSection
