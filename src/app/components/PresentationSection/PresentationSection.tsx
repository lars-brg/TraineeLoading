"use client";
import React from 'react';
import Image from 'next/image';
import ImagemFundo from '/public/img/ilustração.svg';
import TypingEffect from './TypingEffect';

const PresentationSection: React.FC = () => {
    return (
        <div className="flex flex-row w-full h-auto bg-basic_purple relative">
            <div className="flex-col text-left lg:block absolute z-20 top-8 md:top-1/3 mx-8 md:ml-14 w-auto md:w-2/5 text-primary_white font-montserrat">
                <p className="text-base md:text-xl">Transformando ideias em realidade digital</p>
                <h1 className="text-4xl md:text-6xl">
                    Construindo um futuro de
                    <span className="font-bold">
                        <TypingEffect
                            texts={[
                                ' criatividade e inovação!',
                                ' soluções digitais.',
                                ' transformações tecnológicas!',
                            ]}
                        />
                    </span>
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

export default PresentationSection;
