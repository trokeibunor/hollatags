import Image from "next/image"
// these images are used as placeholders
// also the texts are placeholders and would be passed as props
// images
import ltImage from "@/../public/sms_lt_img.png";
import rtImage from "@/../public/sms_rt_img.png";

export default function diGrid(){
    return (
        <>
            <div className="diGrid">
                <div className="ltGrid">
                    <Image className="digImg" src={ltImage} alt=""/>
                    <div className="text_content">
                        <h1>Transaction & Payment Notifications</h1>
                        <p>Our Tier1 connection means you can immediately  Send important financial and transaction notifications to customers. Prevent fraud and increase confidence in your service.</p>
                    </div>
                </div>
                <div className="rtGrid">
                <Image className="digImg" src={rtImage} alt=""/>
                    <div className="text_content">
                        <h1>Authentication via OTPs</h1>
                        <p>Keep your data even more secure with  two-factor signup and password recovery processes by sending unique OTPs via SMS.</p>
                    </div>
                </div>
            </div>
        </>
    )
}