import React from 'react'
import Image from 'next/image'
import Atendente from '/public/img/assets/attendance.svg'
import passos from '/public/img/assets/steps.svg'
import Button from '../Button/Button'

const AttendingSection = () => {
    return (
        <div className='mb-20'>
            <div className='flex flex-col md:flex-row py-8 md:py-28 gap-8'>
                <div className='flex flex-row px-8 md:px-24 items-center'>
                    <div className='flex flex-col jusitify-center items-center text-center'>
                        <h1 className='font-montserrat font-medium text-xl md:text-3xl'>COMO FUNCIONA NOSSO</h1>
                        <h1 className='font-montserrat font-bold text-2xl md:text-5xl text-basic_purple'>ATENDIMENTO</h1>
                        <p className='font-montserrat font-medium text-xs md:text-lg'>Você NÃO PAGA pelo atendimento :)</p>
                    </div>
                    <div>
                        <Image
                            src={Atendente}
                            alt=''
                            width={52}
                            height={178}>
                        </Image>
                    </div>
                </div>
                <div className='flex flex-row md:w-1/2 w-full px-8 jusitify-center items-center'>
                    <div>
                        <Image
                            src={passos}
                            alt=''>
                        </Image>
                    </div>
                    <div className='flex flex-col gap-6 md:gap-8 font-montserrat font-medium text-xs md:text-base pl-4'>
                        <p>Nos mande uma mensagem no whatsapp</p>
                        <p>Marcamos um momento para conversar. 100% online e gratuito :)</p>
                        <p>Fazemos uma proposta de serviço</p>
                        <p>Após fechar contrato iniciamos seu projeto</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center px-8 md:px-32 gap-10'>
                <div className='flex font-montserrat font-medium text-center text-base md:text-xl gap-1 '>
                    <p>Ajudamos você a
                        <span className='text-basic_purple'> reduzir custos e digitalizar seu negócio </span>
                        com o melhor em sites, aplicativos e marketing
                        <span className='text-basic_purple'> personalizados</span>.</p>
                </div>
                <Button
                    name='ENTRE EM CONTATO'
                    link='#'
                />
            </div>
        </div>
    )
}

export default AttendingSection