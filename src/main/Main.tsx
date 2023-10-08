import Banner from "./Banner";
import LCKD from "./LCKD";
import { useMediaQuery } from "react-responsive";
import MatchingMatchingGame from "./matchingGame/PuppiesMatchingGame";
import Puppies from "./puppies/Puppies";
import { usePageCounterStore } from "../zustand/state/PageCounterState";
import { useEffect, useState } from "react";

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
  }, [])

  return <div style={style}>
    <Banner />
    <LCKD />
    {isPc ? <></> : <div style={{ height: '2px', background: '#f5f5f5' }}>&nbsp;</div>}
    <Puppies />
    <div style={{ height: '2px', background: '#f5f5f5' }}>&nbsp;</div>
    <MatchingMatchingGame />
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