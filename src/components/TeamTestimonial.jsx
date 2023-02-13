import Image from "next/image";
// icons
// Images
import ttImg from "@/../public/ttImg.png"

export default function TeamTestimonial(){
    return (
        <>
            <div className="tmts">
                <h2 className="intro">Trusted by teams that value connections</h2>
                <p className="sub_text">See how product and engineering teams are using Tango to stay connected and create business opportunities</p>
                <div className="tmts_content">
                    <Image alt="" className="rtarrow"/>
                    <div className="contentCard">
                        <div className="vid_sect">
                            <Image src={ttImg} alt=""/>
                        </div>
                        <div className="text_sect">
                            <p className="cpLogo">Microsoft</p>
                            <p className="testimonial">
                                “Our team has grown from 250 people to over 700 in the last year, across different officesHollaTags supports our fast growth by giving us a structured place to route people when they have questions. We now have a clear approach to knowledge documentation, distribution and maintenance HollaTags supports our fast growth by giving us a platform for success.”
                            </p>
                            <div className="people">
                                <p className="name">Jared Ukuama,</p>
                                <p className="position">Senior DevOps Engineer, Microsoft</p>
                            </div>
                        </div>
                    </div>
                    <Image alt="" className="ltarrow"/>
                </div>
            </div>
        </>
    )
}