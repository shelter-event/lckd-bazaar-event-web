import { http } from "./http"

export const getVisitPageCounter = async ({page}: any) => {
  const uri = `/api/page/count?page=${page}`
  return http.get(uri)
}

export const visitPage = async ({ page }: any) => {
  const uri = '/api/page/count'
  return http.post(uri, { page: page ?? 'Main' })
}