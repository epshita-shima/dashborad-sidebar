import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom';

const TopMenu = () => {
    const menu=
    <>
    <li className='text-white font-bold text-xl'><Link to='/home'>Home</Link></li>
    <li className='text-white ml-3 font-bold text-xl'><Link to='/about'>About</Link></li>
    <li className='text-white ml-3 font-bold text-xl'><Link to='/contact'>Contact</Link></li>
    </>

  return (
    <div class="navbar bg-[#15171c]  overflow-hidden">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
        <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
        {
            menu
        }
      </ul>
    </div>
    {/* <a class="btn btn-ghost normal-case text-xl">daisyUI</a> */}
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
      {
        menu
      }
    </ul>
  </div>
  <div class="navbar-end">
  <div class="dropdown">
  <label tabindex="0" class="btn m-1"><img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" className='h-6 w-6 rounded-full' alt="" />
      <p className='ml-2 text-white'>Infoname</p></label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
    <li className='text-yellow-700'><a>Item 1</a></li>
    <li className='text-yellow-700'><a>Item 2</a></li>
    <li className='text-yellow-700'><a>Item 2</a></li>
  </ul>
</div>
    </div>
</div>
  )
}

export default TopMenu
