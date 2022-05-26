import React from 'react'
import NavbarStyle from '../styles/Navbar.module.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className={NavbarStyle.container}>
        <ul className={NavbarStyle.ul}>
            <li className={NavbarStyle.li}><HomeOutlinedIcon className={NavbarStyle.icon}/><Link href="/">Home</Link></li>
            <li className={NavbarStyle.li}><PersonOutlineOutlinedIcon className={NavbarStyle.icon}/><Link href="/Contact">Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar