import React from 'react'
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div>
  <div class="bg-emerald-800 text-white py-2 px-4 h-full w-[18rem]">
   
    <ul class="space-y-2">
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/voters" replace={true} smooth={true} duration={500} className="block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">Voters</Link>
    </li>
   
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/reportnews" replace={true} smooth={true} duration={500} className="block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">Add News</Link>
    </li>
      <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/addcandidate" replace={true} smooth={true} duration={500} className="block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600e" aria-current="page">Add Candidate</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/addchairman" replace={true} smooth={true} duration={500} className="block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">Add Chairman</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/addcandidate" replace={true} smooth={true} duration={500} className="block text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">Candidate Description</Link>
    </li>
    <li className='h-[2rem] mb-2 p-5'>
                 <Link to="/notifications" replace={true} smooth={true} duration={500} className="block gap-3 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600" aria-current="page">
<button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">
  <svg class="w-3 h-3 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
</button>Notifications
</Link>
    </li>
    </ul>
  </div>


      
    </div>
  )
}