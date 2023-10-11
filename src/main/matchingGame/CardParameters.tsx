export class CardParameter {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly url: string,
    readonly isActive: boolean = false,
    readonly type: string = 'image',
  ) { }
}

export const copyWithCard = (card: CardParameter) => {
  return new CardParameter(card.id, card.name, card.url, !card.isActive, card.type)
}

export const cardParameters = [
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
  new CardParameter(11, '라니', require('../../assets/main/matching/card/라니.webp')),
]