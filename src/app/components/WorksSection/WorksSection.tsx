import Image from "next/image"
import Button from "../Button/Button"
import AcarauValley from "/public/img/Acaraú_Valley.svg"


const WorksSection = () => {
    return (
        <div>
            <div className='flex flex-col px-8 md:px-24 gap-20 md:gap-20 my-20'>
                <div className='flex flex-col gap-4 max-w-md items-start justify-center'>
                    <h1 className='text-left text-basic_purple font-extrabold text-3xl md:text-6xl'>Acaraú Valley</h1>
                    <p className='leading-relaxed font-medium'>A Acaraú Valley é uma empresa que desempenha um papel crucial no ecossistema de startups, 
                        oferecendo suporte e recursos para empreendedores que estão no estágio inicial de desenvolvimento de seus negócios.
                    </p>
                    <Button name='CONHEÇA O SITE' link='#' />
                </div>
                <div>
                    <Image
                        src={AcarauValley}
                        alt='Acaraú Valley'>
                    </Image>
                </div>
            </div>
        </div>
    )
}

export default WorksSection