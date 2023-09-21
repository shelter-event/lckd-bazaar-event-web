import styles from './puppies.module.scss'

const Puppies = () => {
  return <div className={styles.puppiesWrapper}>
    <h2 className={styles.title}>쉼터 아이들 소개</h2>
    <span className={styles.introduction}>쉼터에 있는 아이들을 소개합니다.</span>
    <div className={styles.cardWrapper}>
      <PuppiesCard url={''} alt={'가을이네'} isFamily={true} />
      <PuppiesCard url={''} alt={'벤'} isFamily={false} />  
      <PuppiesCard url={''} alt={'깜순이'} isFamily={false} />
      <PuppiesCard url={''} alt={'포포네'} isFamily={true} />
      <PuppiesCard url={''} alt={'마리'} isFamily={false} />
      <PuppiesCard url={''} alt={'콩콩이'} isFamily={false} />
      <PuppiesCard url={''} alt={'훈이'} isFamily={false} />
      <PuppiesCard url={''} alt={'햇살이네'} isFamily={true} />
      <PuppiesCard url={''} alt={'돌체'} isFamily={false} />
    </div>
  </div>
}

export default Puppies

const PuppiesCard = ({ url, alt, isFamily }: any) => {
  return <div className={`${styles.card} ${isFamily ? styles.family : ''}`}>
    <img src={url} alt={alt} />
  </div>
}