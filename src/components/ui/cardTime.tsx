import Image from 'next/image';
import Link from 'next/link';
import { CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';

interface CardTimeProps {
    imgUrl: string;
    name: string;
    position: string;
    linkedinUrl: string;
    instagramUrl: string;
}

const CardTime: React.FC<CardTimeProps> = ({ imgUrl, name, position, linkedinUrl, instagramUrl }) => {
    return (
        <div className="flex flex-col flex-wrap items-center mx-auto z-10 bg-slate-200 w-[221px] h-[364px] rounded-lg m-10 box-border">
            <Image
                className="h-52 rounded-md rounded-b-none"
                src={imgUrl}
                alt={name}
                width={208}
                height={208}
            />
            <div className="h-20 text-center ">
                <h1 className="text-2xl font-bold mt-4">{name}</h1>
                <h2 className="text-basic_purple font-bold leading-none text-center px-4">{position}</h2>
            </div>
            <div className="flex flex-row gap-4 py-4">
                <Link href={linkedinUrl} passHref className='bg-basic_purple hover:bg-dark_purple px-2 py-2 rounded-full'>
                    <CiLinkedin className="text-2xl text-white" />
                </Link>
                <Link href={instagramUrl} passHref className='bg-basic_purple hover:bg-dark_purple px-2 py-2 rounded-full'>
                    <FaInstagram className="text-2xl text-white" />
                </Link>
            </div>
        </div>
    );
};

export default CardTime;
