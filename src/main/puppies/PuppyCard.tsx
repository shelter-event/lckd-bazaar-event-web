import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as DogManner } from '../../assets/main/puppies/feature_dog_manner.svg';
import { ReactComponent as Health } from '../../assets/main/puppies/feature_health.svg';
import { ReactComponent as Like } from '../../assets/main/puppies/feature_like.svg';
import { ReactComponent as FeatureMoreButton } from '../../assets/main/puppies/feature_more_button.svg';
import { ReactComponent as PeopleManner } from '../../assets/main/puppies/feature_people_manner.svg';
import { ReactComponent as ShowerManner } from '../../assets/main/puppies/feature_shower_manner.svg';
import { ReactComponent as WalkingManner } from '../../assets/main/puppies/feature_walking_manner.svg';
import { isNotBlank } from "../../common/Validation";
import { PuppyParameter } from "./PuppiesParameters";
import PuppyDetailModal from "./PuppyDetailModal";
import styles from './puppies.module.scss';

const PuppyCard = (puppy: PuppyParameter) => {
  const [isDetail, setIsDetail] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [featureCount, setFeatureCount] = useState(5)
  const [featureIndexes, setFeatureIndexes] = useState([] as number[])

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    var count = 0
    var index = 0
    const newArray = [] as number[]
    if (isNotBlank(puppy.like)) {
      newArray[0] = index++
      count++
    }
    if (isNotBlank(puppy.dogManner)) {
      newArray[1] = index++
      count++
    }
    if (isNotBlank(puppy.peopleManner)) {
      newArray[2] = index++
      count++
    }
    if (isNotBlank(puppy.showerManner)) {
      newArray[3] = index++
      count++
    }
    if (isNotBlank(puppy.health)) {
      newArray[4] = index++
      count++
    }
    if (isNotBlank(puppy.warkingManner)) {
      newArray[5] = index++
      count++
    }
    setFeatureIndexes(newArray)
    setFeatureCount(count)
  }, [])
  
  return <div className={`${styles.card} ${puppy.isFamily ? styles.family : ''}`}>
    <div className={styles.puppyInfoWrapper}>
      <div className={styles.puppyName}>
        <div className={styles.name}>{puppy.name}</div>
        <div className={styles.announcementNumber}>{puppy.announcementNumber}</div>
      </div>
      {isPc ?
        <div className={styles.puppyInfo}>
          <div className={styles.features}>
            {
              isNotBlank(puppy.like) ? <Like
                onClick={() => { setSelectedFeature(featureIndexes[0]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
            {
              isNotBlank(puppy.dogManner) ? <DogManner
                onClick={() => { setSelectedFeature(featureIndexes[1]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
            {
              isNotBlank(puppy.peopleManner) ? <PeopleManner
                onClick={() => { setSelectedFeature(featureIndexes[2]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
            {
              isNotBlank(puppy.showerManner) ? <ShowerManner
                onClick={() => { setSelectedFeature(featureIndexes[3]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
            {
              isNotBlank(puppy.health) ? <Health
                onClick={() => { setSelectedFeature(featureIndexes[4]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
            {
              isNotBlank(puppy.warkingManner) ? <WalkingManner
                onClick={() => { setSelectedFeature(featureIndexes[5]) }}
                className={`${styles.puppyFeatureIcon}}`} />
                : <></>
            }
          </div>
        </div> : <></>
      }
    </div>
    <img
      className={styles.profileImage}
      src={puppy.profileImageUrl}
      alt={puppy.name}
      loading="lazy"
      decoding="async"
    />
    <div className={styles.featureSelectStatusBar}>
      {
        Array(featureCount).fill(0).map((i, idx) => <div key={idx} className={`${selectedFeature === idx ? styles.active : ''}`}>&nbsp;</div>)
      }
    </div>
    <div className={styles.featMoreWrapper} onClick={() => setIsDetail(true)}>
      <span></span>
      <span className={styles.featureMoreTitle}>자세히 보기</span>
      <FeatureMoreButton />
    </div>
    {isDetail ? <PuppyDetailModal puppy={puppy} setIsDetail={setIsDetail} /> : <></>}
  </div>
}

export default PuppyCard