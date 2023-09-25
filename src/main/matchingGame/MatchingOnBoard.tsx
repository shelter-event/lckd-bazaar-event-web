import styles from './puppiesMatchingGame.module.scss'
import { useMediaQuery } from "react-responsive"

const MatchingOnBoard = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  })

  return <>
    {
      isPc ? <>
        <span className={styles.onBoardIntroduction}>
          게임을 플레이할 때마다  다섯 마리의 아이들이 랜덤으로 등장합니다. <br />
          30초 안에 모든 퍼즐 조각들을 클리어 해보세요!
        </span>
        <hr />
        <span className={styles.gameExplanation}>
          [하], [중], [상] 총 세 가지의 난이도가 있고, 난이도가 올라갈수록 맞춰야하는 퍼즐의 갯수가 올라갑니다. <br />
          게임이 너무 어렵다면, [힌트 보기] 버튼을 클릭해보세요! 전체 쉼터 아이들의 사진을 2초 간 보여드립니다.<br />
          오른쪽 상단 [다시하기] 버튼을 통해 언제든지 다시 플레이할 수 있습니다.
        </span>
      </> : <></>
    }
    {
      isPc ? <>
        <br /><div className={styles.startButton}>시작</div>
      </> : <>
        <div className={styles.matchingMobileButtonBox}>
          <div className={styles.mobileExplanationButton}>설명 보기</div>
          <div className={styles.mobileStartButton}>시작</div>
        </div>
      </>
    }
  </>
}

export default MatchingOnBoard