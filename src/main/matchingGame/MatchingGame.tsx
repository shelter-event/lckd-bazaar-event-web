import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Modal from '../../common/Modal';
import { shuffleArray } from '../../common/ShuffleArray';
import { useClickCounterStore } from '../../zustand/state/ClickCounterState';
import { useMatchingGameStore } from '../../zustand/state/MatchingGameState';
import { CardParameter, cardParameters, copyWithCard } from './CardParameters';
import MatchingCard from './MatchingCard';
import { MatchingGameButton, MatchingLevelButton, MatchingLevelButtonType } from './MatchingGameButton';
import MatchingOnBoard from './MatchingOnBoard';
import styles from './puppiesMatchingGame.module.scss';

const MatchingGame = ({
  isOnBoarding,
  useHint = false,
  retry = false,
  clickCount = 0,
  setUseHint, setRetry, setClickCount,
}: any) => {
  const [level, setLevel] = useState(MatchingLevelButtonType.ROW)
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
  const [successCardIds, setSuccessCardIds] = useState([] as number[])
  const [modalActiveStates, setModalActiveStates] = useState([false, false] as boolean[])
  const [lotteryTexts, setLotteryTexts] = useState([
    '0번째로 게임을 성공하였습니다.',
    '바자회에 오셔서 상품을 받아가세요.'
  ])
  const { click } = useClickCounterStore()

  const { postMatchingGameExecute, postLottery, matchingGameCounter, matchingGameLotteryIndex } = useMatchingGameStore()

  useEffect(() => {
    setCards((prevCards) => prevCards.map((card) => new CardParameter(card.id, card.name, card.url, false, card.type)))
    setClickCount(0)
    setSuccessCardIds([])
    setClickCardIds([])
    shuffleCards()
  }, [retry, level])

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

  useEffect(() => {
    if (cards.length !== successCardIds.length) return

    setTimeout(() => {
      setLotteryTexts([
        `${matchingGameCounter.data + 1}번째로 게임에 성공하였습니다.`,
        lotteryTexts[1],
      ])
      setModalActiveStates([true, modalActiveStates[1]])
      setRetry(!retry)
      postMatchingGameExecute()

      if (matchingGameLotteryIndex.data.includes(matchingGameCounter.data + 1)) {
        setModalActiveStates([modalActiveStates[0], true])
        setLotteryTexts([
          lotteryTexts[0],
          `${matchingGameCounter.data + 1}번째로 게임에 성공하였습니다. \n 환영합니다.`
        ])
        postLottery({ name: 'LCKD' })
      }
    }, 320)
  }, [successCardIds])

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
    setClickCount((prevCount: number) => prevCount + 1)
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
    <Modal
      style={{ display: modalActiveStates[0] ? 'flex' : 'none' }}
      text={lotteryTexts[0]}
      onClick={() => {
        console.log(modalActiveStates)
        setModalActiveStates([false, modalActiveStates[1]])
      }}
    />
    <Modal
      style={{ display: modalActiveStates[1] ? 'flex' : 'none' }}
      text={lotteryTexts[1]}
      onClick={() => {
        setModalActiveStates([modalActiveStates[0], false])
      }}
    />

    <div className={styles.matchingGameButtonWrapper}>
      <div className={styles.matchingGameLeftButtonWrapper}>
        <MatchingGameButton
          title={'힌트보기'}
          onClick={() => {
            click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 힌트보기' })
            if (useHint) return
            else if (clickCount !== 0) {
              alert('카드를 확인 중인 상태에서는 힌트보기를 할 수 없어요!')
              return
            }
            setUseHint(true)
            setTimeout(() => { setUseHint(false) }, 3000)
          }}
        />
        <MatchingGameButton
          title={'다시하기'}
          onClick={() => {
            if (useHint) {
              alert('힌트보기 상태에서는 다시하기를 할 수 없어요!')
              return
            }
            setUseHint(false)
            setRetry(!retry)
            click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 다시하기' })
          }}
        />
      </div>
      <div className={styles.matchingGameWrapperCenter}>
        {successCardIds.length / 2} / {level == MatchingLevelButtonType.HIGH ? '6' : '2'}
      </div>
      <div className={styles.matchingGameRightButtonWrapper}>
        <MatchingLevelButton
          onClick={() => {
            setUseHint(false)
            setLevel(MatchingLevelButtonType.HIGH)
            click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 상' })
          }}
          type={MatchingLevelButtonType.HIGH}
        />
        <MatchingLevelButton
          onClick={() => {
            setUseHint(false)
            setLevel(MatchingLevelButtonType.ROW)
            click({ clickId: 'Main - 쉼터 아이들 맞추기 게임 - 하' })
          }}
          type={MatchingLevelButtonType.ROW}
        />
      </div>
    </div>

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
