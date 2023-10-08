import { ReactComponent as WalkingManner } from '../../assets/main/puppies/feature_walking_manner.svg';
import styles from './puppiesMatchingGame.module.scss'

const MatchingBackCard = () => {
  return <div className={`${styles.matchingCard} ${styles.back}`}>
    <MatchingCardIcon isLarge={true}/>
  </div>
}

const MatchingImageCard = ({id, name, url}: any) => {
  return <div className={`${styles.matchingCard} ${styles.image}`}>
    <img src={url} alt={`LCKD에서 보호중인 강아지 ${name} 사진`} />
  </div>
}

const MatchingNameCard = ({id, name}: any) => {
  return <div className={`${styles.matchingCard} ${styles.name}`}>
    <MatchingCardIcon />
    <span className={styles.name}>{name}</span>
  </div>
}

const MatchingCardIcon = ({isLarge = false}: any) => {
  return <div className={`${styles.matchingCardIconWrapper} ${isLarge ? styles.large : ''}`}>
    <WalkingManner />
  </div>
}

export { MatchingBackCard, MatchingImageCard, MatchingNameCard }