import InnerBanner from "./InnerBanner"

const Aboutpage = () => {


    return (
        <>
            <div className="about_div">
                <InnerBanner />

                <div className="sectiongap lightbg">
                    <div className="about_intro">
                        <div className="container">
                            <h6>WHO WE ARE</h6>
                            <h4>
                                We’re more than just a design agency — we’re your creative partner.
                                We specialize in turning ideas into captivating visual experiences that tell your story, engage your audience,
                                and elevate your brand.
                            </h4>
                            <p>
                                Our team thrives on collaboration, ensuring that every project reflects your unique vision and resonates with your target market.
                                Together, we can craft innovative solutions that not only meet your needs but also inspire and delight.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="marquee_text">
                        <marquee behavior="smooth" direction="left">
                            <h2>Webdev . Support . Marketing</h2>
                        </marquee>
                    </div>
                </div>

                <div className="sectiongap">
                    <div className="alt_div">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <img src="/images/aboutpic-one.webp" className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-4">
                                        <h3>Bold & Creative</h3>
                                        <p>We specialize in creating, developing, and managing a brand’s identity to help businesses stand out in the marketplace and connect with their target audience.</p>
                                        <ul>
                                            <li>At our agency we turn ideas into striking, strategic visuals that spark curiosity, build trust, and drive results.</li>
                                            <li>From branding and web design to digital campaigns and beyond, we bring bold concepts to life with precision and purpose.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="p-4">
                                        <h3>Professional & Clear</h3>
                                        <p>We specialize in creating, developing, and managing a brand’s identity to help businesses stand out in the marketplace and connect with their target audience.</p>
                                        <ul>
                                            <li>At our agency we turn ideas into striking, strategic visuals that spark curiosity, build trust, and drive results.</li>
                                            <li>From branding and web design to digital campaigns and beyond, we bring bold concepts to life with precision and purpose.</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <img src="/images/aboutpic-two.webp" className="img-fluid" alt="" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="sectiongap">
                    <div className="services">
                        <div className="container">
                            <div className="row g-0">
                                <div className="col-lg-4 bordcol">
                                    <div className="serv_col">
                                        <img src="/images/design.webp" alt="" className="img-fluid" />
                                        <h3>Design</h3>
                                        <p>We provide design services to enhance brand identity and help businesses engage their audience.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 bordcol">
                                    <div className="serv_col">
                                        <img src="/images/webdev.webp" alt="" className="img-fluid" />
                                        <h3>WebDev</h3>
                                        <p>We provide web development services to enhance your brand's online presence and connect with your audience.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 bordcol">
                                    <div className="serv_col">
                                        <img src="/images/support.webp" alt="" className="img-fluid" />
                                        <h3>Support</h3>
                                        <p>We provide support services to enhance brand identity and help businesses engage with their audience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutpage