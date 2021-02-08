import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { BiDownload } from 'react-icons/bi';

export default function NavBar() {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName='text-white'
            className='inflex-flex items-center py-6 px-3 mr-10  text-red-100 transition duration-300 ease-in-out  hover:bg-red-600  hover:text-white text-4xl cursive tracking-widest'
          >
            Anubhav
          </NavLink>
          <NavLink
            to='/post'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-4 my-6 mx-1 rounded text-red-200 transition duration-300 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:text-green-500'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/project'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-4 my-6 mx-1 rounded text-red-200 transition duration-300 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:text-green-500 hover:text-red-100'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='text-red-100 bg-red-700'
            className='inflex-flex items-center py-3 px-4 my-6 mx-1 rounded text-red-200 transition duration-300 ease-in-out  hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 hover:text-green-500 hover:text-red-100'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-4 my-6'>
          <SocialIcon
            url='https://github.com/anubhavcu'
            className='mr-5 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-150'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://www.linkedin.com/in/anubhavksr/'
            className='mr-5 transition duration-300 ease-in-out   transform hover:-translate-y-1 hover:scale-150'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='mailto:anubhavcs.py@gmail.com'
            className='mr-5 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-150'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://twitter.com/anubhav_sr'
            className='mr-5 transition duration-300 ease-in-out   transform hover:-translate-y-1 hover:scale-150'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            // url="https://wa.me/919315973298"
            url='https://facebook.com'
            className='mr-5 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-150'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <a
            // href="https://drive.google.com/file/d/16l1KhoQAUMQ3Z0C9r1sHO0hHDLrGvQur/view?usp=sharing"
            href='https://google.com'
            target='_blank'
          >
            <h3 className='mr-5 transition duration-300 ease-in-out  transform hover:-translate-y-1 hover:scale-150'>
              <BiDownload style={{ height: 35, width: 35, color: '#fff' }} />
            </h3>
          </a>
        </div>
      </div>
    </header>
  );
}
