import IntroPage from "./IntroPage"
import Offers from "./Offers"
import SlickSlider from "./SlickSlider"
import PostList from "./PostList"

const Homepage = () =>{

    return (
        <>
            <div className="maindiv">
                <IntroPage/>
                <SlickSlider/>
                <Offers/>
                <PostList/>
            </div>
        </>
    )
}

export default Homepage