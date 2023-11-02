import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { usePageCounterStore } from "../zustand/state/PageCounterState";
import Banner from "./Banner";
import LCKD from "./LCKD";
import PuppiesMatchingGame from "./matchingGame/PuppiesMatchingGame";
import Puppies from "./puppies/Puppies";
import Introduction from "./introduction/Introduction";

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
    <script type="application/ld+json">
      {JSON.stringify(bannerData)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(lckdData)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(puppiesData)}
    </script>
    <script type="application/ld+json">
      {JSON.stringify(gameData)}
    </script>


    {/* <Banner /> */}
    <Introduction />
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
}

const mainMobileStyle = {
  maxWidth: '100%',
}

// 메타데이터를 정의합니다.
const bannerData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: "유기견 후원 바자회 - 바자회 소개",
  description: "유기견 후원 바자회의 상세 일정 및 장소를 소개합니다.",
  url: "https://lckd.or.kr"
};

const lckdData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: "유기견 보호소 LCKD - 단체 소개",
  description: "유기견 보호소 LCKD가 하는 일들에 대해서 소개합니다.",
  url: "https://lckd.or.kr#lckd"
};

const puppiesData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: "유기견 보호소 LCKD - 보호 중인 유기견 소개",
  description: "유기견 보호소 LCKD에서 보호중인 유기견들에 대해서 자세히 알아보세요.",
  url: "https://lckd.or.kr#puppies"
};

const gameData = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: "유기견 보호소 LCKD - 유기견 짝맞추기 게임",
  description: "유기견 보호소 LCKD에서 보호중인 유기견들과 함께 재미있는 게임을 즐겨보세요.",
  url: "https://lckd.or.kr#game"
};