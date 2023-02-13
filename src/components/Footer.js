import Image from "next/image";
import Link from "next/link";
import logo from '../../public/logoNav.svg';
// import caratDown from '../../public/icons/carat_down.svg'

import slack from '../../public/icons/slack_bw.svg';
import skype from '../../public/icons/skype_bw.svg';
import twitter from '../../public/icons/twitter_bw.svg';
import style from '@/styles/footer.module.scss'

export default function Footer(){
    return (
        <footer className={style.footer}>
                <div className={style.footer_grid}>
                    <div className={[style.location, style.fg].join("")}>
                        <Image src={logo} alt="" />
                        <p> 
                            9, Mike Ejezie Street <br />
                            Lekki Phase 1 <br />
                            Lagos - Nigeria 
                        </p>
                    </div>
                    <div className={style.fg}>
                        <h5>Products</h5>
                        <Link href="/">
                            Voice
                        </Link>
                        <Link href="/">
                            SMS
                        </Link>
                        <Link href="/">
                            USSD
                        </Link>
                        <Link href="/">Carrier Billing</Link>
                    </div>
                    <div className={style.fg}>
                        <h5>Resources</h5>
                        <Link href="/">
                            Developer APIs
                        </Link>
                        <Link href="/">
                            Careers
                        </Link>
                        <Link href="/">
                            Blog
                        </Link>
                    </div>
                    <div className={style.fg}>
                    <h5>Products</h5>
                        <Link href="/">
                            About
                        </Link>
                        <Link href="/">
                            Security
                        </Link>
                        <Link href="/">
                            Parteners
                        </Link>
                        <Link href="/">Contact</Link>
                        
                    </div>
                    <div className={style.fg}>
                    <h5>Legal</h5>
                        <Link href="/">
                            Terms
                        </Link>
                        <Link href="/">
                            Privacy
                        </Link>
                    </div>
                </div>
                <div className={style.footer_bt}>
                    <p className={style.ft_left}>
                        &copy; 2018 HollaTags. All Rights Reserved.
                    </p>
                    <div className={style.ft_right}>
                        <Link href="/">
                            <Image src={slack} alt="" />
                        </Link>
                        <Link href="/">
                            <Image src={skype} alt="" />
                        </Link>
                        <Link href="/">
                            <Image src={twitter} alt="" />
                        </Link>
                    </div>
                </div>
            </footer>
    )
}