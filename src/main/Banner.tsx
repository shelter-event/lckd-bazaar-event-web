import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import BannerImage from '../assets/banner01.webp';
import MobileBannerImage from '../assets/banner02.webp';
import { usePageCounterStore } from '../zustand/state/PageCounterState';
import styles from './banner.module.scss';

const Banner = () => {
  const { mainVisitCounter } = usePageCounterStore()
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  useEffect(() => {
    if (mainVisitCounter.loading) return
  }, [mainVisitCounter])

  return <div
    className={styles.banner}
    aria-label='LCKD의 유기견 후원 바자회를 설명하기 위한 배너 이미지'
    style={{
      backgroundImage: `url(${isPc ? BannerImage : MobileBannerImage})`,
    }}
  >
    {/* <Dimmed /> */}

    {/* {mainVisitCounter.loading ? <></>
      : <div style={{
        position: 'absolute',
        top: 20,
        left: 20,
        color: '#aaa',
        zIndex: 101,
      }}>
        {`${mainVisitCounter.data.totalVisitCount > 0 ? `총 방문자: ${mainVisitCounter.data.totalVisitCount + 1}` : ''}`}
        <br />
        {`${mainVisitCounter.data.todayVisitCount > 0 ? `오늘 방문자: ${mainVisitCounter.data.todayVisitCount + 1}` : ''}`}
      </div>
    } */}
    {/* <div className={styles.textBox}> */}
    {/* <h1 className={styles.title}>
        {isPc ? 'LCKD의 유기견들과 함께하는' : ''}
        {isPc ? <br /> : <></>}
        유기견 후원 <span className={styles.mainColor}>바자회</span>에 초대합니다.
      </h1> */}
    {/* <span className={styles.name}>
        <span className={styles.mainColor}>2023년 11월 4일</span> 토요일 11시 ~ 17시<br />
        경기 성남시 수정구 탄천로 600 1층 <span className={styles.mainColor}>메종브레첼</span><br />
        주최: <span className={styles.mainColor}>LCKD</span> (비영리민간단체 유기동물 보호소)
      </span>
    </div> */}
  </div>
}

export default Banner