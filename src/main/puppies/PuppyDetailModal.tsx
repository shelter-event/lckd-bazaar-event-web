import { ReactComponent as DogManner } from '../../assets/main/puppies/feature_dog_manner.svg';
import { ReactComponent as Health } from '../../assets/main/puppies/feature_health.svg';
import { ReactComponent as Like } from '../../assets/main/puppies/feature_like.svg';
import { ReactComponent as PeopleManner } from '../../assets/main/puppies/feature_people_manner.svg';
import { ReactComponent as ShowerManner } from '../../assets/main/puppies/feature_shower_manner.svg';
import { ReactComponent as WalkingManner } from '../../assets/main/puppies/feature_walking_manner.svg';
import Dimmed from '../../common/Dimmed';
import { isNotBlank } from '../../common/Validation';
import styles from './puppies.module.scss';

const PuppyDetailModal = ({ setIsDetail, puppy }: any) => {

  return <div className={styles.puppyDetailModalWrapper} onClick={(e: any) => { setIsDetail(false) }}>
    <Dimmed />
    <div className={styles.puppyDetailBox} onClick={(e: any) => {e.stopPropagation()}}>
      <img className={styles.puppyImage} src={puppy.mainImageUrl} alt={puppy.name} decoding='async' loading='lazy'/>
      <div className={styles.puppyInfoBox}>
        <div className={styles.puppyTitleBox}>
          <h4 className={styles.puppyName}>{puppy.name}</h4>
          <span className={styles.puupyAnnouncementNumber}>{puppy.announcementNumber}</span>
        </div>
        <div className={styles.featureBox}>
          {
            isNotBlank(puppy.health) ? <div>
              <div> <Health /></div>
              <span className={styles.featureContent}>{puppy.health}</span>
            </div> : <></>
          }
          {
            isNotBlank(puppy.dogManner) ? <div>
              <div> <DogManner /></div>
              <span className={styles.featureContent}>{puppy.dogManner}</span>
            </div> : <></>
          }
          {
            isNotBlank(puppy.peopleManner) ? <div>
              <div> <PeopleManner /></div>
              <span className={styles.featureContent}>{puppy.peopleManner}</span>
            </div> : <></>
          }
          {
            isNotBlank(puppy.like) ? <div>
              <div> <Like /></div>
              <span className={styles.featureContent}>{puppy.like}</span>
            </div> : <></>
          }
          {
            isNotBlank(puppy.warkingManner) ? <div>
              <div> <WalkingManner /></div>
              <span className={styles.featureContent}>{puppy.warkingManner}</span>
            </div> : <></>
          }
          {
            isNotBlank(puppy.showerManner) ? <div>
              <div> <ShowerManner /></div>
              <span className={styles.featureContent}>{puppy.showerManner}</span>
            </div> : <></>
          }
        </div>

      </div>
    </div>
  </div>
}

export default PuppyDetailModal