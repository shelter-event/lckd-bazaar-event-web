import { ReactComponent as WalkingManner } from '../../assets/main/puppies/feature_walking_manner.svg';
import { MatchingLevelButtonType } from './MatchingGameButton';
import styles from './puppiesMatchingGame.module.scss'

const MatchingCard = ({ isActive, id, name, url, type, level, onClick }: any) => {
  return <div onClick={onClick} className={`${styles.matchingCardBox} ${isActive ? styles.active : ''}`}>
    <MatchingBackCard level={level} />
    {type === 'image' ?
      <MatchingImageCard id={id} name={name} url={url} level={level} />
      : <MatchingNameCard id={id} name={name} level={level} />}
  </div>
}

const MatchingBackCard = ({ level }: any) => {
  const levelStyle = level === MatchingLevelButtonType.ROW ? styles.row : level === MatchingLevelButtonType.MIDDLE ? styles.middle : styles.high
  return <div className={`${styles.matchingCard} ${styles.back} ${levelStyle}`}>
    <MatchingCardIcon isLarge={true} />
  </div>
}

const MatchingImageCard = ({ id, name, url, level }: any) => {
  const levelStyle = level === MatchingLevelButtonType.ROW ? styles.row : level === MatchingLevelButtonType.MIDDLE ? styles.middle : styles.high
  return <div className={`${styles.matchingCard} ${styles.image} ${levelStyle}`}>
    <img src={url} alt={`LCKD에서 보호중인 강아지 ${name} 사진`} />
  </div>
}

const MatchingNameCard = ({ id, name, level }: any) => {
  const levelStyle = level === MatchingLevelButtonType.ROW ? styles.row : level === MatchingLevelButtonType.MIDDLE ? styles.middle : styles.high
  return <div className={`${styles.matchingCard} ${styles.name} ${levelStyle}`}>
    <MatchingCardIcon />
    <span className={styles.name}>{name}</span>
  </div>
}

const MatchingCardIcon = ({ isLarge = false }: any) => {
  return <div className={`${styles.matchingCardIconWrapper} ${isLarge ? styles.large : ''}`}>
    <WalkingManner />
  </div>
}

export default MatchingCard
// export { MatchingBackCard, MatchingImageCard, MatchingNameCard }