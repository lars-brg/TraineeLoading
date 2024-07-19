"use client";
import React from 'react';
import Image from 'next/image';
import ImagemFundo from '/public/img/ilustração_portfolio.svg';

const PresentationPortfolio: React.FC = () => {
    return (
        <div className="flex flex-row w-full h-auto bg-basic_purple relative">
            <div className="flex text-left lg:block absolute z-20 top-8 md:top-28 mx-8 md:ml-14 w-auto md:w-2/5 text-primary_white">
                <h1 className="text-4xl md:text-6xl">
                    Deixamos que <span className='font-bold'>nossos trabalhos</span> falem por nós!
                </h1>
            </div>
            <div className="w-full h-[560px] relative">
                <div className="absolute bottom-0 right-0">
                    <Image
                        src={ImagemFundo}
                        alt="Ilustração"
                        layout="intrinsic"
                        width={800}
                        height={800}
                        quality={100}
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default PresentationPortfolio;
