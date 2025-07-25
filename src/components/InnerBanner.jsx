import { useLocation } from "react-router-dom"

const InnerBanner = () => {

    const location = useLocation()

    const bannerImages = {
        '/about': 'public/images/aboutus-banner.webp',
        '/posts': 'public/images/posts-banner.webp',
        '/contact': 'public/images/contact-banner.webp',
    };

    const currentpath = location.pathname
    const innerbanner = bannerImages[currentpath] || 'NO BANNER!';


    return (
        <>
            <div className="inner_banner">
                <img src={innerbanner} className="img-fluid" alt="Page Banner" />
            </div>

        </>
    )
}

export default InnerBanner