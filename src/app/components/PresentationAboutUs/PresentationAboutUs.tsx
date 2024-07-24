import Image from 'next/image'
import React from 'react'
import ImagemSobreNos from '/public/img/ilustração_aboutUS.svg';

const PresentationAboutUs = () => {
    return (
        <div className="flex flex-row w-full h-auto bg-basic_purple relative">
            <div className="flex text-left lg:block absolute z-20 top-8 md:top-28 mx-8 md:ml-14 w-auto md:w-2/5 text-primary_white">
                <p className="text-3xl md:text-5xl">
                    Conheça nosso time e a visão que<span className="font-bold"> compartilhamos</span>
                </p>
                <h1 className="text-4xl md:text-6xl font-bold">
                    #VemSerLoading
                </h1>
            </div>
            <div className="w-full h-[560px] relative">
                <div className="absolute bottom-0 right-0">
                    <Image
                        src={ImagemSobreNos}
                        alt="Ilustração"
                        layout="intrinsic"
                        width={630}
                        height={630}
                        quality={100}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default PresentationAboutUs