import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickCounterStore } from '../../zustand/state/ClickCounterState'
import { useMatchingGameStore } from '../../zustand/state/MatchingGameState'
import MatchingGame from './MatchingGame'
import { MatchingGameButton, MatchingLevelButton, MatchingLevelButtonType } from './MatchingGameButton'
import styles from './puppiesMatchingGame.module.scss'

const MatchingMatchingGame = () => {
  const [level, setLevel] = useState(MatchingLevelButtonType.ROW)
  const [useHint, setUseHint] = useState(false)
  const [retry, setRetry] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [isOnBoarding, setIsOnBoarding] = useState(false)
  const { click } = useClickCounterStore()

  const { getMatchingGameCounter, getMatchingGameLotteryIndex } = useMatchingGameStore()

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    getMatchingGameCounter()
    getMatchingGameLotteryIndex()
  }, [])

  return <div className={styles.puppiesMatchingGameBox}>
    <h2 className={styles.title}>
      쉼터 아이들 맞추기 게임
    </h2>
    <span className={styles.introduction}>
      간단한 짝맞추기 게임을 통해 바자회에 방문하기 전에 쉼터 아이들 얼굴을 미리 익혀보세요!
    </span>

    <div className={styles.matchingButtonWrapper}>
      <MatchingLevelButton
        onClick={() => {
          setUseHint(false)
          setLevel(MatchingLevelButtonType.HIGH)
          click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 상' })
        }}
        type={MatchingLevelButtonType.HIGH}
      />
      <MatchingLevelButton
        onClick={() => {
          setUseHint(false)
          setLevel(MatchingLevelButtonType.ROW)
          click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 하' })
        }}
        type={MatchingLevelButtonType.ROW}
      />

      {
        isPc ? <></> : <>
          <MatchingGameButton
            title={'힌트보기'}
            onClick={() => {
              click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 힌트보기' })
              if (useHint) return
              else if (clickCount !== 0) {
                alert('카드를 확인 중인 상태에서는 힌트보기를 할 수 없어요!')
                return
              }
              setUseHint(true)
              setTimeout(() => { setUseHint(false) }, 3000)
            }}
          />
          <MatchingGameButton
            title={'다시하기'}
            onClick={() => {
              if (useHint) {
                alert('힌트보기 상태에서는 다시하기를 할 수 없어요!')
                return
              }
              click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 다시하기' })
              setUseHint(false)
              setRetry(!retry)
            }}
          />
        </>
      }
    </div>

    <MatchingGame
      level={level}
      useHint={useHint}
      retry={retry}
      setUseHint={setUseHint}
      setRetry={setRetry}
      clickCount={clickCount}
      setClickCount={setClickCount}
    />
  </div>
}

export default MatchingMatchingGame
