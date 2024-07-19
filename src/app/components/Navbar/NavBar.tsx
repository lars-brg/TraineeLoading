"use client";
import logoLoadingJr from "/public/img/navbar/logo-LoadingJr.svg";
import logoComplemento from "/public/img/navbar/logo-complemento.svg";
import facebookIcon from "/public/img/navbar/mediaIcons/facebook.svg";
import linkedinIcon from "/public/img/navbar/mediaIcons/linkedin.svg";
import gmailIcon from "/public/img/navbar/mediaIcons/gmail.svg";
import instagramIcon from "/public/img/navbar/mediaIcons/instagram.svg";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="top-0 left-0 right-0 z-50 bg-dark_purple text-primary_white py-5 font-montserrat font-bold">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center md:text-xs lg:text-base">
                {/* Logo */}
                <div className="flex space-x-5 justify-center">
                    <Link href="/">
                        <Image
                            src={logoLoadingJr}
                            alt="Loading"
                            width={105} height={40}
                        />
                    </Link>
                    <Link href="/">
                        <Image
                            src={logoComplemento}
                            alt="Desenvolvimento de sites e soluções digitais"
                            width={240} height={45}
                        />
                    </Link>
                </div>
                {/* Itens da navbar */}
                <div className="hidden md:flex flex-1 justify-around gap-10">
                    <div className="flex gap-12">
                        <Link href="#about" className="text-primary_white border-purple-500 hover:border-b">Sobre a Loading</Link>
                        <Link href="#contact" className="text-primary_white border-purple-500 hover:border-b">Contato</Link>
                        <Link href="/portfolio" className="text-primary_white border-purple-500 hover:border-b">Conteúdo Gratuito</Link>
                    </div>
                    <div className="flex gap-6">
                        <Link href="#linkedin" className="text-primary_white">
                            <CiLinkedin className="text-2xl"/>
                        </Link>
                        <Link href="#facebook" className="text-primary_white">
                            <AiOutlineFacebook className="text-2xl"/>
                        </Link>
                        <Link href="#instagram" className="text-primary_white">
                            <FaInstagram className="text-2xl"/>
                        </Link>
                        <Link href="#gmail" className="text-primary_white">
                            <CgMail className="text-2xl"/>
                        </Link>
                    </div>
                </div>
                {/* Menu móvel */}
                <div className="md:hidden flex-col items-end">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {/* Menu móvel */}
            {isMobileMenuOpen && (
                <div className="md:hidden mt-2 flex flex-col items-start bg-dark_purple w-full px-4 py-2">
                    <Link href="#about" className="block w-full py-2 text-primary_white">Sobre a Loading</Link>
                    <Link href="#contact" className="block w-full py-2 text-primary_white">Contato</Link>
                    <Link href="/portfolio" className="block w-full py-2 text-primary_white">Conteúdo Gratuito</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
