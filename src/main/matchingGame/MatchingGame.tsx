import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { CardParameter, cardParameters, copyWithCard } from './CardParameters';
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

  useEffect(() => {
    shuffleCards()
  }, [level])

  useEffect(() => {
    setCards((prevCards) => prevCards.map((card) => new CardParameter(card.id, card.name, false)))
    setClickCount(0)
    setSuccessCardIds([])
    setClickCardIds([])
    shuffleCards()
  }, [retry])

  useEffect(() => {
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

  const shuffleCards = () => {
    if (level === MatchingLevelButtonType.HIGH) {
      setCards(shuffleArray(
        shuffleArray(cardParameters).splice(0, 12).flat()
      ))
    } else if (level === MatchingLevelButtonType.MIDDLE) {
      setCards(shuffleArray(
        shuffleArray(cardParameters).splice(0, 8).flat()
      ))
    } else if (level === MatchingLevelButtonType.ROW) {
      setCards(shuffleArray(
        shuffleArray(cardParameters).splice(0, 4).flat()
      ))
    }
  }

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

const shuffleArray = (array: any) => {
  const shuffled = [...array]
  for (let index = shuffled.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[j]] = [shuffled[j], shuffled[index]];
  }
  return shuffled
}

