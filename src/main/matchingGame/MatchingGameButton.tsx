import styles from './puppiesMatchingGame.module.scss';
import { ReactComponent as Retry } from '../../assets/icons/retry.svg'
import { ReactComponent as Hint } from '../../assets/icons/hint.svg';

export const MatchingLevelButton = ({ type, onClick }: any) => {
  return <div className={`${styles.matchingLevelButton} ${type == MatchingLevelButtonType.HIGH ? styles.high : styles.row}`} onClick={onClick}>
    <span className={styles.level}>{typeTitle(type as MatchingLevelButtonType)}</span>
  </div>
}

export enum MatchingLevelButtonType {
  HIGH, MIDDLE, ROW,
}

const typeTitle = (type: MatchingLevelButtonType) => {
  return type === MatchingLevelButtonType.HIGH ? '상' : type === MatchingLevelButtonType.MIDDLE ? '중' : '하'
}

export const MatchingGameButton = ({ title, onClick }: any) => {
  return <div className={styles.matchingGameButton} onClick={onClick} aria-label={title}>
    <div>
      {title === '다시하기' ? <Retry /> : <Hint />}
    </div>
  </div>
}