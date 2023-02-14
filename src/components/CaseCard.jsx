import Image from "next/image";
import Link from "next/link";

// icons
import MircosoftIcon from "@/../public/icons/microsoft_logo.png";
import linkArrow from "@/../public/icons/link_arrow_black.svg"
// Images
import ttImg from "@/../public/ttImg.png"
export default function CaseCard(props){
    return (
        <>
            <div className="casecard" style={{backgroundColor: props.color}}>
                <div className="intro">
                    <Image src={ttImg} alt="user_img" width={40} height={40} className="ccImg"/>
                    <div className="name_intro">
                        <h5>Jamie Adetigba</h5>
                        <p>Senior DevOps Engineer, Microsoft</p>
                    </div>
                </div>
                <p className="content">
                    &quot;We needed consistency, a network that can deliver 99% of the time and we found that with HollaTags they&apos;ve really helped of keep losses in engagement to a minimum in turn profit has risen.&quot;
                </p>
                <hr />
                <div className="ccfooter">
                    <Image src={MircosoftIcon} alt=""/>
                    <Link href="">
                        View Case Study
                        <Image src={linkArrow} alt=""/>
                    </Link>
                </div>
            </div>
        </>      
    )
}