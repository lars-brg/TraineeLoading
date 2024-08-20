// pages/index.tsx
import Head from 'next/head';
import LinkItem from '../components/LinkItem/LinkItem';
import LoadingLogo from '/public/img/navbar/logo-LoadingJr.svg'
import Image from 'next/image';

export default function Home() {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-purple-900 text-white'>
            <Head>
                <title>My Linktree</title>
                <meta name='description' content='Linktree style page with Tailwind CSS' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className='flex flex-col items-center w-full flex-1 px-20 text-center justify-center'>
                <Image
                    src={LoadingLogo}
                    alt="Loading Jr"></Image>
                <h1 className='text-2xl font-bold mb-8'>Links Úteis</h1>

                <div className='flex flex-col space-y-4 w-full items-center'>
                    <LinkItem
                        icon='instagram'
                        name='Instagram'
                        description='Nos acompanhe no Instagram! 📱'
                        url='https://www.instagram.com/loadingjr/'
                    />
                    <LinkItem
                        icon='linkedin'
                        name='LinkedIn'
                        description='Conheça nosso LinkedIn 👩‍💻'
                        url='https://www.linkedin.com/company/loading-junior/'
                    />
                    <LinkItem
                        icon='website'
                        name='Loading Jr.'
                        description='Dá uma olhada no nosso site! 👀'
                        url='https://www.loadingjr.com.br/'
                    />
                </div>
            </main>

            <footer className='w-full h-24 flex items-center justify-center border-t'>
                <p>© 2024 My Linktree</p>
            </footer>
        </div>
    );
}
