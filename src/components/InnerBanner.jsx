import { useLocation } from "react-router-dom"

const InnerBanner = () => {

    const location = useLocation()

    const bannerImages = {
        '/about': 'src/assets/aboutus-banner.webp',
        '/posts': 'src/assets/posts-banner.webp',
        '/contact': 'src/assets/contact-banner.webp',
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