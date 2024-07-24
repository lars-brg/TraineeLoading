import Image from 'next/image'
import React from 'react'
import Teacher from '/public/img/assets/teacher.svg'

const TutorTeacher = () => {
    return (
        <div className='flex flex-col md:flex-row mx-auto py-10 px-8'>
            <Image
                src={Teacher}
                alt="Professor Tutor"
                className='w-65 md:w-75 m-auto'>
            </Image>
            <div>
                <h1 className='text-3xl md:text-5xl text-basic_purple font-bold te4xt-center md:text-left mb-4'>
                    Professor Tutor
                </h1>
                <div className='bg-light_gray rounded-md flex max-w-xs md:max-w-lg m-1 md:m-0 p-2'>
                    <h1 className='font-medium text-4xl md:text-8xl'>"</h1>
                    <p className='text-xs py-2 my-auto'>
                        Tive a honra de acompanhar a criação e o
                        desenvolvimento da Loading Jr, e é uma honra fazer a
                        tutoria de um grupo tão autossuficiente e engajado. Cada
                        nova gestão da EJ traz novas contribuições e seus
                        membros se apresentam com autonomia, criatividade e
                        equilíbrio social e financeiro. Anseio contribuir por
                        muito mais tempo com este time.
                    </p>
                    <h1 className='font-medium rotate-180 text-4xl md:text-8xl align-bottom'>"</h1>
                </div>
            </div>

        </div>
    )
}

export default TutorTeacher