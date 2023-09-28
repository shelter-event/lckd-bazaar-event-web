export class CardParameter {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly isActive: boolean = false,
  ) { }
}

export const copyWithCard = (card: CardParameter) => {
  return new CardParameter(card.id, card.name, !card.isActive)
}

export const cardParameters = [
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