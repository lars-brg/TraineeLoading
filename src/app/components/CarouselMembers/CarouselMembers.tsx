import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import CardTime from "@/components/ui/cardTime";
const CarouselMembers = () => {
    const teamMembers = [
        { imgUrl: "/img/time/Harold.svg", name: "Harold", position: "Presidente", linkedinUrl: "https://www.linkedin.com/in/Harold", instagramUrl: "https://www.instagram.com/calixtoharold_" },
        { imgUrl: "/img/time/DiogoLima.svg", name: "Diogo Lima", position: "Vice-Presidente", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/Jonanthan.svg", name: "Jonanthan", position: "Diretor de Projetos", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/DanielMeneses.svg", name: "Daniel Meneses", position: "Diretor de Marketing e Vendas", linkedinUrl: "https://www.linkedin.com/in/DanielMeneses", instagramUrl: "https://www.instagram.com/danielmenesesdg" },
        { imgUrl: "/img/time/AlanLima.svg", name: "Alan Lima", position: "Dev Front-End", linkedinUrl: "https://www.linkedin.com/in/AlanLima", instagramUrl: "https://www.instagram.com/alan.reiss" },
        { imgUrl: "/img/time/Pierre.svg", name: "Pierre", position: "Dev Front-End", linkedinUrl: "https://www.linkedin.com/in/Pierre", instagramUrl: "https://www.instagram.com/igor.pierre7" },
        { imgUrl: "/img/time/JuniorMoreira.svg", name: "Júnior Moreira", position: "Dev Front-End", linkedinUrl: "#", instagramUrl: "https://www.instagram.com/juniormoreira013" },
        { imgUrl: "/img/time/CaioVinicius.svg", name: "Caio Vinicius", position: "Dev Front-End", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/EduardoCastro.svg", name: "Eduardo Castro", position: "Dev Back-End", linkedinUrl: "https://www.linkedin.com/in/EduardoCastro", instagramUrl: "https://www.instagram.com/thecastrodev" },
        { imgUrl: "/img/time/ArturJardel.svg", name: "Artur Jardel", position: "Dev Back-End", linkedinUrl: "https://www.linkedin.com/in/ArturJardel", instagramUrl: "#" },
        { imgUrl: "/img/time/JoaoVitor.svg", name: "João Vitor", position: "Dev Back-End", linkedinUrl: "https://www.linkedin.com/in/JoãoVitor", instagramUrl: "https://www.instagram.com/jv_4guiar" },
        { imgUrl: "/img/time/Daniel.svg", name: "Daniel", position: "Dev Back-End", linkedinUrl: "https://www.linkedin.com/in/Daniel", instagramUrl: "https://www.instagram.com/daniel_menesesss" },
        { imgUrl: "/img/time/Caioa.svg", name: "Caioã", position: "Dev Back-End", linkedinUrl: "https://www.linkedin.com/in/Caioã", instagramUrl: "https://www.instagram.com/caioa.rodrigues" },
        { imgUrl: "/img/time/JoseAlan.svg", name: "José Alan", position: "Assessor de Marketing e Vendas", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/Priscila.svg", name: "Priscila Áquila", position: "Assessora de Marketing", linkedinUrl: "https://www.linkedin.com/in/PriscilaÁquila", instagramUrl: "https://www.instagram.com/priaraujodesign" },
        { imgUrl: "/img/time/WalissonPortela.svg", name: "Walisson Portela", position: "Assessor de Marketing", linkedinUrl: "https://www.linkedin.com/in/WalissonPortela", instagramUrl: "https://www.instagram.com/walisson_portela" },
        { imgUrl: "/img/time/PauloRicardo.svg", name: "Paulo Ricardo", position: "Assessor de Marketing", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/BrenoWesley.svg", name: "Breno Wesley", position: "Assessor de Vendas", linkedinUrl: "https://www.linkedin.com/in/BrenoWesley", instagramUrl: "https://www.instagram.com/brenowes_" },
        { imgUrl: "/img/time/Bianka.svg", name: "Bianka", position: "Assessora de Recursos Humanos", linkedinUrl: "https://www.linkedin.com/in/Bianka", instagramUrl: "#" },
        { imgUrl: "/img/time/Israel.svg", name: "Israel", position: "Assessor de Adm e Finanças", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/MariaCamilly.svg", name: "Maria Camilly", position: "Assessora de Adm e Finanças", linkedinUrl: "#", instagramUrl: "#" },
        { imgUrl: "/img/time/Silvan.svg", name: "Silvan", position: "Assesor de RH", linkedinUrl: "#", instagramUrl: "#" },
    ];
    return (
        <div className="relative mt-10 mx-20">
            <Carousel>
                <CarouselPrevious>

                </CarouselPrevious>
                <CarouselContent className="flex gap-4">
                    {teamMembers.map((member, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                            <CardTime
                                imgUrl={member.imgUrl}
                                name={member.name}
                                position={member.position}
                                linkedinUrl={member.linkedinUrl}
                                instagramUrl={member.instagramUrl}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext>

                </CarouselNext>
            </Carousel>
        </div>
    )
}

export default CarouselMembers