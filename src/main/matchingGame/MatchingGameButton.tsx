import styles from './puppiesMatchingGame.module.scss';

export const MatchingLevelButton = ({ type, onClick }: any) => {
  return <div className={styles.matchingLevelButton} onClick={onClick}>
    <span className={styles.level}>{typeTitle(type as MatchingLevelButtonType)}</span>
    <span className={styles.separator}> | </span>
    <span className={styles.cellNumber}>{typeCellNumber(type as MatchingLevelButtonType)}</span>
  </div>
}

export enum MatchingLevelButtonType {
  HIGH, MIDDLE, ROW,
}

const typeTitle = (type: MatchingLevelButtonType) => {
  return type === MatchingLevelButtonType.HIGH ? '상' : type === MatchingLevelButtonType.MIDDLE ? '중' : '하'
}

const typeCellNumber = (type: MatchingLevelButtonType) => {
  return type === MatchingLevelButtonType.HIGH ? '4 x 6' : type === MatchingLevelButtonType.MIDDLE ? '4 x 4' : '4 x 2'
}

export const MatchingGameButton = ({ title, onClick }: any) => {
  return <div className={styles.matchingGameButton} onClick={onClick}>
    {title}
  </div>
}