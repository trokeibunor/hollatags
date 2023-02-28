import Head from "next/head"
import Link from "next/link"
import style from "../styles/Blog.module.scss"
import Image from "next/image"
// Images
import writer from "@/../public/blog_writer.png"
import writerTwo from "@/../public/writer_two.png"
import writerThree from "@/../public/writer_three.png"
import bgNextOne from "@/../public/blog_next_one.png"
import bgNextTwo from "@/../public/blog_next_two.png"
import bgNextThree from "@/../public/blog_next_three.png"
import featImg from "@/../public/featured_image.png"
// Icons
import togAsc from "@/../public/icons/tog_asc.svg"
// Components
import BlogPostCard from "@/components/BlogPostCard"
import BlogPostGridCard from "@/components/BlogPostGridCard"
import NewsLetter from "@/components/NewsLetter"


export default function Blog(){
    return (
        <>
            <Head>
                <title>HollaTags -- Blog </title>
            </Head>
            <div className={style.container}>
                <div className={style.featured}>
                    <h3 id={style.featured}>Featured</h3>
                    <Image src={featImg} className={style.featured_image} alt=""/>
                    <h2>A Truly Cashless Nigeria</h2>
                    <p>In Nigeria, mCASH by Nigerian Inter-Bank Settlement System (NIBSS) is trying to fulfil the micropayments niche using USSD. mCash is described as being “designed to facilitate low-value retail payments, grow e-payments by providing accessible electronic channels to a wider range of users and to further enhance financial inclusion in Nigeria.” Surprisingly, however, mCASH is not as widely accepted as one would expect it to be, considering the advantages, by both merchants and buyers.</p>
                    <div className="bpcCont">
                        <div className="bpAuth">
                        <Image src={writerThree} className="bpAuthImg" alt=""></Image>
                        <div className="bpAuth_detail">
                            <h3>Russ Okafor</h3>
                            <p className="bpDet">January 22 . 15 min read</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className={style.topReads}>
                    <h5 id={style.intro}>Top Reads</h5>
                    <BlogPostCard
                        authImage={writer}
                        author="Chidinma Howard"
                        articleName="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                        artImage={bgNextOne}
                    />
                    <BlogPostCard
                        authImage={writerTwo}
                        author="Jason Bamidele"
                        articleName="2 Way SMS for Interactive Marketing and Customer Engagement"
                        artImage={bgNextTwo}
                    />
                    <BlogPostCard
                        authImage={writerThree}
                        author="Russ Okafor"
                        articleName="A Truly Cashless Nigeria?"
                        artImage={bgNextThree}
                    />
                </div>
                <div className={style.toggler}>
                    <div className={style.topRow}>
                        <Image src={togAsc} id={style.tog_asc} alt=""/>
                        <p className={style.active}>Release Date</p>
                        <p>Read Time</p>
                    </div>
                    <div className="blogPostGrid">
                        <BlogPostGridCard
                            authImage={writer}
                            bpgImage={bgNextOne}
                            bpdImage={writer}
                            title="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                            author="Chidinma Howard"
                        />
                        <BlogPostGridCard
                            authImage={writerTwo}
                            bpgImage={bgNextTwo}
                            bpdImage={writer}
                            title="2 Way SMS for Interactive Marketing and Customer Engagement"
                            author="Jason Bamidele"
                        />
                        <BlogPostGridCard
                            authImage={writerThree}
                            bpgImage={bgNextThree}
                            bpdImage={writer}
                            title="A Truly Cashless Nigeria"
                            author="Russ Okafor"
                        />
                    </div>
                    <div className="blogPostGrid">
                        <BlogPostGridCard
                            authImage={writer}
                            bpgImage={bgNextOne}
                            bpdImage={writer}
                            title="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                            author="Chidinma Howard"
                        />
                        <BlogPostGridCard
                            authImage={writerTwo}
                            bpgImage={bgNextTwo}
                            bpdImage={writer}
                            title="2 Way SMS for Interactive Marketing and Customer Engagement"
                            author="Jason Bamidele"
                        />
                        <BlogPostGridCard
                            authImage={writerThree}
                            bpgImage={bgNextThree}
                            bpdImage={writer}
                            title="A Truly Cashless Nigeria"
                            author="Russ Okafor"
                        />
                    </div>
                    <div className="blogPostGrid">
                        <BlogPostGridCard
                            authImage={writer}
                            bpgImage={bgNextOne}
                            bpdImage={writer}
                            title="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                            author="Chidinma Howard"
                        />
                        <BlogPostGridCard
                            authImage={writerTwo}
                            bpgImage={bgNextTwo}
                            bpdImage={writer}
                            title="2 Way SMS for Interactive Marketing and Customer Engagement"
                            author="Jason Bamidele"
                        />
                        <BlogPostGridCard
                            authImage={writerThree}
                            bpgImage={bgNextThree}
                            bpdImage={writer}
                            title="A Truly Cashless Nigeria"
                            author="Russ Okafor"
                        />
                    </div>
                    <div className="blogPostGrid">
                        <BlogPostGridCard
                            authImage={writer}
                            bpgImage={bgNextOne}
                            bpdImage={writer}
                            title="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                            author="Chidinma Howard"
                        />
                        <BlogPostGridCard
                            authImage={writerTwo}
                            bpgImage={bgNextTwo}
                            bpdImage={writer}
                            title="2 Way SMS for Interactive Marketing and Customer Engagement"
                            author="Jason Bamidele"
                        />
                        <BlogPostGridCard
                            authImage={writerThree}
                            bpgImage={bgNextThree}
                            bpdImage={writer}
                            title="A Truly Cashless Nigeria"
                            author="Russ Okafor"
                        />
                    </div>
                </div>
            </div>
            <NewsLetter/>
        </>
    )
}