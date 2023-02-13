import Image from "next/image";
// icons
import microsoft from "@/../public/icons/microsoft_logo.png"
import playCircle from "@/../public/icons/play-circle.png"
// Images
import ttImg from "@/../public/ttImg.png"
// the hover play is a placeholder

export default function TeamTestimonial(){
    return (
        <>
            <div className="tmts">
                <h2 className="intro">Trusted by teams that value connections</h2>
                <p className="sub_text">See how product and engineering teams are using Tango to stay connected and create business opportunities</p>
                <div className="tmts_content">
                    <p className="rtarrow">&#8249;</p>
                    <div className="contentCard">
                        <div className="vid_sect">
                            <Image src={ttImg} className="ttImg" alt=""/>
                            <Image src={playCircle} className="play" alt=""/>
                        </div>
                        <div className="text_sect">
                            <div className="text_div">
                                <Image src={microsoft} className="cpLogo" alt=""/>
                                <p className="testimonial">
                                    “Our team has grown from 250 people to over 700 in the last year, across different officesHollaTags supports our fast growth by giving us a structured place to route people when they have questions. We now have a clear approach to knowledge documentation, distribution and maintenance HollaTags supports our fast growth by giving us a platform for success.”
                                </p>
                            </div>
                            <div className="people">
                                <h5 className="name">Jared Ukuama,</h5>
                                <p className="position">Senior DevOps Engineer, Microsoft</p>
                            </div>
                        </div>
                    </div>
                    <p className="ltarrow">&#8250;</p>
                </div>
                <div className="indicator">
                    <div className="indicators"></div>
                    <div className="indicators"></div>
                    <div className="indicators active"></div>
                    <div className="indicators"></div>
                    <div className="indicators"></div>
                    <div className="indicators"></div>
                    <div className="indicators"></div>
                </div>
            </div>
        </>
    )
}