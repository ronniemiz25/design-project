import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickPost from './SlickPost';

const slickDatas = [
    {
        pic: 'public/images/sliderpic-1.webp',
        title: 'Moments in the Metaverse',
        tags: ['AI', 'AI design', 'AI tools']

    },
    {
        pic: 'public/images/sliderpic-2.webp',
        title: 'Symbiosis Ai in the wild',
        tags: ['AI', 'AI design', 'AI tools']
    }
]

const slickSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true, // ✅ Enable navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows: true // ✅ also enable arrows for this breakpoint
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    };

    return (
        <>
            <div className="sectiongap">
                <div className="container">
                    <div className="marquee_text">
                        <marquee behavior="smooth" direction="left">
                            <h2>Latest works Latest works Latest works Latest works</h2>
                        </marquee>
                    </div>

                    <Slider {...settings}>
                        {slickDatas.map((item, id) => <SlickPost key={id} item={item} />)}
                    </Slider>
                </div>
            </div>


        </>
    )
}

export default slickSlider