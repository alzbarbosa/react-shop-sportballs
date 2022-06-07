import { FaBaseballBall, FaBasketballBall, FaFootballBall, FaVolleyballBall } from "react-icons/fa"
import { IoFootball, IoTennisballSharp } from "react-icons/io5"
import { TitleHero, IconsContainer } from "./hero-title.styles"

const HeroTitle = () => {
    return (
        <>
        <TitleHero>Buy the best ball to play your favorite sport</TitleHero>
        <IconsContainer>
        <FaBaseballBall/><FaBasketballBall/><FaFootballBall/><FaVolleyballBall/><IoFootball/><IoTennisballSharp/>
        </IconsContainer>
        </>
    )
}

export default HeroTitle