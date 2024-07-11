import React from 'react'
import Image from 'next/image'
import corte from "/public/img/assets/corte_triangular.svg"

const CountingSection = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex w-full justify-center'>
                <Image
                    src={corte}
                    alt="">
                </Image>
            </div>
            <div className='bg-basic_purple flex flex-col md:flex-row w-full justify-center py-8 gap-14 px-8 md:px-24'>
                <div className='flex flex-col gap-2 hover:scale-110 transition duration-300'>
                    <h1 className='text-white text-center font-montserrat font-bold text-2xl md:text-3xl'>+ de 5 anos</h1>
                    <p className='text-white text-center font-montserrat font-medium text-sm max-w-96'>
                        de <strong>experiência em mercado</strong> entregando soluções digitais para dentro e fora da região Sobralense.</p>
                </div>
                <div className='flex flex-col gap-2 hover:scale-110 transition duration-300'>
                    <h1 className='text-white text-center font-montserrat font-bold text-2xl md:text-3xl'>+ de 4 serviços</h1>
                    <p className='text-white text-center font-montserrat font-medium text-sm max-w-96'>
                        entregues para você durante seu atendimento.
                        Dentre eles estão:<strong>marketing, vendas, desenvolvimento ágil, atendimento personalizado</strong>, entre outros:)</p>
                </div>
                <div className='flex flex-col gap-2 hover:scale-110 transition duration-300'>
                    <h1 className='text-white text-center font-montserrat font-bold text-2xl md:text-3xl'>+ de 99 cafés</h1>
                    <p className='text-white text-center font-montserrat font-medium text-sm max-w-96'>
                        tomados durante o <strong>desenvolvimento da solução do seu negócio</strong></p>
                </div>
            </div>
        </div>
    )
}

export default CountingSection