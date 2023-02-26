// Images
import Image from "next/image"

export default function BlogPostCard(props){
    return (
        <>
            <div className="bpcCont">
                <div className="bpAuth">
                    <Image src={props.authImage} className="bpAuthImg" alt=""></Image>
                    <div className="bpAuth_detail">
                        <h3>{props.author}</h3>
                        <p className="bpDet">January 22 . 15 min read</p>
                        <h3 className="bpdesc">{props.articleName}</h3>
                    </div>
                </div>

                <Image src={props.artImage} className="articleImage" alt="" ></Image>
            </div>
        </>
    )
}