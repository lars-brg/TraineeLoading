import React from 'react'
import logoLoadingJrpequena from "/public/img/assets/logo_pequena.svg";
import facebookIcon from "/public/img/navbar/mediaIcons/facebook.svg";
import linkedinIcon from "/public/img/navbar/mediaIcons/linkedin.svg";
import gmailIcon from "/public/img/navbar/mediaIcons/gmail.svg";
import instagramIcon from "/public/img/navbar/mediaIcons/instagram.svg";
import Image from 'next/image';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-basic_purple py-10 gap-16 px-8 md:px-24 justify-center'>
      <div className='text-white font-montserrat text-sm flex flex-col gap-3 w-72 md:w-80'>
        <Image
          src={logoLoadingJrpequena}
          alt="linkedin"
          width={200} height={200}
        />
        <p className='font-normal'>
          R. Coronel Estanislau Frota, S/N, Centro, Sobral - CE
          Bloco I  - Mucambinho, Gabinete 19
        </p>
        <p className='font-normal text-xs'>
          © Todos os direitos reservados
        </p>
        <div className="flex gap-4">
          <Link href="#linkedin" className="text-primary_white">
            <Image
              src={linkedinIcon}
              alt="linkedin"
              width={20} height={20}
            />
          </Link>
          <Link href="#facebook" className="text-primary_white">
            <Image
              src={facebookIcon}
              alt="facebook"
              width={20} height={20}
            />
          </Link>
          <Link href="#instagram" className="text-primary_white">
            <Image
              src={instagramIcon}
              alt="instagram"
              width={20} height={20}
            />
          </Link>
          <Link href="#gmail" className="text-primary_white">
            <Image
              src={gmailIcon}
              alt="gmail"
              width={24} height={20}
            />
          </Link>
        </div>
      </div>

      <div className='text-white font-montserrat text-sm flex flex-col gap-8 w-72 md:w-80'>
        <p className='font-semibold'>
          Loading Desenvolvimento Jr |
          Próposito é um exercício diário
        </p>
        <p className='font-normal'>
          Criamos soluções digitais inovadoras, práticas e com preço justo com melhores profissionais juniores que nossa região tem a oferecer. Ajudamos você a reduzir custos em sua empresa e aumentando seu desempenho no mercado.
        </p>
      </div>

      <div className='text-white font-montserrat text-sm flex flex-col gap-6 w-72 md:w-80 '>
        <p className='font-semibold'>
          Chegou a hora!
          Não deixe sua empresa parada no tempo
        </p>

      </div>
    </div>
  )
}

export default ContactSection