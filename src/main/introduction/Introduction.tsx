import styles from './introduction.module.scss';
import IntroductionImage from '../../assets/main/introduction/introduction.webp';
import MapImage from '../../assets/main/introduction/map.webp';
import { useState } from 'react';
import Dimmed from '../../common/Dimmed';
import { Link } from 'react-router-dom';

const tabTitle = ['오시는 길', '앨범', 'Q & A']
const qnaList = [
  [
    'Q1. 바자회 수익은 어떻게 사용되나요?',
    '바자회 수익은 유기동물 구조 및 치료비로 사용됩니다.'
  ],
  [
    'Q2. 어떤 프로그램들이 준비되어 있나요?',
    '1층: 바자회 물품을 구경하세요!\n2층: 댕댕이들의 영상을 관람해보세요~\n3층: 댕댕이들과 함께 놀 수 있는 옥상정원이 있어요!'
  ],
  [
    'Q3. 차를 가져가고 싶은데 주차는 어디에 해야할까요?',
    '카페 뒤쪽 주차장에 주차가 가능합니다!'
  ],
]


const Introduction = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return <div className={styles.introductionWrapper}>
    <div className={styles.introductionBox}>

      <div className={styles.leftInfo}>
        <h2>LCKD 유기동물 입양 캠페인 & 바자회에 <br />여러분을 초대합니다.</h2>
        <div className={styles.hr}>&nbsp;</div>
        <div className={styles.contents}>
          <div className={styles.tabBox}>
            <div
              onClick={() => { setTabIndex(0) }}
              className={`${styles.tabButton} ${tabIndex === 0 ? styles.active : ''}`}>
              {tabTitle[0]}
            </div>
            <div
              onClick={() => { setTabIndex(1) }}
              className={`${styles.tabButton} ${tabIndex === 1 ? styles.active : ''}`}>
              {tabTitle[1]}
            </div>
            <div
              onClick={() => { setTabIndex(2) }}
              className={`${styles.tabButton} ${tabIndex === 2 ? styles.active : ''}`}>
              {tabTitle[2]}
            </div>
          </div>
          <div className={styles.tabContent}>
            {tabIndex === 0 ?
              <Link
                to={'https://map.naver.com/p/entry/place/1147280714?c=15.30,0,0,0,dh'}
                target='_blank'
              >
                <div className={styles.map}>
                  <img
                    src={`${MapImage}`}
                    alt="오시는길 (메종브레첼) 지도 바로가기"
                  />
                  <Dimmed backgroundColor={'rgba(14, 14, 14, 0.60)'} />
                  <span className={styles.mapDetail}>지도 자세히 보기</span>
                </div>
              </Link>
              : tabIndex === 1 ?
                <></> :
                <div className={styles.qna}>
                  {qnaList.map((e) => <div className={styles.content}>
                    <span className={styles.question}>{e[0]}</span>
                    <span className={styles.answer}>{e[1].split('\n').map((str, index) => <>{str}<br /></>)}</span>
                  </div>
                  )}
                </div>
            }
          </div>
        </div>
      </div>
      <div className={styles.rightInfo}>
        <img className={styles.introductionImage}
          src={`${IntroductionImage}`}
          alt="바자회 일시: 2023년 11월 4일 (토) 11시 ~ 17시 | 장소: 경기도 성남시 수정구 탄천로 600, 메종브레첼 1층 | 주최: LCKD (비영리민간단체 유기동물 보호소) | 프로그램: 입양캠페인, 바자회, 다양한 행사"
        />
      </div>
    </div>
  </div>
}

export default Introduction;