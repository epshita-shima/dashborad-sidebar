import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='container sm:w-full lg:w-1/2 mx-auto bg-gradient-to-r from-cyan-100 to-blue-300  h-[550px] mt-6 mb-10'> 
      <div className=''>
      <div className='pt-8'>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" className='w-24 h-24 mx-auto' alt="" /> */}
            <img src="https://i.ibb.co/3NtTMqz/tlogo.png" className='w-28 h-28 mx-auto' alt="" />
        </div>
        <div className='w-2/3 mx-auto mt-6'>
        <form>
           <div>
              <label htmlFor="" className='text-zinc-600 text-[16px] ml-2'>Username</label>
                <input type="text" placeholder='Enter username' class="p-3 outline-none  rounded-full w-full bg-slate-50 mt-2" />
           </div>
        <div className='mt-4'>
            <label htmlFor="" className='text-zinc-600 text-[16px] ml-2'>Password</label> 
            <input type="password" placeholder='Enter password' class="p-3 outline-none rounded-full border-black w-full bg-slate-50 mt-2" />
        </div>
        <button><p className='text-zinc-600 mt-2 ml-2'>Forgot password?</p></button>
        <Link to='/sidebar'><div className='text-center'>
            <input type="submit" value="Login" className='p-3 font-bold text-zinc-800 outline-none border-black rounded-full w-2/3 bg-slate-50 mt-4 hover:bg-[#B88F31] hover:text-white' />
        </div></Link>
        </form>
        </div> 
      </div>
    </div>
  )
}

export default Login