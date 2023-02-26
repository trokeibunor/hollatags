import Head from "next/head"
import style from "@/styles/Blog.module.scss"
import Image from "next/image"
import Link from "next/link"

// images
import writer from "@/../public/blog_writer.png"
import writerTwo from "@/../public/writer_two.png"
import writerThree from "@/../public/writer_three.png"
import bgImageOne from "@/../public/blog_image_one.png"
import bgImagetwo from "@/../public/blog_image_two.png"
import bgNextOne from "@/../public/blog_next_one.png"
import bgNextTwo from "@/../public/blog_next_two.png"
import bgNextThree from "@/../public/blog_next_three.png"
// icons
import notif from "@/../public/icons/notification_icon.svg"

// components
import BlogPostCard from "@/components/BlogPostCard"
import BlogPostGridCard from "@/components/BlogPostGridCard"
import NewsLetter from "@/components/NewsLetter"

export default function Blog(){
    return (
        <>
            {/* Every text here is a placeholder */}
            <div className={style.container}>
                <h1 className={style.name}>
                    What is an SMS API? ....Sending SMS from Applications
                </h1>
                <p className={style.intro_text}>
                    You are thinking, there’s email, there are desktop notifications, why use SMS in this day and age? Well, SMS is still a winner for the following reasons
                </p>
                <div className={style.author_intro}>
                    <div className={style.author_details}>
                        <Image src={writer} alt=''></Image>
                        <div className={style.auth_talk}>
                            <p className={style.auth_name}>
                                Chidinma Howard
                            </p>
                            <small className={style.oth}>
                                March 20 . 8 min read
                            </small>
                        </div>
                    </div>
                    <Image src={notif} alt='' className={style.notif_image}></Image>
                </div>
                <Image className={style.bg_image} src={bgImageOne}  alt=""></Image>
                <p>Now that communication and interaction have proven to be the vehicle that will drive our civilization to the next level (just look at the internet), communication has to go beyond human interaction. Computers, the miracle of our age, also need to talk to each other.</p>
                <p>A lot of computer programs rely on other independent programs to complete their processes. This is one reason why we have API (Application Programming Interface). It allows one program to use the functions of another program. This miracle of communication is what we use at HollaTags to give your applications SMS sending capabilities.</p>
                <p>Our SMS API allows your application to send messages via our SMS gateway. You can send automated bulk messages from your platform through the HollaTags SMS gateway with our robust API. One amazing thing about our SMS API is that you can interact with it in almost any programming language you are working with- PHP, C#, Python, C++, Javascript and the list goes on.</p>
                <blockquote>
                just about anything that has to do with sending text messages using an application
                </blockquote>
                <p>The use cases for our SMS API are quite numerous. They range from sending sales and promo notifications and receipts for eCommerce businesses, to sending alerts for financial service customers and sending results and pupil updates for schools. The event invites and updates, one time passwords and security verification messages can also be sent using the SMS API. You can think of just about anything that has to do with sending text messages using an application, and our SMS API will fix you.</p>
                <Image src={bgImagetwo} alt="" className={style.bg_image}></Image>
                <h3>Amazing open rates with even wider reach</h3>
                <p>Almost every sent text message is read. This fact is what makes SMS the best way to communicate. Everyone reads their text. Ignore emails, block desktop notifications, avoid calls but you still read your SMS. Figures floating around range from 90 to 98% open rates for SMS compared to emails with less than 30% open rates.</p>
                <p>In Nigeria, a sizeable chunk of phone users do not use internet-enabled devices. There are also those who do have internet enabled devices but do not have constant access to the internet. SMS can reach anyone with a mobile phone, whatever the kind of phone, with or without internet.</p>
                <p>You can speak to your customers anywhere in the world using SMS over our Tier 1 direct connections. Our enterprise SMS API gives you the power to reach your customers where they are and when you want. With HollaTags, you get high-performance enterprise SMS technology with both ShortCode and LongCode capabilities.</p>
                {/* other articles */}
                <div className={style.otherArticles}>
                    <h6>UP NEXT</h6>
                    <hr />
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
            </div>
            <div className={style.btm_con}>
                <div className={style.btn_con_intro}>
                    <h3>THIS WEEKS TOP READ</h3>
                    <Link href=''>See all articles</Link>
                </div>
                <hr />
                <div className={style.btm_con_top}>
                    <div className="blogPostGrid">
                        <BlogPostGridCard
                            authImage={writer}
                            bpgImage={bgNextOne}
                            bpdImage={writer}
                            title="Andino’s Payments Challenge: Charge Directly from Phone Balance"
                            author="Chidinma Howard"
                        />
                        <BlogPostGridCard
                            authImage={writerThree}
                            bpgImage={bgNextThree}
                            bpdImage={writer}
                            title="A Truly Cashless Nigeria"
                            author="Russ Okafor"
                        />
                        <BlogPostGridCard
                            authImage={writerTwo}
                            bpgImage={bgNextTwo}
                            bpdImage={writer}
                            title="2 Way SMS for Interactive Marketing and Customer Engagement"
                            author="Jason Bamidele"
                        />
                    </div>
                </div>
            </div>
            <NewsLetter/>
        </>
    )
}