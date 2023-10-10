export class PuppyParameter {
  constructor(
    readonly id: number,
    readonly name: string,
    // 공고번호
    readonly announcementNumber: string,

    readonly mainImageUrl: string,
    readonly profileImageUrl: string,

    // features
    readonly health: string | null,
    readonly dogManner: string | null,
    readonly peopleManner: string | null,
    readonly like: string | null,
    readonly warkingManner: string | null,
    readonly showerManner: string | null,
    readonly isFamily: boolean = false,
  ) { }
}

// 방울이
export const puppyParameters = [
  new PuppyParameter(
    1, '가을이', '#LCKD22_15',
    require('../../assets/main/puppies/modal_profile/가을.webp'),
    require('../../assets/main/puppies/front_profile/가을.webp'),
    null,
    '같은 강아지끼리 사이는 쏘쏘해요!',
    '시작은 낯을 가리지만 곧 사람을 반기는 애교쟁이가 돼요',
    '해먹에 앉아서 사람 손길을 받는 게 제일 좋아요!',
    `사람과 발 맞춰 걸을 줄 아는 똑똑한 친구예요
    큰소리를 무서워하고 비오는 날의 산책은 좋아하지 않아요`,
    '목욕을 비롯한 미용, 귀청소, 옷 입을때도 잘 따라요.',
    false,
  ),
  new PuppyParameter(
    2, '미소', '#22_0584',
    require('../../assets/main/puppies/modal_profile/미소.webp'),
    require('../../assets/main/puppies/front_profile/미소.webp'),
    null,
    null,
    '사람도 뽀뽀도 좋아해요!',
    '머리 쓰다듬 받기, 흙파는것을 좋아해요! ',
    `산책을 좋아하지만 집중해주세요! 줄을 놓칠 수 있어요.
    큰소리를 무서워하고 비오는 날의 산책은 좋아하지 않아요.`,
    '목욕을 비롯한 미용, 귀청소, 옷 입을때도 잘 따라요',
    false,
  ),
  new PuppyParameter(
    3, '벤', '#23_0274',
    require('../../assets/main/puppies/modal_profile/벤.webp'),
    require('../../assets/main/puppies/front_profile/벤.webp'),
    null,
    '서열놀이 없이 사회성이 너무 좋아요! 다만 다른친구들의 거절사인을 배워야 해요',
    null,
    '터그놀이와 공놀이를 사랑하고 삑삑이 인형 등 장난감',
    `비가 와도 산책이 좋아요. 몸집이 커서 산책 훈련은 필수!
    (간식 욕심이 있어 훈련하면 빨리 익혀요!) `,
    '목욕을 잘하지만 피부가 예민하기 때문에 관리가 필요해요',
    false,
  ),
  new PuppyParameter(
    4, '콩콩이', '#22_0873',
    require('../../assets/main/puppies/modal_profile/콩콩.webp'),
    require('../../assets/main/puppies/front_profile/콩콩.webp'),
    null,
    '친구들이 옆에서 소란피우는건 별로에요! 조용히 쉬는걸 좋아하는 차분한 멍',
    '사람들이 너무 좋아요 정이 너무 많은 친구랍니다',
    '쇼파랑 침대가 좋아요!',
    `가끔 어려움. 고양이를 쫓으려 하고 다른 강아지가 보이면 흥분하여 줄당김이 조금 있어요`,
    '목욕과 빗질을 잘 받아요.',
    false,
  ),
  new PuppyParameter(
    5, '훈이', '#23_0280',
    require('../../assets/main/puppies/modal_profile/훈이.webp'),
    require('../../assets/main/puppies/front_profile/훈이.webp'),
    '사상충 치료 중이에요',
    '인싸훈이!  사랑주는 것도 받는 것도 좋아해요',
    '사람좋아! 내 미소를 칭찬해주세요',
    '터그놀이랑 공을 좋아해서 방 안에 항상 가져다 둬요.',
    `현재 고양이를 보면 흥분해서 이중 리드줄을 하고 산책 가요.
    그걸 제외하고는 신호등도 리드줄 신호도 잘 지켜요`,
    '목욕을 잘하지만 털이 물 흡수가 어려워 관리가 필요해요',
    false,
  ),
  new PuppyParameter(
    6, '마리', '#23_0227',
    require('../../assets/main/puppies/modal_profile/마리.webp'),
    require('../../assets/main/puppies/front_profile/마리.webp'),
    '난소암과 사상충 치료 중이에요',
    '살짝 예민한 편이라 시끄러운 건 질색인 점잖은 어른강아지예요!',
    '사람좋아!',
    '조용한 가정이요!',
    '매우쉬워요! 산책 천재 강아지죠',
    '목욕, 미용이 젠틀한 강아지를 만든다! ',
    false,
  ),
  new PuppyParameter(
    7, '돌체', '#23_0382',
    require('../../assets/main/puppies/modal_profile/돌체.webp'),
    require('../../assets/main/puppies/front_profile/돌체.webp'),
    null,
    '애정이 많지만 눈치가 없을 때도 있어요',
    '사람좋아! 안아주는 걸 좋아해요',
    '달리기와 장난감! 흙 파기와 판 흙에서 찜질을 좋아해요.',
    `줄당김이 조금 있는 편, 간식에 대한 집중력이 좋아 콜링이
    꽤 되는 편입니다. `,
    '미용도 목욕도 잘하는 편이에요 ',
    false,
  ),
]

// export const families = [
//   new PuppyParameter(
//     11, '포포네', '#LCKD22_15',
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif', 
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif',
//     null,
//     '',
//     '',
//     '',
//     '',
//     '',
//     true,
//   ),
//   new PuppyParameter(
//     12, '햇살이네', '#LCKD22_15',
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif', 
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif',
//     null,
//     '',
//     '',
//     '',
//     '',
//     '',
//     true,
//   ),
//   new PuppyParameter(
//     13, '쿠키네', '#LCKD22_15',
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif', 
//     'https://www.circularbusiness.or.kr/src/images/noImg.gif',
//     null,
//     '',
//     '',
//     '',
//     '',
//     '',
//     true,
//   ),
// ]