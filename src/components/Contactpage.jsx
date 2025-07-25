import InnerBanner from "./InnerBanner"
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Contactpage = () => {


    const handleOnSubmit = (e) => {

        e.preventDefault()
        console.log("Form submitted!");

    }

    return (
        <>
            <InnerBanner />

            <div className="sectiongap">
                <div className="contact_div">
                    <div className="container">
                        <div className="row g-0 align-items-center">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="contact_col">
                                            <h6>EMAIL ADDRESS</h6>
                                            <a href="#">abc@info.com</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact_col">
                                            <h6>CONTACT NUMBER:</h6>
                                            <a tel="#">91234567890</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact_col">
                                            <h6>ADDRESS:</h6>
                                            <p>27 Division St, New York, NY 10002, United States</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact_col">
                                            <h6>SOCIAL MEDIA:</h6>
                                            <FaFacebookF /> <BsTwitterX /> <FaInstagram /> <FaLinkedin />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-6 bg_light">
                                <form onSubmit={(e) => handleOnSubmit(e)}>
                                    <input type="text" name="" id="" className="form-control" placeholder="Name*" />
                                    <input type="email" name="" id="" className="form-control" placeholder="Email*" />
                                    <textarea name="" id="" className="form-control" placeholder="Message*"></textarea>
                                    <input type="submit" className="btn btn-dark rounded-1" value="SUBMIT" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="sectiiongap">
                <div className="container">
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0672047182743!2d88.35892587529841!3d22.50166157954234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0270d861b6d22b%3A0xee3d107a198d3cdf!2sSouth%20City%20Mall!5e0!3m2!1sen!2sin!4v1751376644737!5m2!1sen!2sin" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contactpage