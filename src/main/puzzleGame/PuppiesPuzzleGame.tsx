import { useEffect, useState } from 'react'
import styles from './puppiesPuzzleGame.module.scss'
import { PuzzleGameButton, PuzzleLevelButton, PuzzleLevelButtonType } from './puzzleGameButton'

const PuppiesPuzzleGame = () => {
  const [level, setLevel] = useState(PuzzleLevelButtonType.HIGH)

  useEffect(() => {
    console.log(`level: ${level}`)
  }, [level])

  return <div className={styles.puppiesPuzzleGameBox}>
    <h2 className={styles.title}>
      쉼터 아이들 특징 맞추기 게임
    </h2>
    <span className={styles.introduction}>
      간단한 퍼즐 맞추기 게임을 통해 바자회에 방문하기 전에 쉼터 아이들 얼굴을 미리 익혀보세요!
    </span>

    <div className={styles.puzzleLevelButtonWrapper}>
      <PuzzleLevelButton
        onClick={() => setLevel(PuzzleLevelButtonType.HIGH)}
        type={PuzzleLevelButtonType.HIGH}
      />
      <PuzzleLevelButton
        onClick={() => setLevel(PuzzleLevelButtonType.MIDDLE)}
        type={PuzzleLevelButtonType.MIDDLE}
      />
      <PuzzleLevelButton
        onClick={() => setLevel(PuzzleLevelButtonType.ROW)}
        type={PuzzleLevelButtonType.ROW}
      />
    </div>

    <br />
    <div>
      <PuzzleGameButton
        title={'힌트보기'}
        onClick={() => {
          console.log('Show Hint')
        }}
      />
      <br />
      <br />
      <PuzzleGameButton
        title={'다시하기'}
        onClick={() => {
          console.log('Retry')
        }}
      />
    </div>

  </div>
}

export default PuppiesPuzzleGame
