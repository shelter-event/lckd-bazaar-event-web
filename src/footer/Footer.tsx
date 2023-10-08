import { Link } from 'react-router-dom'
import styles from './footer.module.scss'

const Footer = () => {
  return <>
    <div style={{ height: '2px', background: '#f5f5f5' }}>&nbsp;</div>
    <div className={styles.footer}>
      <div>
        <Link to={'https://pf.kakao.com/_ZxbpxkT'} target='_blank'>입양 & 임보 & 봉사 문의</Link>
        <Link to={'https://m.blog.naver.com/PostView.naver?blogId=lcfkd&logNo=222676642630&navType=by'} target='_blank'>LCKD 소개글</Link>
        <Link to={'https://lastchanceforkoreandogs.com/'} target='_blank'>해외 홈페이지</Link>
        <Link to={'https://www.instagram.com/helpshelter/'} target='_blank'>인스타그램 채널</Link>
        <Link to={'https://www.instagram.com/lastchanceforkoreandogs/'} target='_blank'>해외 인스타그램 채널</Link>
      </div>
    </div>
  </>
}

export default Footer