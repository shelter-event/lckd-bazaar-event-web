import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { shuffleArray } from '../../common/ShuffleArray';
import { CardParameter, cardParameters, copyWithCard } from './CardParameters';
import MatchingCard from './MatchingCard';
import { MatchingGameButton, MatchingLevelButtonType } from './MatchingGameButton';
import MatchingOnBoard from './MatchingOnBoard';
import styles from './puppiesMatchingGame.module.scss';
import { useClickCounterStore } from '../../zustand/state/ClickCounterState';

const MatchingGame = ({
  level = MatchingLevelButtonType.ROW,
  isOnBoarding,
  useHint = false,
  retry = false,
  setUseHint, setRetry
}: any) => {
  const isPc = useMediaQuery({
    query: "(min-width:1024px)"
  })

  const [cards, setCards] = useState([
    new CardParameter(1, '벤', require('../../assets/main/matching/card/벤.webp')),
    new CardParameter(2, '가을이', require('../../assets/main/matching/card/가을.webp')),
    new CardParameter(3, '미소', require('../../assets/main/matching/card/미소.webp')),
    new CardParameter(4, '콩콩이', require('../../assets/main/matching/card/콩콩.webp')),
    new CardParameter(5, '훈이', require('../../assets/main/matching/card/훈이.webp')),
    new CardParameter(6, '마리', require('../../assets/main/matching/card/마리.webp')),
    new CardParameter(7, '돌체', require('../../assets/main/matching/card/돌체.webp')),
    new CardParameter(8, '깜순', require('../../assets/main/matching/card/깜순.webp')),
    new CardParameter(9, '햇살', require('../../assets/main/matching/card/햇살.webp')),
    new CardParameter(10, '쿠키', require('../../assets/main/matching/card/쿠키.webp')),
  ])

  const [clickCardIds, setClickCardIds] = useState([] as number[])
  const [clickCount, setClickCount] = useState(0)
  const [successCardIds, setSuccessCardIds] = useState([] as number[])
  const { click } = useClickCounterStore()

  useEffect(() => {
    shuffleCards()
  }, [level])

  useEffect(() => {
    setCards((prevCards) => prevCards.map((card) => new CardParameter(card.id, card.name, card.url, false, card.type)))
    setClickCount(0)
    setSuccessCardIds([])
    setClickCardIds([])
    shuffleCards()
  }, [retry])

  useEffect(() => {
    if (useHint) {
      setCards((prevCard) => prevCard.map((card) =>
        new CardParameter(card.id, card.name, card.url, true, card.type))
      )
    } else {
      setCards((prevCard) => prevCard.map((card) =>
        successCardIds.includes(card.id)
          ? new CardParameter(card.id, card.name, card.url, true, card.type)
          : new CardParameter(card.id, card.name, card.url, false, card.type)
      ))
    }
  }, [useHint])

  const shuffleCards = () => {
    if (level === MatchingLevelButtonType.HIGH) {
      const shuffle = shuffleArray(cardParameters).splice(0, 6)

      setCards(
        shuffleArray(
          [...shuffle.map((card) => new CardParameter(card.id + cardParameters.length, card.name, card.url, false, 'name')),
          ...shuffle]
        )
      )
    } else if (level === MatchingLevelButtonType.ROW) {
      const shuffle = shuffleArray(cardParameters).splice(0, 2)

      setCards(
        shuffleArray(
          [...shuffle.map((card) => new CardParameter(card.id + cardParameters.length, card.name, card.url, false, 'name')),
          ...shuffle]
        )
      )
    }
  }

  const clickCard = (card: CardParameter) => {
    if (card.isActive || clickCount === 2) return
    const copyClickCardIds = [...clickCardIds, card.id]
    setClickCount((prevCount) => prevCount + 1)
    setClickCardIds(copyClickCardIds)
    setCopyCards(copyWithCard(card))

    if (clickCount + 1 < 2) return
    isMatchCards(copyClickCardIds);
  }

  const setCopyCards = (card: CardParameter) => {
    setCards((prevCards) => prevCards.map((c) => {
      if (c.id === card.id) return card
      return c
    }))
  }

  const isMatchCards = (copyClickCardIds: number[]) => {
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
        return new CardParameter(card.id, card.name, card.url, false, card.type);
      }));
      setClickCount(0);
      setClickCardIds([] as number[]);
    }, 500);
  }

  const levelStyle = level === MatchingLevelButtonType.ROW ? styles.row : level === MatchingLevelButtonType.MIDDLE ? styles.middle : styles.high

  return <div className={styles.matchingGameWrapper}>

    {
      isPc ?  <div className={styles.matchingGameButtonWrapper}>
        <MatchingGameButton
          title={'힌트보기'}
          onClick={() => {
            click({clickId: 'Main - 쉼터 아이들 맞추기 게임 - 힌트보기'})
            if (useHint) return
            setUseHint(true)
            setTimeout(() => { setUseHint(false) }, 3000)
          }}
        />
        <MatchingGameButton
          title={'다시하기'}
          onClick={() => {
            click({clickId: 'Main - 쉼터 아이들 맞추기 게임 - 다시하기'})
            setUseHint(false)
            setRetry(!retry)
          }}
        />
      </div> : <></>
    }
    <div className={styles.matchingGameBox}>
      <div className={`${styles.gameOnBoard} ${isOnBoarding ? styles.active : styles.inactive}`}>
        <h3 className={styles.onBoardTitle}>쉼터 아이들 특징 맞추기 게임</h3>
        <MatchingOnBoard />
      </div>

      <div className={`${styles.cardWrapper} ${levelStyle}`}>
        {
          cards.map((card, index): any => {
            return <MatchingCard
              key={index}
              id={card.id}
              level={level}
              name={card.name}
              url={card.url}
              isActive={card.isActive}
              type={card.type}
              onClick={() => clickCard(card)}
            />
          })
        }
      </div>
    </div>
  </div>
}

export default MatchingGame
