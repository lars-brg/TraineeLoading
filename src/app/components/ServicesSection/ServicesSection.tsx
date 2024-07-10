import React from 'react'
import Image from 'next/image'
import SiteAplicativo from '/public/img/servicesSection/sites_aplicativos.svg'
import Marketing from '/public/img/servicesSection/marketing.svg'
import Button from '../Button/Button'

const ServicesSection = () => {
    return (
        <div>
            <div className='flex flex-col my-10 md:my-11 px-4 justify-center items-center'>
                <div className='flex flex-row justify-center gap-2 font-montserrat font-medium text-2xl md:text-4xl'>
                    <h1 className='text-center text-basic_purple items-center'>+</h1>
                    <h1 className='text-center items-center'>DOS NOSSOS</h1>
                </div>
                <h1 className='text-center text-4xl text-basic_purple font-montserrat font-bold'>SERVIÇOS</h1>
                <p className='text-center text-sm md:text-base font-montserrat max-w-xl py-4 font-medium'>Tenha a disposição o melhor que a empresa jr da nova economia tem a oferecer ao seu negócio. </p>
            </div>

            <div className='flex flex-col md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div className='flex flex-col gap-4 max-w-md items-start justify-center'>
                    <h1 className='text-left text-basic_purple font-montserrat font-extrabold text-3xl md:text-6xl'>SITES E APLICATIVOS</h1>
                    <p className='leading-relaxed font-montserrat font-medium'>A Loading te ajuda a reinventar seu negócio através de sites, sistemas,
                        de modo a resolver os problemas que estão atrapalhando seu negócio.
                        Tornamos seu sonho em realidade com as melhores soluções de maneira personalizada para
                        impulsionar seu negócio.
                    </p>
                    <Button name='SAIBA MAIS' link='#' />
                </div>
                <div>
                    <Image
                        src={SiteAplicativo}
                        alt='Sites e Aplicativos'>
                    </Image>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div>
                    <Image
                        src={Marketing}
                        alt='Marketing'>
                    </Image>
                </div>
                <div className='flex flex-col gap-4 max-w-md items-start justify-center'>
                    <h1 className='text-left text-basic_purple font-montserrat font-extrabold text-3xl md:text-6xl'>MARKETING</h1>
                    <p className='text-left leading-relaxed font-montserrat font-medium'>
                        Não acreditamos que a mesma solução de marketing seja boa para todas as empresas.
                        Por isso, sempre dedicamos tempo para aprender sobre sua empresa e seus clientes, e com isso poder recomendar uma estratégia baseada em suas necessidades comerciais específicas.
                        A solução é com uma estratégia de marketing personalizada, onde definimos as melhores táticas e com um orçamento que permite uma ótima lucratividade.
                    </p>
                    <Button name='SAIBA MAIS' link='#' />
                </div>
            </div>
        </div>
    )
}

export default ServicesSection