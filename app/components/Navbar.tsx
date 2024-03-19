'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
const Navbar = () => {
    const currentPath=usePathname();
    const navs=[
        {
            label:"Dasboard",
            href:"/"
        },
        {
            label:"Issues",
            href:"/pages/issues"
        }
    ] 
  return (
    <div>
      <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/">
            < AiFillBug/>
        </Link>
        <ul className='flex space-x-6'>
            {navs.map((data,index)=>
                <Link key={index} className={classNames({
                    'text-zinc-800':currentPath === data.href,
                    'text-zinc-600':currentPath !== data.href,
                    'hover:text-zinc-950 transition-colors font-bold':true
                })} href={data.href}>
                    {data.label}
                </Link>)}
        </ul>     
 </nav>
    </div>
  )
}

export default Navbar
