import style from '@/styles/carrier.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
// components
import TopContact from '@/components/TopContact';
export default function customer(){
    return(
        <>
        <Head>
            <title>
                HollaTags -- Customer Landing
            </title>
        </Head>
        <div className={style.container}>
            <section className={style.hero}>

            </section>
            <TopContact/>
        </div>
        </>
    )
}