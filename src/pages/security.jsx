import Image from 'next/image';
import Head from 'next/head';
import style from '../styles/security.module.scss'
// components
import TopContact from '@/components/TopContact';
import CaseCard from '@/components/CaseCard';
// Images
import secHero from "@/../public/security_hero.png"
import teams from '../../public/trustedteams.png';
// Icons
import twoWay from '../../public/icons/two_way_arrow.svg';
import openRate from '../../public/icons/open_rates.svg';
import personal from '../../public/icons/sender.svg';
import flash from '../../public/icons/flash.svg';
import shield from '../../public/icons/shield.svg';
import circleCheck from '../../public/icons/check_circle.svg';

export default function Security(){
    return (
        <>
            <Head>
                <title>Security</title>
            </Head>
            <div className={style.container}>
                <div className={style.sec_hero}>
                    <div className={style.text_section}>
                        <h1>Infastructure and Security</h1>
                        <p>At HollaTags, security is a big deal. We want our clients to be at zero risk while using our platforms and services, we want them to be able to assure their audience of security too</p>
                    </div>
                    <Image src={secHero} className={style.hero_img} alt=""/>
                </div>
                <div className={style.social_proof}>
                    <p>TRUSTED BY</p>
                    <Image src={teams} alt='' />
                </div>
                <section className={style.info}>
                    <div className={style.info_content}>
                        <div className={style.info_group}>
                            <Image src={twoWay} alt="" />
                            <p id={style.intro}>Two-way SMS</p>
                            <p id={style.content}>
                                We employ best practices when it comes to security and we apply stern policies to ensure safe usage of our services.
                            </p>
                        </div>
                        <div className={style.info_group}>
                        <Image src={openRate} alt="" />
                            <p id={style.intro}>Open Rates</p>
                            <p id={style.content}>
                            Strict privacy policies that ensure that customer data is handled by only a select few with strict regards for the client’s privacy.
                            </p>
                        </div>
                        <div className={style.info_group}>
                            <Image src={personal} alt="" />
                            <p id={style.intro}>Personal ID Sender</p>
                            <p id={style.content}>
                            Continuous testing, review and improvement of all our systems (Platform / APIs) to prevent hacks and security breaches.
                            </p>
                        </div>
                        <div className={style.info_group}>
                            <Image src={flash} alt="" />
                            <p id={style.intro}>Flash and unicode Support</p>
                            <p id={style.content}>
                            At HollaTags We only use the best encryptions and authentication on all our services and applications.
                            </p>
                        </div>
                        <div className={style.info_group}>
                            <Image src={shield} alt="" />
                            <p id={style.intro}>Security</p>
                            <p id={style.content}>
                            We also ensure regulatory compliance with all existing laws, rules, regulations, and guidelines.
                            </p>
                        </div>
                        <div className={style.info_group}>
                            <Image src={circleCheck} alt="" />
                            <p id={style.intro}>Regulatory Compliance</p>
                            <p id={style.content}>
                            Our systems are protected with rock-solid firewalls to restrict unwanted access both internally and externally
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className={style.legal}>
                <div className={style.legal_con}>
                    <h2>Legal Compliance and Regulation</h2>
                    <p>HollaTags is duly licensed by the Nigerian Communication Commission (NCC) to provide SMS, IVR and USSD based services with Telecommunication companies in Nigeria. We are very transparent with our clients and our systems have been designed to ensure accountability.</p>
                    <p>Our entire infrastructure is hosted Tier III Datacenter facilities that operates in full compliance to the international best practice standard for IT Service Management - the ISO20000 Standard. Our hosting provider&apos;s data centre facility and business is certified to ISO 27001, the global information security quality standard.</p>
                </div>
            </div>
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
        </>
    )
}