import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/Nav.module.scss"
// import "../styles/Nav.module.scss"
import logo from '../../public/logoNav.svg';
import caratDown from '../../public/icons/carat_down.svg'

export default function Nav(){
    const[dropShown, setisShown] = React.useState(false)

    function ToggleDropdown(){
        setisShown(prevShown => !prevShown)
    }
    return (
        <nav className={style.nav}>
            <Link className="logo" href='/'>
                <Image src={logo} alt=""/>
            </Link>
            <div className={style.nav_menu}>
                <Link href="#" id='product_menu' onClick={ToggleDropdown}>
                    Products
                    <Image src={caratDown} alt="" />
                </Link>
                <Link href="#">Customers</Link>
                <Link href="#">Pricing</Link>
                <Link href="#">Developer APIs</Link>
                <Link href="#">
                    Company
                    <Image src={caratDown} alt="" />
                </Link>
                <Link href="#">Contact Sales</Link>
                {dropShown && <div className={style.product_list}>
                    <Link href="/Products/sms" onClick={ToggleDropdown}>
                        <h5>SMS</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </Link>
                    <Link href="/Products/ussd" onClick={ToggleDropdown}>
                        <h5>USSD</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </Link>
                    <Link href="/Products/ivr" onClick={ToggleDropdown}>
                        <h5>IVR</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </Link>
                    <Link href="/Products/carrier" onClick={ToggleDropdown}>
                        <h5>Carrier Billing</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                    </Link>
                </div>}
            </div>
            <div className={style.nav_btns}>
                <Link href="#">Login</Link>
                <Link href="#">Sign Up</Link>
            </div>
        </nav>
    )
}