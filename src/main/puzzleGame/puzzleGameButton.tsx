import styles from './puppiesPuzzleGame.module.scss';

export const PuzzleLevelButton = ({ type, onClick }: any) => {
  return <div className={styles.puzzleLevelButton} onClick={onClick}>
    <span className={styles.level}>{typeTitle(type as PuzzleLevelButtonType)}</span>
    <span className={styles.separator}> | </span>
    <span className={styles.cellNumber}>{typeCellNumber(type as PuzzleLevelButtonType)}</span>
  </div>
}

export enum PuzzleLevelButtonType {
  HIGH, MIDDLE, ROW,
}

const typeTitle = (type: PuzzleLevelButtonType) => {
  return type === PuzzleLevelButtonType.HIGH ? '상' : type === PuzzleLevelButtonType.MIDDLE ? '중' : '하'
}

const typeCellNumber = (type: PuzzleLevelButtonType) => {
  return type === PuzzleLevelButtonType.HIGH ? '16 x 16' : type === PuzzleLevelButtonType.MIDDLE ? '8 x 8' : '4 x 4'
}

export const PuzzleGameButton = ({ title, onClick }: any) => {
  return <div className={styles.puzzleGameButton} onClick={onClick}>
    {title}
  </div>
}