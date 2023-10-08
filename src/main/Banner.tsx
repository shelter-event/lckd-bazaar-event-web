import { useEffect } from 'react';
import BannerImage from '../assets/banner.webp';
import Dimmed from '../common/Dimmed';
import { usePageCounterStore } from '../zustand/state/PageCounterState';
import styles from './banner.module.scss';

const Banner = () => {
  const { mainVisitCounter } = usePageCounterStore()

  useEffect(() => {
    if (mainVisitCounter.loading) return
    console.log(mainVisitCounter.data)
  }, [mainVisitCounter])

  return <div
    className={styles.banner}
    aria-label='배너 이미지'
    style={{
      backgroundImage: `url(${BannerImage})`,
    }}
  >
    <Dimmed />

    {mainVisitCounter.loading || mainVisitCounter.data === undefined || mainVisitCounter.data === null ? <></>
      : <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#aaa',
        zIndex: 101,
      }}>오늘 방문자: {mainVisitCounter.data.todayVisitCount} <br /> 총 방문자: {mainVisitCounter.data.totalVisitCount}
      </div>
    }
    <div className={styles.textBox}>
      <h1 className={styles.title} aria-label='11월 1일! LCKD 바자회에 초대합니다.'>
        11월 4일! 유기견 나눔 <span className={styles.mainColor}>바자회</span>에 초대합니다.
      </h1>
      <span className={styles.name} aria-label='LCKD (비영리민간단체 유기동물 보호소)'>
        LCKD (비영리민간단체 유기동물 보호소)
      </span>
    </div>
  </div>
}

export default Banner