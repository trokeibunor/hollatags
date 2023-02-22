import style from '@/styles/carrier.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// components
import TeamTestimonial from '@/components/TeamTestimonial';
import BlogPostLg from '@/components/BlogPostLg';
import BlackContact from '@/components/BlackContact';
import CaseCard from '@/components/CaseCard';
import TopContact from '@/components/TopContact';
// Images
import HeroImg from '@/../public/carrier_hero_img.png';

// Icons
import arrowRight from '@/../public/icons/arrow_circle_right.svg';
import music from '@/../public/icons/music_icon.svg';
import card from '@/../public/icons/card_icon.svg';
import smartphone from '@/../public/icons/smartphone_icon.svg';
import rotate from '@/../public/icons/rotate_icon.svg';

export default function ussd(){
    return (
        <>
            <Head>
                <title>HollaTags -- Product Carrier Billing</title>
            </Head>
            <div className={style.container}>
            <section className={style.hero}>
                <div className={style.textSection}>
                    <h1>Always in touch with your customers via Tango USSD</h1>
                    <p>No Data? No problem. Your customers shouldn&apos;t be caught off guard whenever and wherever they need to connect, HollaTags USSD provides your customers real-time connection to your application </p>
                    <div className={style.cta_row}>
                        <Link href="" id="firstLink">
                            Learn More
                            <Image src={arrowRight} alt="" 
                        />
                        </Link>
                    </div>
                </div>
                <Image className={style.heroImg} src={HeroImg} alt=""></Image>
            </section>
            <section className={style.fway}>
                <h2>Harness the power of adaptable payment solutions</h2>
                <div className={style.fwayGrid}>
                    <div className={style.fwayCon}>
                        <Image src={music} className={style.fwayImage} alt=''></Image>
                        <h3>Value Added Services</h3>
                        <p>Do you have services you’d like to provide through mobile networks? Implement our glitch free operator billing technology and you are there, raking in income by providing digital services.</p>
                    </div>
                    <div className={style.fwayCon}>
                        <Image src={card} className={style.fwayImage} alt=''></Image>
                        <h3>Payment Integration</h3>
                        <p>Our API technology allows you integrate payments into USSD, IVR and even SMS so that your customers can make payments using mobile technology. Simple for your business and customers.</p>
                    </div>
                    <div className={style.fwayCon}>
                        <Image src={smartphone} className={style.fwayImage} alt=''></Image>
                        <h3>Payment via Recharge</h3>
                        <p>If you’d like to implement payment on your platform using mobile recharge cards, that’s our stuff too. We just want to make payments easier for your customers and help improve your revenue stream.</p>
                    </div>
                    <div className={style.fwayCon}>
                        <Image src={rotate} className={style.fwayImage} alt=''></Image>
                        <h3>Subscription Payments</h3>
                        <p>Audience can subscribe and pay recurrently for digital contents - Sport, RBT, Songs, Videos, Games etc either with USSD or SMS or even Voice (Interactive Voice Response).</p>
                    </div>
                </div>
            </section>
            <section className={style.testimonial}>
                <TeamTestimonial/>
            </section>
            <section className={style.blogPost}>
                <BlogPostLg/>
            </section>
            <section className={style.blc}>
                <BlackContact/>
            </section>
            <section className={style.case}>
                <h2>View Case studies on our clients solutions</h2>
                <div className='casegrid'>
                    <CaseCard color="#EEF7FF"/>
                    <CaseCard color="#FBEEEF"/>
                    <CaseCard color="#F8F4F7"/>
                    <CaseCard color="#FFE4F8"/>
                </div>
            </section>
            <TopContact/>
        </div>
        </>
    )
}