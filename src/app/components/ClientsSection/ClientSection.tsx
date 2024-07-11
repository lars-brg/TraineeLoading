import React from 'react'
import Image from 'next/image'
import Parceiros from '/public/img/assets/partners.svg'
import ServicosInclusos from '/public/img/assets/include_services.svg'
import Button from '../Button/Button'
import { Checklist } from '../Checklist/Checklist'

const ClientSection = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div className='flex flex-col gap-3 md:gap-4 max-w-md justify-center items-center'>
                    <h1 className='justify-center font-montserrat font-medium text-3xl md:text-5xl'>
                        <span className='text-basic_purple'>+</span>SOBRE NOSSOS
                    </h1>
                    <h1 className='justify-center text-center font-montserrat text-basic_purple font-bold text-4xl md:text-6xl'>
                        CLIENTES E PARCEIROS
                    </h1>
                    <p className='leading-relaxed text-center justify-center font-montserrat font-medium'>
                        Já pensou em ter sua logo aqui?
                    </p>
                    <Button name='Quero impulsionar meu negócio' link='#' />
                </div>
                <div>
                    <Image
                        src={Parceiros}
                        alt='Parceiros'>
                    </Image>
                </div>
            </div>

            <div className='flex flex-col-reverse md:flex-row px-8 md:px-24 gap-16 md:gap-28'>
                <div>
                    <Image
                        src={ServicosInclusos}
                        alt='Serviços incluídos'>
                    </Image>
                </div>
                <div className='flex flex-col gap-7 max-w-md items-center'>
                    <div>
                        <h1 className='justify-center text-center font-montserrat font-medium text-3xl md:text-4xl'>
                            <span className='text-basic_purple'>+</span> SERVIÇOS
                        </h1>
                        <h1 className='justify-center text-center font-montserrat text-basic_purple font-bold text-4xl md:text-6xl'>
                            INCLUÍDOS
                        </h1>
                        <p className='leading-relaxed text-center justify-center font-montserrat font-medium'>
                            Veja o que você terá no acompanhamento do seu projeto
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-8'>
                        <div className='leading-relaxed text-left justify-center font-montserrat font-medium'>
                            <Checklist
                                title='Atendimento Personalizado'>
                            </Checklist>
                            <Checklist
                                title='Serviço de marketing e vendas'>
                            </Checklist>
                            <Checklist
                                title='Desenvolvimento ágil'>
                            </Checklist>
                            <Checklist
                                title='Suporte gratuito'>
                            </Checklist>
                            <Checklist
                                title='Preços acessíveis'>
                            </Checklist>
                            <Checklist
                                title='Soluções inovadoras'>
                            </Checklist>
                        </div>
                        <Button name='Quero impulsionar meu negócio' link='#' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ClientSection