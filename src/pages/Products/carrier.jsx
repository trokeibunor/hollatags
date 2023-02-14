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

export default function ussd(){
    return (
        <>
            <Head>
                HollaTags -- Product Carrier Billing
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