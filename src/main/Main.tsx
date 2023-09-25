import Banner from "./Banner";
import LCKD from "./LCKD";
import Puppies from "./Puppies";
import { useMediaQuery } from "react-responsive";
import PuppiesPuzzleGame from "./puzzleGame/PuppiesPuzzleGame";

const Main = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  const style = isPc ? mainPCStyle : mainMobileStyle

  return <div style={style}>
    <Banner />
    <LCKD />
    <Puppies />
    <PuppiesPuzzleGame />
  </div>
}

export default Main

const mainPCStyle = {
  width: '100%',
  maxWidth: '1980px',

}

const mainMobileStyle = {
  maxWidth: '100%',
}