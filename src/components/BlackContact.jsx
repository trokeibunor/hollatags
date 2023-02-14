import Link from "next/link";
import brands from "@/../public/Brands.png";
import Image from "next/image";

export default function BlackContact(){
    return (
        <>
            <div className="blackcon">
                <div className="bgc">
                    <div className="text_sec">
                        <h1>
                            Reach your Audience with HollaTags
                        </h1>
                        <p>We&apos;re taking digital experiences up a notch! building the APIs and platforms to securely interface with your audience and drive connectivity.</p>
                        <Link href=''>Get Started</Link>
                    </div>
                    <Image className="bimg" src={brands} alt=""/>
                </div>
            </div>
        </>
    )
}