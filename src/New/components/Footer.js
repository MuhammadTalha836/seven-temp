import React from 'react'
import "../style/footer.scss";
import { FaFacebookF, FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa"
import CookieConsent from "react-cookie-consent";
import { Link, NavLink } from 'react-router-dom';
// import "../style/privacy.scss";
import "../style/terms.scss"

export default function Footer() {
    return (
        <div className="container-fluid py-4 bg-info footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-white m-0 mt-3 footer-paragraph">
                        <div className=" ">
                            <div className="row d-flex justify-content-between">

                                <div className="col">

                                    <p className='right'>All Right Reserved</p>
                                </div>
                                <div className="col">

                                    <p data-bs-toggle="modal" data-bs-target="#privacy" style={{ cursor: "pointer" }} className="privacy-policy">Privacy Policy</p>
                                </div>
                                <div className="col">

                                    <p data-bs-toggle="modal" data-bs-target="#terms" style={{ cursor: "pointer" }} className="terms-condition">Terms and Condition</p>
                                </div>


{/* Privacy policy Modal  */}
                                <div class="modal fade" id="privacy" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered modal-xl">
                                        <div class="modal-content min-vh-100 py-5">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Privacy Policy</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col text-dark">
                                                            <h5 className='fw-bold'>Your privacy is important to us</h5>
        <p >It is Richdash.com’s policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to Richdash.com (hereinafter, “us”, “we”, or “Richdash.com”). We respect your privacy and are committed to protecting personally identifiable information you may provide us through the Website. We have adopted this privacy policy (“Privacy Policy”) to explain what information may be collected on our Website, how we use this information, and under what circumstances we may disclose the information to third parties. This Privacy Policy applies only to information we collect through the Website and does not apply to our collection of information from other sources.</p>
        <p >This Privacy Policy, together with the Terms of service posted on our Website, set forth the general rules and policies governing your use of our Website. Depending on your activities when visiting our Website, you may be required to agree to additional terms of service.</p>
                                                        </div>
                                                    </div>

<div className="row">
    <div className="col text-dark">
        <h5 className='fw-bold'>Contents</h5>
        <p>Click below to jump to any section of this privacy policy</p>
        <ol className='text-dark'>
            <li >1. <span className='fw-bold'>Website Visitors</span></li>
            <li >2. <span className='fw-bold'>Aggregated Statistics</span></li>
            <li >3. <span className='fw-bold'>Personally-Identifying Information</span></li>
            <li >4. <span className='fw-bold'>Security</span></li>
            <li >5. <span className='fw-bold'>Advertisements</span></li>
            <li >6. <span className='fw-bold'>Richdash.com uses Google AdWords for remarketing</span></li>
            <li >7. <span className='fw-bold'>Links To External Sites</span></li>
            <li >8. <span className='fw-bold'>Protection of Certain Personally-Identifying Information</span></li>
            <li >9. <span className='fw-bold'>Affiliate Disclosure</span></li>
            <li >10. <span className='fw-bold'>Cookies</span></li>
            <li >11. <span className='fw-bold'>E-commerce</span></li>
            <li >12. <span className='fw-bold'>Business Transfers</span></li>

            <li >13. <span className='fw-bold'>Privacy Policy Changes</span></li>
            <li >14. <span className='fw-bold'>Contact Information & Credit</span></li>

        </ol>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h5 className='fw-bold'>1. Website Visitors</h5>
        <p>Like most website operators, Richdash.com collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. Richdash.com’s purpose in collecting non-personally identifying information is to better understand how Richdash.com’s visitors use its website. From time to time, Richdash.com may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.

Richdash.com also collects potentially personally-identifying information like Internet Protocol (IP) addresses for logged in users and for users leaving comments on http://Richdash.com blog posts. Richdash.com only discloses logged in user and commenter IP addresses under the same circumstances that it uses and discloses personally-identifying information as described below.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h5 className="fw-bold">
        2. Aggregated Statistics
        </h5>

        <p>Richdash.com may collect statistics about the behavior of visitors to its website. Richdash.com may display this information publicly or provide it to others. However, Richdash.com does not disclose your personally-identifying information.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>3. Personally-Identifying Information</h4>
        <p>Certain visitors to Richdash.com’s websites choose to interact with Richdash.com in ways that require Richdash.com to gather personally-identifying information. The amount and type of information that Richdash.com gathers depends on the nature of the interaction. For example, we ask visitors who leave a comment at http://Richdash.com to provide a username and email address.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>4. Security</h4>
        <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>5. Advertisements</h4>
        <p>Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Richdash.com and does not cover the use of cookies by any advertisers.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>6. Links To External Sites</h4>
        <p>Our Service may contain links to external sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and terms of service of every site you visit.

We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites, products or services.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>7. Richdash.com uses Google AdWords for remarketing</h4>
        <p>Richdash.com uses the remarketing services to advertise on third party websites (including Google) to previous visitors to our site. It could mean that we advertise to previous visitors who haven’t completed a task on our site, for example using the contact form to make an enquiry. This could be in the form of an advertisement on the Google search results page, or a site in the Google Display Network. Third-party vendors, including Google, use cookies to serve ads based on someone’s past visits. Of course, any data collected will be used in accordance with our own privacy policy and Google’s privacy policy.

You can set preferences for how Google advertises to you using the Google Ad Preferences page, and if you want to you can opt out of interest-based advertising entirely by cookie settings or permanently using a browser plugin.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>8. Protection of Certain Personally-Identifying Information</h4>
        <p>Richdash.com discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that (i) need to know that information in order to process it on Richdash.com’s behalf or to provide services available at Richdash.com’s website, and (ii) that have agreed not to disclose it to others. Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using Richdash.com’s website, you consent to the transfer of such information to them. Richdash.com will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, Richdash.com discloses potentially personally-identifying and personally-identifying information only in response to a subpoena, court order or other governmental request, or when Richdash.com believes in good faith that disclosure is reasonably necessary to protect the property or rights of Richdash.com, third parties or the public at large.</p>
        <p>If you are a registered user of http://Richdash.com and have supplied your email address, Richdash.com may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with Richdash.com and our products. We primarily use our blog to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. Richdash.com takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>9. Affiliate Disclosure</h4>
        <p>This site uses affiliate links and does earn a commission from certain links. This does not affect your purchases or the price you may pay.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>10. Cookies</h4>
        <p>To enrich and perfect your online experience, Richdash.com uses “Cookies”, similar technologies and services provided by others to display personalized content, appropriate advertising and store your preferences on your computer.

A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Richdash.com uses cookies to help Richdash.com identify and track visitors, their usage of http://Richdash.com, and their website access preferences. Richdash.com visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Richdash.com’s websites, with the drawback that certain features of Richdash.com’s websites may not function properly without the aid of cookies.

By continuing to navigate our website without changing your cookie settings, you hereby acknowledge and agree to Richdash.com’s use of cookies.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>11. E-commerce</h4>
        <p>Those who engage in transactions with Richdash.com – by purchasing Richdash.com’s services or products, are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, Richdash.com collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with Richdash.com. Richdash.com does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>12. Business Transfers</h4>
        <p>If Richdash.com, or substantially all of its assets, were acquired, or in the unlikely event that Richdash.com goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of Richdash.com may continue to use your personal information as set forth in this policy.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>13. Privacy Policy Changes
</h4>
        <p>Although most changes are likely to be minor, Richdash.com may change its Privacy Policy from time to time, and in Richdash.com’s sole discretion. Richdash.com encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.

Back to table of contents</p>
    </div>
</div>

<div className="row">
    <div className="col text-dark">
        <h4 className='fw-bold'>14. Contact Information & Credit</h4>
        <p>This privacy policy was created at  
            <span style={{color:"greenyellow",cursor:"pointer"}} className="ms-2">

             privacyterms.io privacy policy generator
            </span>
            . If you have any questions about our Privacy Policy, please contact us via email or phone.

Back to table of contents</p>
    </div>
</div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Terms and Condition Modal */}
                                <div class="modal fade" id="terms" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered modal-xl">
                                        <div class="modal-content min-vh-100 py-5">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Terms And Condition</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <div className="container terms">


                                                    <div className="row">
                                                        <div className="col">
                                                            <h1 className="text-white text-center py-3">Terms And Condition</h1>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-5">
                                                        <div className="col term__back">
                                                            <p>Terms And Condition coming soon</p>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mt-3 social-section d-flex justify-content-center align-items-center">
                        <div>

                        <FaFacebookF className="icon" />
                        <FaInstagram className="icon" />
                        <FaTelegram className="icon" />
                        <FaGoogle className="icon" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                        <CookieConsent
                            location="bottom"
                            buttonText="Sure man!!"
                            cookieName="myAwesomeCookieName2"
                            style={{ background: "#2B373B" }}
                            buttonStyle={{ color: "#000", fontSize: "13px", backgroundColor: "#fff" }}
                            expires={150}
                            debug={true}
                        >
                            This website uses cookies to enhance the user experience.{" "}
                            <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
                        </CookieConsent>
                    </div>
                </div>
            </div>
        </div>
    )
}
