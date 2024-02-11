/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {

    const navTabs = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <a href='#aboutMe'>About Me</a> </li>
        <li> <a href='#projects'>Projects</a> </li>
        <li> <Link to='/'>Blog</Link> </li>
        <li> <a href='#contactMe'>Contact Me</a> </li>
    </>
  return (
    <div>
      <div className="navbar lg:w-full fixed bg-opacity-60 z-10 text-white bg-black ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl"
            >
              {navTabs}
            </ul>
          </div>
          <div className="btn btn-ghost text-2xl">
            <img className=" w-7 h-7  rounded-full" src={logo} />
          Rocky's <span className=" text-orange-500"> Portfolio</span>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
          {navTabs}
          </ul>
        </div>
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px]  hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='  flex justify-between items-center w-full text-gray-300 px-4 text-xl'
              href='https://www.linkedin.com/in/alamgir-hossain-rocky/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4 text-xl'
              href='https://github.com/Rocky3112'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4 text-xl'
              href='mailto:alomgirhossainrocky@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300 px-4 text-xl'
              href='https://drive.google.com/file/d/1ehCq_SijTpaC-8xH6OfBjzyGD1psecv2/view?usp=sharing'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
       
      </div>
    </div>
  );
};

export default Navbar;
