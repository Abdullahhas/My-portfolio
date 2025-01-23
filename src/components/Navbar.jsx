import React from 'react'
// import { ArrowRightIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <header className='bg-gray-800 top-0 sticky z-10 '>
        <div className='flex justify-between items-center p-4'>
            <a className='ml-16 text-xl text-white' href="#about">About </a>
            <nav className='mr-auto ml-12 w-[600px]    flex justify-start text-base border-x-gray-500  border-l items-center text-gray-400' > 
                <a className='hover:text-white ml-7' href="#projects">Past Work</a>
                <a className='hover:text-white ml-7' href="#skills">Skills</a>
                <a className='hover:text-white ml-7' href="#testimonials">Testimonials</a>
            </nav>
            <div className='mr-12 text-gray-400 align-middle flex items-center gap-2'>
            <a className='hover:text-white'  href="#contact">Hire me</a>
            <FontAwesomeIcon icon={faArrowRight} />
            
            </div>
            
        </div>
      
    </header>
  )
}

export default Navbar
