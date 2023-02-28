import Head from "next/head"
import s from "../styles/Terms.module.scss"
// icons


export default function Terms(){
    return (
        <>
            <Head>
                <title>HollaTags -- Terms and Condition</title>
            </Head>
            <div className={s.container}>
                <h2>Terms of Service</h2>
                <div className={s.lang_form}>
                    <small>Select Language</small>
                    <select>
                        <option value="English_UK">English Uk</option>
                    </select>
                </div>
                <div className={s.user_help}>
                    <p>Last Updated: 12/03/2019</p>
                    <a href="#">Download terms of service</a>
                </div>
                <h3 className={s.intro_talk}>Scope of Service Agreement</h3>
                <h3 className={s.intro_talk}>The customer agrees with the terms specified in this contract. The contract is deemed established as soon as you have received the required username and password for the services provided by HollaTags Ltd.</h3>
                <div className={s.content}>
                    <h3>1 Usage of the SMS Services at HollaTags Ltd</h3>
                    <p>a  Authorization and Authentication After the customer has completed all registration requirements, a username and password will be disclose to customer either directly from the system or by our support staff. This login information serves as identification of the customer to HollaTags messaging platforms and APIs.</p>
                    <p>The customer agrees that all activities which can be traced to his username and password are deemed as having been performed by the customer himself and are legally binding for him.</p>
                    <p>b  Risks The customer agrees that, by definition, access to the Internet, the GSM network and other communication media is associated with risks concerning authentication, data security, privacy, availability of services, reliability of transmission etc. The customer agrees to bear full and exclusively responsibility arising from such risks and consequences of the customer’s usage of SMS Services by HollaTags messaging platforms and APIs..</p>
                    <p>c  SMS Transmission</p>
                    <p>i  DeliveryThe customer acknowledges that HollaTags Ltd delivers SMS messages via major telecommunications companies and mobile network providers and can therefore only influence the delivery with respect to transmission of SMS messages within the technical constraints imposed by the providers.</p>
                    <p>SMS messages submitted via  HollaTags messaging platforms and APIs will be transferred to the addressed mobile recipients within seconds to minutes, provided that the recipient’s phone is switched on and located in an area covered by his subscribed mobile network provider. The customer acknowledges that, depending on the recipient’s mobile provider service, it may not be possible to transmit the SMS message to the recipient successfully, particularly if the provider does not support SMS delivery at all.</p>
                    <p>ii  Large Volume TransmissionThe customer acknowledges that transmission of large SMS amounts may be subject to restrictions and delays on the part of the mobile network providers affected.</p>
                    <p>iii  Traffic TypeThe customers accept only to send mobile terminating messages to recipients that have acknowledged receiving it from customer. Traffic types allowed by this contract have to be: clean bulk (opt-in), streaming and person 2 person traffic. In case of any problems or penalty that can affect HollaTags Ltd, regarding termination to mobile subscribers that don’t desire to receive messages, all will be passed to the Customer.</p>
                </div>
                <div className={s.content}>
                    <h3>2 Customer’s Liability</h3>
                    <p>a SMS Content The customer assumes full responsibility for the content of SMS messages transmitted by himself or by a third party on his request.</p>
                    <p>The customer agrees to abide to all laws and regulations applicable to the content and intent of SMS messages transmitted by him. The customer assumes liability for all consequences and costs arising out of offences against such regulations.</p>
                    <p>The customer must ensure that his SMS delivery does not cause disturbance or harassment of a recipient or other third party. The customer agrees to refrain from sending SMS messages containing offensive, violent, pornographic, or discriminatory, or otherwise illegal content.</p>
                    <p>The customer is not permitted to send SMS messages to recipients who have made clear that they do not wish to receive SMS messages or advertisements via SMS.</p>
                    <p>The customer agrees to indemnify and hold HollaTags Ltd, and its subsidiaries, affiliates, officers, agents, co-branders or other partners, and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of Content the customer transmit through the Service, the customer’s use of the Service, the customer’s connection to the Service, the customer’s violation of the Terms of Usage, or the customer’s violation of any rights of another.</p>
                    <p>b Termination You agree that HollaTags Ltd , in its sole discretion, may terminate your password, account (or any part thereof) or use of the Service, and remove and discard any Content within the Service, for any reason, including, without limitation, for lack of use or if HollaTags Ltd believes that you have violated or acted inconsistently with the letter or spirit of the Terms of Usage.</p>
                    <p>You agree that any termination of your access to the Service under any provision of this Terms of Usage may be effected without prior notice if HollaTags Ltd believes that you have violated the Terms of Usage. And agree that HollaTags Ltd may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or the Service. Further, you agree that HollaTags Ltd shall not be liable to you or any third-party for any termination of your access to the Service.</p>
                </div>
                <div className={s.content}>
                    <h3>3 Financial and Accounting</h3>
                    <p>a  SMS Debits HollaTags messaging platforms and APIs debits transmitted SMS messages from the customer’s online account according to its transmission logs. These logs are deemed correct and valid even if the customer has objected to the correctness of the accounting records, but HollaTags Ltd investigations have not produced evidence of a technical problem or error.</p>
                    <p>b  Account Balance The SMS account balance is non-refundable and does not bear interest.-]-</p>
                </div>
            </div>
        </>
    )
}