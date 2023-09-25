import { useEffect, useState } from 'react';
import styles from './puppiesMatchingGame.module.scss';
import { useMediaQuery } from 'react-responsive';
import MatchingOnBoard from './MatchingOnBoard';

const MatchingGame = () => {
  const [isOnBoardingActive, setIsOnBoardingActive] = useState(false)
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  })

  useEffect(() => {
    setIsOnBoardingActive(false)
  }, [isOnBoardingActive])

  return <div className={styles.matchingGameBox}>
    <div className={`${styles.gameOnBoard} ${isOnBoardingActive ? styles.active : styles.inactive}`}>
      <h3 className={styles.onBoardTitle}>쉼터 아이들 특징 맞추기 게임</h3>
      {isOnBoardingActive ? <MatchingOnBoard /> : <></>}
    </div>

  </div>



}

export default MatchingGame