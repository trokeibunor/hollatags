import Image from "next/image";
import Link from "next/link";

// images
import possibilities from "@/../public/possibilites_img.png";
import linkarrow from '@/../public/icons/link_arrow.svg'

export default function BlogPostLg(){
    return (
        <>
            <div className="blogLg">
                <Image src={possibilities} alt="" className="blg" />
                <h2>Explore the possibilities</h2>
                <p>
                    We provided Osusumobile with direct integration with the mobile networks to developed their USSD mobile banking, ensuring the seamless provision of mobile banking services and giving customers the ability to make deposits, check their account balance and withdraw money. We also fitted the platform with USSD and SMS services, in addition to the mobile web service, so that users would always have access to their mobile banking services, even on non-internet enabled devices.
                </p>
                <Link href="">
                    Link More
                    <Image src={linkarrow} alt=''/>
                </Link>
            </div>
        </>
    )
}