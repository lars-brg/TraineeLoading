import Image from 'next/image'
import React from 'react'
import Cellphone from '/public/img/assets/cell.svg'

const LoadingOnline = () => {
    return (
        <div className='flex md:flex-row flex-col bg-light_gray justify-center items-center py-10 px-10 space-y-16'>
            <div className='flex flex-col gap-2'>
                <h2 className='text-2xl md:text-5xl text-basic_purple font-bold'>
                    Loading na net😝
                </h2>
                <h2 className='text-left text-2xl md:text-4xl font-bold py-2'>
                    Vem fazer parte da nossa família :)
                </h2>
                <p className='text-xs text-basic_purple font-bold'>
                    Conteúdos gratuitos mais próximos de você
                </p>
            </div>
            <div>
                <Image
                    src={Cellphone}
                    alt='Loading na net'
                    className='w-65 md:w-70'>
                </Image>
            </div>

        </div>
    )
}

export default LoadingOnline