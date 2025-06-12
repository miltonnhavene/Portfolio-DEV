import { MdArrowOutward } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import React, {useRef} from 'react'

const Navbar = () => {
  
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }
  
  return (
    <>
  <nav className='sticky top-0 z-50 bg-gray-900 lg:px-10 xl:px-[10%] py-4 
    flex items-center justify'>

    <div className="w-1/3 text-xl cursor-pointer" >
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-purple-800 to-gray-800">João Nhavene</h1>
    </div>

       <ul className='hidden md:flex items-center gap-4 justify-center flex-grow
       px-6 py-3 text-white w-[600px]'>
        <li><a className="font-ovo text-lg  px-7 py-4 rounded-full text-white hover:text-purple-300" href="#home">Página Inicial</a></li>
        <li><a className="font-ovo text-lg  px-7 py-4 rounded-full text-white hover:text-purple-300" href="#about">Sobre Mim</a></li>
        <li><a className="font-ovo text-lg  px-7 py-4 rounded-full text-white hover:text-purple-300" href="#projects">Projectos</a></li>
       </ul>

       <div className='w-1/3 flex justify-end gap-4'>

            <button className="cursor-pointer">
              <BsMoon size={25} className="text-white" />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-2
             border border-gray-1 ml-2 hover:bg-blue-500 px-6 py-3 rounded-full text-white'>Contactar-me<MdArrowOutward/>
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
              <IoMenu size={30}/>
            </button>

       </div>

    </nav>
    </>
    
  )
}

export default Navbar