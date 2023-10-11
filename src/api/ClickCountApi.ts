import { http } from "./http"

export const getClickCounter = async ({clickId}: any) => {
  const uri = `/api/click/count?clickId=${clickId??'Main'}`
  return http.get(uri)
}

export const click = async ({ clickId }: any) => {
  const uri = '/api/click/count'
  return http.post(uri, { clickId: clickId ?? 'Main' })
}