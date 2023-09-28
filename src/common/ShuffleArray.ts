export const shuffleArray = (array: any) => {
  const shuffled = [...array]
  for (let index = shuffled.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[j]] = [shuffled[j], shuffled[index]];
  }
  return shuffled
}