import Image from "next/image"
import notif from "@/../public/icons/notification_icon.svg"
export default function BlogPostGridCard(props){
    return (
        <>
            <div className="bpgcCont">
                <Image src={props.bpgImage} alt="" className="bpgImage"></Image>
                <h5 className="title">{props.title}</h5>
                <div className="auth">
                    <div className="auth_content">
                        <Image src={props.authImage} className="authImage" alt=''></Image>
                        <div className="auth_con">
                            <h5>{props.author}</h5>
                            <p className="bpDet">January 22 . 15 min read</p>
                        </div>
                    </div>
                    <Image className="notif_bell" src={notif} alt=""></Image>
                </div>
            </div>
        </>
    )
}