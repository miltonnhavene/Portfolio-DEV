import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div id='home' className='max-w-8xl flex justify-center items-center h-screen mx-30 text-white px-2'>
            <div>
                <div className='justify-items-center'>
                    <h2 className='font-inter text-[75px] font-bold text-center leading-tight w-full mb-10 mt-10'>
                        <span className='text-[#0086B0]'>Transformando conceitos </span> 
                        em
                        <br/>
                        experiencias de usuários
                    </h2>

                    <h1 className='text-xl lg:text-[50px] font-ovo'> 
                        <TypeAnimation
                            sequence={[
                                ' Software Developer',
                                2000,
                                ' Frontend Developer',
                                2000
                            ]}
                            wrapper="span"
                            speed={40}
                            className='text-justify-center mb-10'
                            repeat={Infinity}
                        />
                    </h1>

                <div className='flex flex-col sm:flex-row items-center gap-8 mt-12 mb-10 items-justify-center'>
                        <a href="https://www.linkedin.com/in/joao-nhavene-4578272b0/"
                            className='px-18 py-4 border border-white rounded-full flex items-center gap-2 hover:bg-blue-500'>
                            LinkedIn <IoIosArrowRoundForward />
                        </a>
                        <a href="/CV-JoãoNhavene.pdf" download
                            className='px-10 py-4 border border-white rounded-full flex items-center gap-2 hover:bg-blue-500'>
                            Curriculum Vitae <AiOutlineDownload />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
