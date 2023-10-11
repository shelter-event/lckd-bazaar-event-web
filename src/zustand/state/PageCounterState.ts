import { AxiosResponse } from "axios";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { getVisitPageCounter, visitPage } from "../../api/PageCountApi";
import ZustandState from "./ZustandState";

export interface PageCounterState {
  mainVisitCounter: ZustandState<VisitCounter>,
  getVisitPageCounter: ({ page }: any) => void,
  visitPage: ({ page }: any) => void,
}

export const usePageCounterStore = create<PageCounterState>()(
  devtools(
    persist(
      (set) => ({
        mainVisitCounter: {
          data: {
            todayVisitCount: 0,
            totalVisitCount: 0,
          } as VisitCounter,
          loading: false,
          error: null,
        },

        getVisitPageCounter: async ({ page }: any) => {
          set({
            mainVisitCounter: {
              data: {
                todayVisitCount: 0,
                totalVisitCount: 0,
              } as VisitCounter, loading: true, error: null
            }
          })

          try {
            const response: AxiosResponse<any> = await getVisitPageCounter({ page })
            set({ mainVisitCounter: { data: response.data, loading: false, error: null } })
          } catch (error) {
            set({
              mainVisitCounter: {
                data: {
                  todayVisitCount: 0,
                  totalVisitCount: 0,
                } as VisitCounter, loading: false, error
              }
            })
          }
        },

        visitPage: async ({ page }: any) => {
          try { await visitPage({ page }) }
          catch (error) { 
            console.log(error)
           }
        },

      }), {
      name: 'page-counter-store'
    })
  )
)

export class VisitCounter {
  constructor(
    readonly todayVisitCount: number,
    readonly totalVisitCount: number,
  ) { }
}