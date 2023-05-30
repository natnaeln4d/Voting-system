import React from 'react'
import { Link } from 'react-router-dom';
import {BsPersonFillAdd} from "react-icons/bs" 
import { MdDescription }  from "react-icons/md";
import {IoIosPeople}  from "react-icons/io"
import Logout from '../Auth/Logout';


export default function Sidebar() {

const logout = () => {
  Logout()
}
  return (
    <div>
  <div class="bg-emerald-800 text-white py-2 px-4 h-full overflow-y-auto  w-[18rem]">
   
    <ul class="space-y-2 ">
    <li className='h-[2rem]  mb-2 p-5'>
                 <Link to="/admin/dashboard" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Dashboard</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/allcandidates" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Candidates</Link>
    </li>
    
    {/* <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/addcandidate" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Add Candidate</Link>
    </li> */}
    
    {/* <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/updatecandidate" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Update Candidate</Link>
    </li> */}
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/admin/chairman" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Chairmans</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/face-auth" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Add Chairmans</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/voters" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <IoIosPeople class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Voters</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/add-voter" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />
                Add Voters</Link>
    </li>
   
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/AddVote" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />
                 Add Ellection</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'
       onClick={logout}
    >
                 <Link to="/AddVote" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />
                 Add Ellection</Link>
    </li>

    
    
  
    
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/candidatedescription" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <MdDescription class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Post Announcement</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/ElectionResult" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />Election Result</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/notifications" replace={true} smooth={true} duration={500} className="block gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">
  <svg class="w-3 h-3 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
</button>Complains
</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/admin/update-profile" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <MdDescription class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" /> Update Profile</Link>
    </li>
    
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/Updatepasswordforadmin" replace={true} smooth={true} duration={500} className="flex gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
                 <BsPersonFillAdd class="w-[2rem] h-[2rem] bg-blue-600 p-1 rounded" />
                 Update Password</Link>
    </li>
    </ul>
  </div>


      
    </div>
  )
}