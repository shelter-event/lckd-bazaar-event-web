import { useMediaQuery } from "react-responsive";
import { ReactComponent as Adopt } from '../assets/icons/adopt.svg';
import { ReactComponent as Business } from '../assets/icons/business.svg';
import { ReactComponent as Event } from '../assets/icons/event.svg';
import { ReactComponent as Healing } from '../assets/icons/healing.svg';
import styles from './lckd.module.scss';

const LCKD = () => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  return <div className={styles.lckdWrapper}>
    <div className={styles.lckd}>
      <h2 className={styles.title}>LCKD (비영리민간단체 유기동물 보호소)</h2>
      {isPc ? <hr /> : <></>}
      <span className={styles.introduction}>
        LCKD에 머무르는 아이들은 일시적으로 갈곳이 없어 모여있는 장소이며 임보 및 입양처를 기다리고 있습니다.
      </span>

      <div className={styles.featureWrapper}>
        <FeatureBox
          title={'유기 동물 구조, 치료 및 보호\nㅤ'}
          type={FeatureType.HEALING}
          content={'유기동물을 구조한 후, 연계병원을 통하여 예방접종을 시행하며, 훈련사로부터 행동적 문제를 치료하는 등 구조된 유기동물을 다방면으로 케어하고 있습니다.'}
        />
        <FeatureBox
          title={'국내 및 해외 입양\nㅤ'}
          type={FeatureType.ADOPT}
          content={'온오프라인 홍보를 통한 입양 신청자 모집과 이상적인 가정을 선별하기 위한 상담과정, 검증절차를 거친 후 국내 및 해외로 입양을 진행합니다.'}
        />
        <FeatureBox
          title={'유기 동물 보호 및 \n치료 기금 마련을 위한 수익 사업'}
          type={FeatureType.BUSINESS}
          content={'유기 동물 보호, 치료를 위한 기금 마련을 위한 홍보 활동을 통해 생명 사랑, 존중 및 동물 복지 문화 창작에 도모합니다.'}
        />
        <FeatureBox
          title={'유기 동물 예방 홍보 \n및 나눔 바자회 행사'}
          type={FeatureType.EVENT}
          content={'유기 동물과 관련된 사회적 문제 해결을 위한 유기 동물 예방 홍보 및 캠페인을 진행하고, 나눔 바자회를 통한 유기 동물 구조, 보호를 위한 기금을 마련합니다.'}
        />
      </div>
    </div>
  </div>
}

export default LCKD

const FeatureBox = ({ title, type, content }: FeatureBoxParams) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  });

  return <>
    {
      isPc ?
        <div className={styles.featureBox}>
          <h3 className={styles.featTitle}>{title.split('\n').map((str, index) => <p key={index}>{str}</p>)}</h3>
          <div className={styles.iconWrapper}>
            {
              type === FeatureType.HEALING ? <Healing className={styles.icon} /> :
                type === FeatureType.ADOPT ? <Adopt className={styles.icon} /> :
                  type === FeatureType.BUSINESS ? <Business className={styles.icon} /> : <Event className={styles.icon} />
            }
          </div>
          <span className={styles.content}>{content}</span>
        </div> :
        <div className={styles.featureBox}>
          <div className={styles.iconWrapper}>
            {
              type === FeatureType.HEALING ? <Healing className={styles.icon} /> :
                type === FeatureType.ADOPT ? <Adopt className={styles.icon} /> :
                  type === FeatureType.BUSINESS ? <Business className={styles.icon} /> : <Event className={styles.icon} />
            }
          </div>
          <h3 className={styles.featTitle}>{title}</h3>
        </div>
    }
  </>
}

class FeatureBoxParams {
  title: String = '유기 동물 구조, 치료 및 보호';
  type: FeatureType = FeatureType.HEALING;
  content: String = '유기동물을 구조한 후, 연계병원을 통하여 예방접종을 시행하며, 훈련사로부터 행동적 문제를 치료하는 등 구조된 유기동물을 다방면으로 케어하고 있습니다.';
}

enum FeatureType {
  HEALING,
  ADOPT,
  BUSINESS,
  EVENT,
}