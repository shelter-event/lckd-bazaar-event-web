import { useMediaQuery } from 'react-responsive';
import BannerImage from '../assets/banner.jpeg';
import Dimmed from '../common/Dimmed';
import { mainColor, white } from '../styles/styles';

const Banner = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  const bannerStyle = {
    ...banner,
    ...(isPc ? bannerPC : bannerMobile),
  }

  const bannerH1 = isPc ? bannerH1PC : bannerH1Mobile
  const bannerSpan = isPc ? bannerSpanPC : bannerSpanMobile


  return <div style={bannerStyle}>
    <Dimmed />
    <div style={bannerTextBox}>
      <h1 style={bannerH1}>11월 1일! LCKD <span style={{ color: mainColor }}>바자회</span>에 초대합니다.</h1>
      <span style={bannerSpan}>LCKD (비영리민간단체 유기동물 보호소)</span>
    </div>
  </div >
}

export default Banner

// Banner Box
const banner = {
  width: '100vw',
  position: 'relative' as 'relative',
  backgroundImage: `url(${BannerImage})`,
  backgroundSize: 'cover',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
}

const bannerPC = {
  minHeight: '100vh',
  height: '100vh',
}

const bannerMobile = {
  minHeight: '300px',
  height: '300px',
}


// Text
const bannerTextBox = {
  color: white,
  textAlign: 'center' as 'center',
  zIndex: 1,
}

const bannerH1PC = {
  fontSize: '64px',
  fontWeight: 700,
}

const bannerH1Mobile = {
  fontSize: '24px',
  fontWeight: 700,
}

const bannerSpanPC = {
  fontSize: '24px',
  fontWeight: 500,
}

const bannerSpanMobile = {
  fontSize: '13px',
  fontWeight: 500,
}