import BannerImage from '../assets/banner.jpeg';
import Dimmed from '../common/Dimmed';
import { mainColor, white } from '../styles/styles';
import styles from './banner.module.scss'

const Banner = () => {

  return <div
    className={styles.banner}
    aria-label='배너 이미지'
    style={{
      backgroundImage: `url(${BannerImage})`,
    }}
  >
    <Dimmed />
    <div className={styles.textBox}>
      <h1 className={styles.title} aria-label='11월 1일! LCKD 바자회에 초대합니다.'>
        11월 1일! LCKD <span style={{ color: mainColor }}>바자회</span>에 초대합니다.
      </h1>
      <span className={styles.name} aria-label='LCKD (비영리민간단체 유기동물 보호소)'>
        LCKD (비영리민간단체 유기동물 보호소)
      </span>
    </div>
  </div>
}

export default Banner


const bannerSpanPC = {
  fontSize: '24px',
  fontWeight: 500,
}

const bannerSpanMobile = {
  fontSize: '13px',
  fontWeight: 500,
}