import { http } from './http';

export const postMatchingGameExecute = async () => {
  return http.post('/api/matching/game/count')
}

export const getMatchingGameCount = async () => {
  return http.get('/api/matching/game/count')
}

export const postLottery = async ({ name }: any) => {
  const uri = '/api/matching/game/lottery'
  return http.post(uri, { name: name ?? 'Main' })
}

export const getMatchingGameLotteryIndex = async () => {
  return http.get('/api/matching/game/lottery/index')
}