import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
    return (
        <div className='max-w-6xl mx-50 mt-50 text-white px-4'>
            <div className='flex flex-col md:flex-row justify-between gap-32'>

                {/* COLUNA ESQUERDA */}
                <div className='md:w-1/2 mx-10'>
                    <div className="w-32 h-1 bg-white mb-8"></div>
                    <h3 className='text-purple-400 text-2xl my-4'>
                        Olá, meu nome é
                    </h3>

                    <h3 className='text-4xl md:text-5xl font-ovo mb-3 text-gray-300'>
                        João Nhavene.
                    </h3>

                    <h1 className='text-xl lg:text-[40px] font-ovo'>
                        <TypeAnimation
                            sequence={[
                                'Desenvolvedor de Software.',
                                2000,
                                'Desenvolvedor Front-End.',
                                2000
                            ]}
                            wrapper="span"
                            speed={40}
                            className='text-purple-400'
                            repeat={Infinity}
                        />
                    </h1>

                    <p className='my-4 text-gray-300 font-ovo text-justify leading-loose'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sed vero doloremque, minima ab illum atque, eius dolore officiis beatae sapiente animi inventore quam quibusdam sint corporis impedit. Error, commodi.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center gap-4 mt-8 ml-14'>
                        <a href="https://www.linkedin.com/in/joao-nhavene-4578272b0/" 
                           className='px-16 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-blue-500'>
                            LinkedIn <IoIosArrowRoundForward />
                        </a>
                        <a href="/CV-JoãoNhavene.pdf" download 
                           className='px-8 py-3 border border-white rounded-full flex items-center gap-2 hover:bg-blue-500'>
                            Curriculum Vitae <AiOutlineDownload />
                        </a>
                    </div>
                </div>

                {/* COLUNA DIREITA */}
                <div className='md:w-1/3 space-y-12'>

                    {/* About Me */}
                    <div className=''>
                        <h3 className='text-xl font-bold uppercase tracking-wider mb-3'>Sobre mim</h3>
                        <p className='text-gray-400 mb-2 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quaerat! Obcaecati, dicta corporis. Maxime velit repudiandae excepturi deleniti sit ipsa animi id.
                        </p>
                        <a href="#" className='text-1sm border-b border-white hover:text-blue-400 transition'>
                            Learn more →
                        </a>
                    </div>

                    {/* My Works */}
                    <div>
                        <h3 className='text-xl font-bold uppercase tracking-wider mb-3'>My Works</h3>
                        <p className='text-gray-400 mb-2 text-justify'>
                            Minus similique ea corrupti facere, natus ullam et mollitia eligendi quidem nesciunt illo animi sequi blanditiis aut.
                        </p>
                        <a href="#" className='text-1sm border-b border-white hover:text-blue-400 transition'>
                            Learn more →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
