const IntroPage = () => {
    return (
        <>
            <div className="sectiongap">
                <div className="intro">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 overflow-hidden">
                                <div className="intro_col prime">
                                    <img src="/images/ai-solutions-bg.webp" alt="" className="img-fluid" />
                                    <div className="overlay">
                                        <h3>Elevate Your Brand with Next-Gen AI Solutions</h3>
                                        <p>We are passionate about delivering innovative solutions tailored to your unique goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="row g-4">
                                    <div className="col-lg-12 overflow-hidden">
                                        <div className="intro_col secondary">
                                            <img src="/images/successfull-projects-bg.webp" alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <h3>70+</h3>
                                                <p>Successful Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 overflow-hidden">
                                        <div className="intro_col ">
                                            <img src="/images/futuricstic-portrait-bg.webp" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 overflow-hidden">
                                        <div className="intro_col secondary">
                                            <img src="/images/years-experience-bg.webp" alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <h3>10+</h3>
                                                <p>Years of Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <img src="/images/design.webp" alt="" className="img-fluid"/>
                                    <h3>Design</h3>
                                    <p>We provide design services to enhance brand identity and help businesses engage their audience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 bordcol">
                                <div className="serv_col">
                                    <img src="/images/webdev.webp" alt="" className="img-fluid"/>
                                    <h3>WebDev</h3>
                                    <p>We provide web development services to enhance your brand's online presence and connect with your audience.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 bordcol">
                                <div className="serv_col">
                                    <img src="/images/support.webp" alt="" className="img-fluid"/>
                                    <h3>Support</h3>
                                    <p>We provide support services to enhance brand identity and help businesses engage with their audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroPage