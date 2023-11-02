import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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
import { ReactComponent as Arrow } from '../../assets/main/puppies/go_instagram/arrow.svg';
import { ReactComponent as Arrow1 } from '../../assets/main/puppies/go_instagram/arrow1.svg';


import GoInstagramBackgroundImage from '../../assets/main/puppies/go_instagram/go_instagram_background.webp';
import GoInstagramType1Image from '../../assets/main/puppies/go_instagram/go_instagram_01.webp';
import GoInstagramType2Image from '../../assets/main/puppies/go_instagram/go_instagram_02.webp';
import { useClickCounterStore } from "../../zustand/state/ClickCounterState";
import { click } from "../../api/ClickCountApi";

const PuppyCard = (puppy: PuppyParameter) => {
  const [isDetail, setIsDetail] = useState(false)
  const [selectedFeature, setSelectedFeature] = useState(0)
  const [featureCount, setFeatureCount] = useState(5)
  const [featureIndexes, setFeatureIndexes] = useState([] as number[])
  const { click } = useClickCounterStore()

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
      decoding="async"
      aria-label='LCKD에서 보호중인 강아지 사진입니다.'
    />
    {/* <div className={styles.featureSelectStatusBar}>
      {
        Array(featureCount).fill(0).map((i, idx) => <div key={idx} className={`${selectedFeature === idx ? styles.active : ''}`}>&nbsp;</div>)
      }
    </div> */}
    <div className={styles.featMoreWrapper} onClick={() => {
      click({clickId: `Main - 쉼터 아이들 소개 - ${puppy.name}`})
      setIsDetail(true)
    }}>
      <span></span>
      <span className={styles.featureMoreTitle}>자세히 보기</span>
      <FeatureMoreButton />
    </div>
    {isDetail ? <PuppyDetailModal puppy={puppy} setIsDetail={setIsDetail} /> : <></>}
  </div>
}

export default PuppyCard

export const GoInstagramCard = () => {
  const [type, setType] = useState(0)

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    setType(Math.floor(Math.random() * 3))
  }, [])

  return type === 0 ?
    <GoInstagramCardType0 isPc={isPc} /> : type === 1 ?
      <GoInstagramCardType1 isPc={isPc} /> :
      <GoInstagramCardType2 isPc={isPc} />
}

const GoInstagramCardType0 = ({ isPc }: any) => {
  return <Link
    to={'https://www.instagram.com/helpshelter_pf/'}
    target='_blank'
    className={`${styles.card} ${styles.moveInstagram} ${styles.moveInstagramType0}`}
    style={{ backgroundImage: `url(${GoInstagramBackgroundImage})` }}
    rel="noopener noreferrer"
    onClick={() => {click({clickId: 'Main - 쉼터 아이들 소개 - 인스타그램0'})}}
  >
    <span className={styles.moveInstagramSubText}>
      보호소에 있는 <br />
      더 많은 아이들이 궁금하신가요?
    </span>
    <span className={styles.moveInstagramMainText}>
      <span>
        {isPc ? '지금 바로 ' : ''}인스타그램에서 확인하세요!
      </span>
      <Arrow width={isPc ? 14 : 8} height={isPc ? 16 : 10} />
    </span>
  </Link>
}

const GoInstagramCardType1 = ({ isPc }: any) => {
  return <Link
    to={'https://www.instagram.com/helpshelter_pf/'}
    target='_blank'
    className={`${styles.card} ${styles.moveInstagram} ${styles.moveInstagramType1}`}
    rel="noopener noreferrer"
    onClick={() => {click({clickId: 'Main - 쉼터 아이들 소개 - 인스타그램1'})}}
  >
    <Arrow1 />
    <img
      src={`${GoInstagramType1Image}`}
      alt="보호소에서 보호중인 강아지들을 모아놓은 유기견 보호소의 인스타그램 링크"
      className={styles.moveInstagramImage1}
    />
    <div>
      <span className={styles.moveInstagramSubText}>
        보호소에 있는 <br />
        더 많은 아이들이 궁금하신가요?
      </span>
      {isPc ? <div style={{height: '16px'}}></div> : <br />}
      <span className={styles.moveInstagramMainText}>
        지금 {isPc ? '바로 ' : ''}인스타그램에서 확인하세요!
      </span>
    </div>
  </Link>
}

const GoInstagramCardType2 = ({ isPc }: any) => {
  return <Link
    to={'https://www.instagram.com/helpshelter_pf/'}
    target='_blank'
    className={`${styles.card} ${styles.moveInstagram} ${styles.moveInstagramType1} ${styles.moveInstagramType2}`}
    rel="noopener noreferrer"
    onClick={() => {click({clickId: 'Main - 쉼터 아이들 소개 - 인스타그램2'})}}
  >
    <Arrow1 />
    <img
      src={`${GoInstagramType2Image}`}
      alt="보호소에서 보호중인 강아지들을 모아놓은 유기견 보호소의 인스타그램 링크"
      style={{marginLeft: '5.556vw', width: '9.375vw'}}
      className={styles.moveInstagramImage1}
    />
    <div>
      <span className={styles.moveInstagramSubText}>
        보호소에 있는 <br />
        더 많은 아이들이 궁금하신가요?
      </span>
      {isPc ? <div style={{height: '16px'}}></div> : <br />}
      <span className={styles.moveInstagramMainText}>
        지금 {isPc ? '바로 ' : ''}인스타그램에서 확인하세요!
      </span>
    </div>
  </Link>
}