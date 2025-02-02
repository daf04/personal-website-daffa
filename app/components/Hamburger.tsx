"use client";

import React, { useState } from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TransitionMenu from './TransitionMenu';

const Hamburger = () => {

    const [open,setOpen] = useState(false)
    const getLink = usePathname()
    const links = [
      {url : "/", title : "Home"},
      {url : "/about", title : "About"},
      {url : "/works", title : "Works"},
      {url : "/contact", title : "Contact"}
  ];

    function handleClick () {
        setOpen(!open)
    }

    const listVariant = {
      closed: {
        x:"100vw",
      },
      opened: {
        x: 0,
        transition: {
          staggerChildren : 0.2
        }
      },
    };

    const menuVariant = {
      closed : {
        x:-70,
        opacity:0
      },
      opened : {
        x:0,
        opacity:1
      }
    }


  return (
    <>
    <div className={`hamburger flex relative
    flex-col justify-between items-center h-6 cursor-pointer z-20 md:hidden ${open && "hamburgerActive"}`} onClick={handleClick}>
        <span className={`w-7 h-1 bg-slate-900 rounded origin-top-left duration-300 ease-in-out ${open && "bg-white"}`}></span>
        <span className='w-7 h-1 bg-slate-900 rounded duration-300 ease-in-out'></span>
        <span className={`w-7 h-1 bg-slate-900 rounded origin-bottom-left duration-300 ease-in-out ${open && "bg-white"}`}></span>
    </div>
    {open && (
      <motion.div variants={listVariant} initial="closed" animate="opened" className={`absolute top-0 right-0 w-screen h-screen bg-slate-700 flex-col gap-16 text-2xl flex justify-center items-center z-10 md:hidden`}>
      {links.map((link,i) => (
            <motion.div className='text-white' key={i} initial={{x:-70,opacity:0}} animate={{x:0, opacity:1, transition:{delay:i * 0.3}}}>
              <Link key={link.title} className={`hover:text-teal-500 text-2xl duration-300 ${getLink === link.url && "text-3xl text-teal-500 font-bold"}`} href={link.url} >
              {link.title}
              </Link>
            </motion.div>
            
        ))}
       <div className='sosmed absolute mt-[600px] flex items-end justify-center gap-6 md:hidden'>
       <motion.a initial={{scale:0}} animate={{scale:1}} transition={{delay:0.1}} href="https://www.instagram.com/aldrchdapaz/"target='_blank' className='duration-300 text-white hover:text-teal-500'>
          <svg role="img" width="35" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
      </motion.a>
      <motion.a initial={{scale:0}} animate={{scale:1}} transition={{delay:0.2}} href="mailto:aldrichdaffa0401@gmail.com" className='duration-300 text-white hover:text-teal-500'>
          <svg role="img" width="35" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
      </motion.a>
      <motion.a initial={{scale:0}} animate={{scale:1}} transition={{delay:0.3}} href="https://github.com/daf04" target='_blank' className='duration-300 text-white hover:text-teal-500'>
          <svg role="img" width="35" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </motion.a>
      {/* <motion.a initial={{scale:0}} animate={{scale:1}} transition={{delay:0.4}} href="#" className='duration-300 text-white hover:text-teal-500'>
          <svg role="img" width="35" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </motion.a> */}
      </div>    
      </motion.div>
    )}
    </>
  )
}

export default Hamburger