import Image from 'next/image'
import React from 'react'
import LogoLoading from '/public/img/assets/logoColorida.svg'

const MissionLoading = () => {
    return (
        <div>
            <div className='flex flex-col my-14 md:my-11 px-8 md:px-32 justify-center items-center gap-5'>
                <div className='flex justify-center'>
                    <Image
                        src={LogoLoading}
                        alt='LoadingJr'
                        className='w-28 md:w-72'>
                    </Image>
                </div>
                <h1 className='text-center text-2xl md:text-3xl text-basic_purple font-montserrat font-extrabold'>Loading Desenvolvimento Jr</h1>
                <p className='text-center text-base md:text-xl font-medium'>
                    Nossa Missão é promover o crescimento profissional dos membros através da vivência
                    empresarial, entregando soluções digitais aos micro e pequenos empresários da região Nordeste.
                </p>
            </div>
        </div>
    )
}

export default MissionLoading