import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSearchParams } from 'react-router-dom';
import { useClickCounterStore } from '../../zustand/state/ClickCounterState';
import { PuppyParameter, puppyParameters } from './PuppiesParameters';
import PuppyCard, { GoInstagramCard } from './PuppyCard';
import styles from './puppies.module.scss';

const Puppies = () => {
  const [puppies, setPuppies] = useState([] as PuppyParameter[])
  const [isMore, setIsMore] = useState(false)
  const { click } = useClickCounterStore()

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    var count = 0
    var result = [] as PuppyParameter[]

    if (!isPc) {
      for (let i = 0; i < puppyParameters.length && count < 5; i++) {
        result.push(puppyParameters[i])
        count++
      }
    } else {
      for (let i = 0; i < puppyParameters.length && count < 5; i++) {
        result.push(puppyParameters[i])
        count++
      }
    }
    setPuppies(result)

    if (result.length >= puppyParameters.length) {
      setIsMore(true)
    } else {
      setIsMore(false)
    }
  }, [isPc])

  const showAllPuppies = () => {
    setIsMore(true)
    setPuppies(puppyParameters)
  }

  return <div id='puppies'>
    <div className={styles.puppiesWrapper}>
      <h2 className={styles.title}>쉼터 아이들 소개</h2>
      <span className={styles.introduction}>{'쉼터에 있는 아이들을 소개합니다.'}</span>
      <div className={styles.cardWrapper}>
        <GoInstagramCard />
        {
          puppies.map((puppy) => {
            return <PuppyCard
              id={puppy.id}
              key={puppy.id}
              name={puppy.name}
              announcementNumber={puppy.announcementNumber}
              mainImageUrl={puppy.mainImageUrl}
              profileImageUrl={puppy.profileImageUrl}
              health={puppy.health}
              dogManner={puppy.dogManner}
              peopleManner={puppy.peopleManner}
              like={puppy.like}
              warkingManner={puppy.warkingManner}
              showerManner={puppy.showerManner}
              isFamily={puppy.isFamily}
            />
          })
        }
        {
          isMore ? '' :
            <div className={styles.more} onClick={(e: any) => {
              click({ clickId: 'Main - 쉼터 아이들 소개 - 더보기' })
              showAllPuppies()
            }}>
              <span>더보기</span>
            </div>
        }
      </div>
    </div>
  </div>
}

export default Puppies

