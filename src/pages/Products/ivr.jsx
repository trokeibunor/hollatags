import style from '@/styles/sms.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// components
import Grider from '@/components/Grider';
import DiGrid from '@/components/DiGrid';
import TeamTestimonial from '@/components/TeamTestimonial';
import BlogPostLg from '@/components/BlogPostLg';
import BlackContact from '@/components/BlackContact';
import CaseCard from '@/components/CaseCard';
import TopContact from '@/components/TopContact';
// Images
import HeroImg from '@/../public/ivr_hero_img.png';
import ComposeImg from '@/../public/compose_ivr_img.png';
import smsbrands from '@/../public/sms_brands.png';

// Icons
import arrowRight from '@/../public/icons/arrow_circle_right.svg';

export default function ivr(){
    return (
        <>
            <Head>
                <title>HollaTags -- Product IVR</title>
            </Head>
            <div className={style.container}>
            <section className={style.hero}>
                <div className={style.textSection}>
                    <h1>Increased accessibility and automation for your business with Tango Interactive Voice Response.</h1>
                    <p>Create call logic for high-quality voice applications,	Make outbound calls and receive calls on dedicated local numbers and eliminate the hassle of dealing with service carriers.</p>
                    <div className={style.cta_row}>
                        <Link href="" id="firstLink">
                            Get Started 
                            <Image src={arrowRight} alt="" 
                        />
                        </Link>
                        <Link href="">Speak to Sales</Link>
                    </div>
                </div>
                <Image className={style.heroImg} src={HeroImg} alt=""></Image>
            </section>
            <section className={style.composer}>
                <h1 className={style.intro}>Compose, schedule, and improve your customer experience with SMS from HollaTags.</h1>
                <div className={style.grid_holder}>
                    <Grider/>
                </div>
                <div className={style.grid_tab}>
                    <Image src={ComposeImg} className={style.img} alt=''/>
                </div>
                <div className={style.cover_tab}>
                    <div>
                    <p>Join these trusted brands and keep your messages flowing with HollaTags</p>
                    <Image className={style.sms_brand} src={smsbrands} alt=''/>
                    </div>
                </div>
            </section>
            <section className={style.diGrider}>
                    <DiGrid/>
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