import { useEffect } from 'react';
import BannerImage from '../assets/banner.webp';
import Dimmed from '../common/Dimmed';
import { usePageCounterStore } from '../zustand/state/PageCounterState';
import styles from './banner.module.scss';
import { useMediaQuery } from 'react-responsive';

const Banner = () => {
  const { mainVisitCounter } = usePageCounterStore()
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    if (mainVisitCounter.loading) return
    // console.log(mainVisitCounter.data)
  }, [mainVisitCounter])

  return <div
    className={styles.banner}
    aria-label='LCKD의 유기견 후원 바자회를 설명하기 위한 배너 이미지'
    style={{
      backgroundImage: `url(${BannerImage})`,
    }}
  >
    <Dimmed />

    {mainVisitCounter.loading ? <></>
      : <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#aaa',
        zIndex: 101,
      }}>
        {`${mainVisitCounter.data.totalVisitCount > 0 ? `총 방문자: ${mainVisitCounter.data.totalVisitCount}` : ''}`}
        <br />
        {`${mainVisitCounter.data.todayVisitCount > 0 ? `오늘 방문자: ${mainVisitCounter.data.totalVisitCount}` : ''}`}
      </div>
    }
    <div className={styles.textBox}>
      <h1 className={styles.title}>
        {isPc ? 'LCKD의 유기견들과 함께하는' : ''}
        {isPc ? <br /> : <></>}
        유기견 후원 <span className={styles.mainColor}>바자회</span>에 초대합니다.
      </h1>
      <span className={styles.name}>
        장소: 태평역 인근 카페<br />
        일자: 2023년 11월 4일 토요일<br />
        주최: LCKD (비영리민간단체 유기동물 보호소)
      </span>
    </div>
  </div>
}

export default Banner