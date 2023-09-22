import { useEffect, useState } from 'react'
import styles from './puppies.module.scss'
import { useMediaQuery } from 'react-responsive';

const Puppies = () => {
  const [puppies, setPuppies] = useState([] as {
    src: string;
    alt: string;
    isFamily: boolean;
  }[])
  const [isMore, setIsMore] = useState(false)

  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    var count = 0
    var result = [] as {
      src: string;
      alt: string;
      isFamily: boolean;
    }[]

    if (!isPc) {
      if (isMore) {
        result = families.concat(personals)
        setPuppies(result)
        return
      }
      for (let i = 0; i < families.length && i < 1; i++) {
        result.push(families[i])
        count += 2
      }

      for (let i = 0; i < personals.length && count < 6; i++) {
        result.push(personals[i])
        count++
      }

      setPuppies(result)
    } else {
      var dtoIndex = 0
      var familyIndex = 0
      while (dtoIndex < personals.length || familyIndex < families.length) {
        if (!isMore && count === 9) {
          break;
        }

        if (familyIndex < families.length && result.length % 2 === 0) {
          count += 2
          result.push(families[familyIndex++])
        } else {
          count++
          result.push(personals[dtoIndex++])
        }
        setPuppies(result)
      }
    }
  }, [isMore, isPc])

  return <div className={styles.puppiesWrapper}>
    <h2 className={styles.title}>쉼터 아이들 소개</h2>
    <span className={styles.introduction}>쉼터에 있는 아이들을 소개합니다.</span>
    <div className={styles.cardWrapper}>
      {
        puppies.map((puppy) => {
          return <PuppiesCard src={puppy.src} alt={puppy.alt} isFamily={puppy.isFamily} />
        })
      }
      {
        isMore ? '' :
          <div className={styles.more} onClick={(e: any) => setIsMore(true)}>
            <span>더보기</span>
          </div>
      }
    </div>
  </div>
}

export default Puppies

const PuppiesCard = ({ src, alt, isFamily }: PuppiesCardDto) => {
  return <div className={`${styles.card} ${isFamily ? styles.family : ''}`}>
    <img src={src} alt={alt} />
  </div>
}

class PuppiesCardDto {
  constructor(
    readonly src: string,
    readonly alt: string,
    readonly isFamily: boolean,
  ) { }

}

const families = [
  {
    src: '',
    alt: '가을이네',
    isFamily: true,
  },
  {
    src: '',
    alt: '포포네',
    isFamily: true,
  },
  {
    src: '',
    alt: '햇살이네',
    isFamily: true,
  },
]

const personals = [
  {
    src: '',
    alt: '벤',
    isFamily: false,
  },
  {
    src: '',
    alt: '깜순이',
    isFamily: false,
  },
  {
    src: '',
    alt: '마리',
    isFamily: false,
  },
  {
    src: '',
    alt: '콩콩이',
    isFamily: false,
  },
  {
    src: '',
    alt: '훈이',
    isFamily: false,
  },
  {
    src: '',
    alt: '돌체',
    isFamily: false,
  },
]