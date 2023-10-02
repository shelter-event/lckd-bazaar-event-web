import { PuppyParameter } from "./PuppiesParameters";
import styles from './puppies.module.scss';
import { ReactComponent as DogManner } from '../../assets/main/puppies/feature_dog_manner.svg';
import { ReactComponent as PeopleManner } from '../../assets/main/puppies/feature_people_manner.svg';
import { ReactComponent as ShowerManner } from '../../assets/main/puppies/feature_shower_manner.svg';
import { ReactComponent as Health } from '../../assets/main/puppies/feature_health.svg';
import { ReactComponent as WalkingManner } from '../../assets/main/puppies/feature_walking_manner.svg';
import { ReactComponent as FeatureMoreButton } from '../../assets/main/puppies/feature_more_button.svg';
import { useMediaQuery } from "react-responsive";

const PuppyCard = (puppy: PuppyParameter) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  return <div className={`${styles.card} ${puppy.isFamily ? styles.family : ''}`}>
    <div className={styles.puppyInfoWrapper}>
      <div className={styles.puppyName}>
        <div className={styles.name}>{puppy.name}</div>
        <div className={styles.announcementNumber}>{puppy.announcementNumber}</div>
      </div>
      {isPc ?
        <div className={styles.puppyInfo}>
          <div className={styles.features}>
            <DogManner className={`${styles.puppyFeatureIcon}}`} />
            <PeopleManner className={`${styles.puppyFeatureIcon}}`} />
            <ShowerManner className={`${styles.puppyFeatureIcon}}`} />
            <Health className={`${styles.puppyFeatureIcon}}`} />
            <WalkingManner className={`${styles.puppyFeatureIcon}}`} />
          </div>
        </div> : <></>
      }
    </div>
    <img
      className={styles.profileImage}
      src={puppy.profileImageUrl}
      alt={puppy.name}
    />
    <div className={styles.featureSelectStatusBar}>
      <div>&nbsp;</div>
      <div className={styles.active}>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
    <div className={styles.featMoreWrapper}>
      <span></span>
      <span className={styles.featureMoreTitle}>자세히 보기</span>
      <FeatureMoreButton />
    </div>
  </div>
}

export default PuppyCard