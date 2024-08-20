import Image from 'next/image'
import React from 'react'
import Teacher from '/public/img/assets/teacher.svg'
import Aspas from '/public/img/assets/aspas.svg'
import DetalheBolinhas from '/public/img/assets/bolinhas.svg'

const TutorTeacher = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto py-10 px-8'>
            <Image
                src={Teacher}
                alt="Professor Tutor, Iális Cavalcante"
                className='w-65 md:w-75 m-auto'>
            </Image>
            <div className='flex flex-col items-left justify-center p-4'>
                <h1 className='text-3xl md:text-5xl text-basic_purple font-bold text-center md:text-left mb-4'>
                    Professor Tutor
                </h1>
                <div className='bg-light_gray rounded-md flex flex-col max-w-xs md:max-w-lg m-1 md:m-0 p-2 h-3/6 relative'>
                    <Image
                        src={Aspas}
                        alt='Aspas'
                        width={30}
                        height={50}
                        className='absolute top-4 left-4'>
                    </Image>
                    <p className='text-xs py-4 px-12 md:px-8 my-auto'>
                        Tive a honra de acompanhar a criação e o
                        desenvolvimento da Loading Jr, e é uma honra fazer a
                        tutoria de um grupo tão autossuficiente e engajado. Cada
                        nova gestão da EJ traz novas contribuições e seus
                        membros se apresentam com autonomia, criatividade e
                        equilíbrio social e financeiro. Anseio contribuir por
                        muito mais tempo com este time.
                    </p>
                    <Image
                        src={Aspas}
                        alt='Aspas'
                        width={30}
                        height={50}
                        className='absolute bottom-4 right-4 transform rotate-180'>
                    </Image>
                </div>
            </div>

        </div>
    )
}

export default TutorTeacher