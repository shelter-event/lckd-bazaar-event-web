import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePageCounterStore } from "../zustand/state/PageCounterState";
import Banner from "./Banner";
import LCKD from "./LCKD";
import PuppiesMatchingGame from "./matchingGame/PuppiesMatchingGame";
import Puppies from "./puppies/Puppies";

const Main = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });
  const style = isPc ? mainPCStyle : mainMobileStyle
  const [init, setInit] = useState(false)

  const { getVisitPageCounter, visitPage } = usePageCounterStore()

  useEffect(() => {
    if (init) return
    setInit(true)
    visitPage({ page: 'Main' })
    getVisitPageCounter({ page: 'Main' })

    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [])

  return <div style={style}>
    <Banner />
    <LCKD />
    {isPc ? <></> : <div style={{ height: '2px', background: '#f5f5f5' }}>&nbsp;</div>}
    <Puppies />
    <div style={{ height: '2px', background: '#f5f5f5' }}>&nbsp;</div>
    <PuppiesMatchingGame />
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