import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MatchingLevelButtonType } from './MatchingGameButton';
import MatchingOnBoard from './MatchingOnBoard';
import styles from './puppiesMatchingGame.module.scss';


const MatchingGame = ({
  level = MatchingLevelButtonType.ROW,
  isOnBoarding,
  useHint = false,
  retry = false,
}: any) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  })

  const [cards, setCards] = useState([
    new CardParameter(1, '벤'),
    new CardParameter(2, '훈이'),
    new CardParameter(3, '호야'),
    new CardParameter(4, '마리'),
    new CardParameter(5, '벤'),
    new CardParameter(6, '훈이'),
    new CardParameter(7, '호야'),
    new CardParameter(8, '마리'),
  ])
  const [clickCardIds, setClickCardIds] = useState([] as number[])
  const [clickCount, setClickCount] = useState(0)
  const [successCardIds, setSuccessCardIds] = useState([] as number[])

  // useEffect(() => {
  //   if (level === MatchingLevelButtonType.HIGH) {
  //     const copyCards = shuffleArray(baseCards).slice(0, 4)
  //     setCards([...copyCards])
  //   } else if (level === MatchingLevelButtonType.MIDDLE) {
  //     const copyCards = shuffleArray(baseCards).slice(0, 8)

  //     setCards([...copyCards])
  //   } else if (level === MatchingLevelButtonType.ROW) {
  //     const copyCards = shuffleArray(baseCards).slice(0, 16)

  //     setCards([...copyCards])
  //   }
  // }, [level])

  const shuffleCards = () => {
    if (level === MatchingLevelButtonType.HIGH) {

    } else if (level === MatchingLevelButtonType.MIDDLE) {

    } else if (level === MatchingLevelButtonType.ROW) {
      
    }
  }

  useEffect(() => {
    setCards((prevCards) => prevCards.map((card) => new CardParameter(card.id, card.name, false)))
    setClickCount(0)
    setSuccessCardIds([])
    setClickCardIds([])
  }, [retry])

  useEffect(() => {
    console.log(`change useHint: ${useHint}`)
    if (useHint) {
      setCards((prevCard) => prevCard.map((card) =>
        new CardParameter(card.id, card.name, true))
      )
    } else {
      setCards((prevCard) => prevCard.map((card) =>
        successCardIds.includes(card.id)
          ? new CardParameter(card.id, card.name, true)
          : new CardParameter(card.id, card.name, false)
      ))
    }
  }, [useHint])

  // TODO 전체적으로 변경되는 현상 수정
  const clickCard = (card: CardParameter) => {
    if (card.isActive || clickCount === 2) return
    const copyClickCardIds = [...clickCardIds, card.id]
    setClickCount((prevCount) => prevCount + 1)
    setClickCardIds(copyClickCardIds)
    setCopyCards(copyWithCard(card))

    if (clickCount + 1 < 2) return
    checkSuccess(copyClickCardIds);
  }

  const setCopyCards = (card: CardParameter) => {
    setCards((prevCards) => prevCards.map((c) => {
      if (c.id === card.id) return card
      return c
    }))
  }

  const checkSuccess = (copyClickCardIds: number[]) => {
    const selectedCards = cards.filter((c) => copyClickCardIds.includes(c.id));
    if (selectedCards[0].name === selectedCards[1].name) {
      setSuccessCardIds((prevIds) => [...prevIds, selectedCards[0].id, selectedCards[1].id]);
      setClickCount(0)
      setClickCardIds([] as number[])
    } else {
      rollbackCard();
    }
  }

  const rollbackCard = () => {
    setTimeout(() => {
      console.log(clickCardIds)
      setCards((prevCards) => prevCards.map((card) => {
        if (successCardIds.includes(card.id)) return card
        return new CardParameter(card.id, card.name, false);
      }));
      setClickCount(0);
      setClickCardIds([] as number[]);
    }, 500);
  }

  const levelStyle = level === MatchingLevelButtonType.ROW ? styles.row : level === MatchingLevelButtonType.MIDDLE ? styles.middle : styles.high

  return <div className={styles.matchingGameBox}>
    <div className={`${styles.gameOnBoard} ${isOnBoarding ? styles.active : styles.inactive}`}>
      <h3 className={styles.onBoardTitle}>쉼터 아이들 특징 맞추기 게임</h3>
      <MatchingOnBoard />
    </div>

    <div className={`${styles.cardWrapper} ${levelStyle}`}>
      {
        cards.map((card, index): any => {
          return <div key={index}
            className={`${styles.card} ${card.isActive ? styles.active : ''}`}
            onClick={() => clickCard(card)}>
            {
              card.isActive ? <div className={styles.back}>
                {`back:: ${card.id}::${card.name}`}
              </div> : <div className={styles.front}>
                {`front:: ${card.id}::${card.name}`}
              </div>
            }
          </div>
        })
      }
    </div>
  </div>
}

export default MatchingGame

class CardParameter {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly isActive: boolean = false,
  ) { }

}

const copyWithCard = (card: CardParameter) => {
  return new CardParameter(card.id, card.name, !card.isActive)
}

const baseCards = [
  [
    new CardParameter(1, '벤'),
    new CardParameter(2, '벤'),
  ],
  [
    new CardParameter(3, '쿠키네'),
    new CardParameter(4, '쿠키네'),
  ],
  [
    new CardParameter(5, '포포네'),
    new CardParameter(6, '포포네'),
  ],
  [
    new CardParameter(7, '가을'),
    new CardParameter(8, '가을'),
  ],
  [
    new CardParameter(9, '미소'),
    new CardParameter(10, '미소'),
  ],
  [
    new CardParameter(11, '콩콩'),
    new CardParameter(12, '콩콩'),
  ],
  [
    new CardParameter(13, '마리'),
    new CardParameter(14, '마리'),
  ],
  [
    new CardParameter(15, '돌체'),
    new CardParameter(16, '돌체'),
  ],
  [
    new CardParameter(17, '복순'),
    new CardParameter(18, '복순'),
  ],
  [
    new CardParameter(19, '방울'),
    new CardParameter(20, '방울'),
  ],
  [
    new CardParameter(21, '몽구'),
    new CardParameter(22, '몽구'),
  ],
  [
    new CardParameter(23, '햇살이네'),
    new CardParameter(24, '햇살이네'),
  ],
]

const shuffleArray = (array: any) => {
  const shuffled = [...array]
  for (let index = shuffled.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[j]] = [shuffled[j], shuffled[index]];
  }
  return shuffled
}
