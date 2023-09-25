import { useEffect, useState } from 'react'
import styles from './puppiesMatchingGame.module.scss'
import { MatchingGameButton, MatchingLevelButton, MatchingLevelButtonType } from './MatchingGameButton'
import MatchingGame from './MatchingGame'

const MatchingMatchingGame = () => {
  const [level, setLevel] = useState(MatchingLevelButtonType.HIGH)

  useEffect(() => {
    console.log(`level: ${level}`)
  }, [level])

  return <div className={styles.puppiesMatchingGameBox}>
    <h2 className={styles.title}>
      쉼터 아이들 특징 맞추기 게임
    </h2>
    <span className={styles.introduction}>
      간단한 퍼즐 맞추기 게임을 통해 바자회에 방문하기 전에 쉼터 아이들 얼굴을 미리 익혀보세요!
    </span>

    <div className={styles.matchingLevelButtonWrapper}>
      <MatchingLevelButton
        onClick={() => setLevel(MatchingLevelButtonType.HIGH)}
        type={MatchingLevelButtonType.HIGH}
      />
      <MatchingLevelButton
        onClick={() => setLevel(MatchingLevelButtonType.MIDDLE)}
        type={MatchingLevelButtonType.MIDDLE}
      />
      <MatchingLevelButton
        onClick={() => setLevel(MatchingLevelButtonType.ROW)}
        type={MatchingLevelButtonType.ROW}
      />
    </div>

    <br />
    <div>
      <MatchingGameButton
        title={'힌트보기'}
        onClick={() => {
          console.log('Show Hint')
        }}
      />
      <br />
      <br />
      <MatchingGameButton
        title={'다시하기'}
        onClick={() => {
          console.log('Retry')
        }}
      />
    </div>

    <MatchingGame />

  </div>
}

export default MatchingMatchingGame
