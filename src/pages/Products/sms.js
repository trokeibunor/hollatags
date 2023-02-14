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
// Images
import HeroImg from '@/../public/sms_hero_image.png';
import ComposeImg from '@/../public/compose_img.png';
import smsbrands from '@/../public/sms_brands.png';
// Icons
import arrowRight from '@/../public/icons/arrow_circle_right.svg';

export default function Sms(){
    return (
        <>
            <Head>
                <title>HollaTags -- Product SMS</title>
            </Head>
            <div className={style.container}>
                <section className={style.hero}>
                    <div className={style.textSection}>
                        <h1>Long or shortcodes, promotional or corporate get the best delivery rates with Tango SMS</h1>
                        <p>Our high-performance enterprise SMS services are Tier1 and our delivery rate is untethered. Oh yes, we have shortcode and longcode alternatives.</p>
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
            </div>
        </>
    )
}