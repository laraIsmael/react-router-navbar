import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

export default function Navbar() {
 let Links = [
   {name: 'About', link:'/about'},
   {name: 'Projects', link:'/projects'},
   {name: 'Contact', link:'/contact'},
 ]
 let [isOpen, setIsOpen] = useState(false);
 return (
   <div className="font-display sticky w-full shadow-md">
     <div className="md-px-10 py-2 px-4 md:flex justify-between items-center bg-white">
       {/* logo */}
       <div className="flex text2x1 cursor-pointer items-center text-lime-900">
         <Link to='/Home'>Home</Link>
       </div>
       {/* menu icon */}
       <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 absolute right-8 top-4 cursor-pointer md:hidden'>
         {
           isOpen
           ? <XMarkIcon/>
           : <Bars3Icon/>
         }
       </div>
       {/* nav links */}
       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg--white md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`}>
         {
           Links.map(link => (
             <li key={link.name} className="text-xs text-lime-900 font-semibold my-7 md:my-0 md:ml-8">
               <Link to={link.link}>{link.name}</Link>
             </li>
           ))
         }
       </ul>
     </div>
   </div>
 );
}