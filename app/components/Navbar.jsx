import { MdArrowOutward } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
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
  <nav className='w-full fixed top-0 px-5 lg:px-10 xl:px-[8%] py-4 
    flex items-center justify z-50'>

    <div className="w-1/3 text-xl cursor-pointer" >
        <h1 className="text-3xl">João Nhavene</h1>
    </div>

       <ul className='hidden md:flex items-center gap-6 justify-center flex-grow
       px-4 py-3'>
        <li><a className="font-ovo text-lg hover:bg-purple-500 px-7 py-4 rounded-full text-white" href="#home">Home</a></li>
        <li><a className="font-ovo text-lg hover:bg-purple-500 px-7 py-4 rounded-full text-white" href="#about">About Me</a></li>
        <li><a className="font-ovo text-lg hover:bg-purple-500 px-7 py-4 rounded-full text-white" href="#projects">Projects</a></li>
       </ul>

       <div className='w-1/3 flex justify-end gap-4'>

            <button className="cursor-pointer">
              <BsMoon size={24} />
            </button>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
            py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-purple-500 px-7 py-4 rounded-full text-white'>Contact <MdArrowOutward/>
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
              <IoMenu size={30}/>
            </button>

       </div>

       {/* -- ----mobile menu ----- --*/}

          <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
              
              <div className="absolute right-6 top-6" onClick={closeMenu}>
                 <IoCloseSharp size={30} className="w-10 cursor-pointer" />
              </div>
              
              <li><a className="font-ovo text-lg" onClick={closeMenu} href="#home">Home</a></li>
              <li><a className="font-ovo text-lg" onClick={closeMenu} href="#about">About Me</a></li>
              <li><a className="font-ovo text-lg" onClick={closeMenu} href="#projects">Projects</a></li>
          </ul>

    </nav>
    </>
    
  )
}

export default Navbar