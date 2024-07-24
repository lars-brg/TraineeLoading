import React from 'react'
import Image from 'next/image'
import VisionHighFive from '/public/img/assets/highfive.svg'
import Leadership from '/public/img/assets/teamLeadership.svg'
import { Checklist } from '../Checklist/Checklist'

const ValuesAndVision = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div className='flex flex-col gap-4 max-w-md items-start justify-center'>
                    <h1 className='text-left text-basic_purple font-montserrat font-extrabold text-3xl md:text-6xl'>Visão</h1>
                    <p className='leading-relaxed font-montserrat font-medium'>
                        Ser uma empresa de referência em desenvolvimento de soluções digitais
                        na cidade de Sobral-CE e dentro do Campus da UFC de Sobral.
                    </p>
                </div>
                <div>
                    <Image
                        src={VisionHighFive}
                        alt='Visão'>
                    </Image>
                </div>
            </div>


            <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div>
                    <Image
                        src={Leadership}
                        alt='Valores'>
                    </Image>
                </div>
                <div className='flex flex-col gap-4 max-w-md items-start justify-center'>
                    <h1 className='text-left text-basic_purple font-montserrat font-extrabold text-3xl md:text-6xl'>Valores</h1>
                    <div className='leading-relaxed text-left justify-center font-montserrat font-medium'>
                            <Checklist
                                title='Paixão pelo que fazemos'>
                            </Checklist>
                            <Checklist
                                title='Desenvolvimento pessoal e profissional dos membros'>
                            </Checklist>
                            <Checklist
                                title='Qualidade e Compromisso com o serviço prestado'>
                            </Checklist>
                            <Checklist
                                title='Transparência com os membros e com os clientes'>
                            </Checklist>
                            <Checklist
                                title='Responsabilidade pelas soluções desenvolvidas'>
                            </Checklist>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ValuesAndVision
