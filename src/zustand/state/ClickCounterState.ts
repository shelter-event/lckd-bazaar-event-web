import { AxiosResponse } from "axios";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import ZustandState from "./ZustandState";
import { click, getClickCounter } from "../../api/ClickCountApi";

export interface ClickCounterState {
  mainClickCounter: ZustandState<ClickCounter>,
  getClickCounter: ({ clickId }: any) => void,
  click: ({ clickId }: any) => void,
}

export const useClickCounterStore = create<ClickCounterState>()(
  devtools(
    persist(
      (set) => ({
        mainClickCounter: {
          data: {
            todayClickCount: 0,
            totalClickCount: 0,
          } as ClickCounter,
          loading: false,
          error: null,
        },

        getClickCounter: async ({ clickId }: any) => {
          set({
            mainClickCounter: {
              data: {
                todayClickCount: 0,
                totalClickCount: 0,
              } as ClickCounter, loading: true, error: null
            }
          })

          try {
            const response: AxiosResponse<any> = await getClickCounter({ clickId })
            set({ mainClickCounter: { data: response.data, loading: false, error: null } })
          } catch (error) {
            set({
              mainClickCounter: {
                data: {
                  todayClickCount: 0,
                  totalClickCount: 0,
                } as ClickCounter, loading: false, error
              }
            })
          }
        },

        click: async ({ clickId }: any) => {
          try { await click({ clickId }) }
          catch (error) { 
            console.log(error)
           }
        },

      }), {
      name: 'click-counter-store'
    })
  )
)

export class ClickCounter {
  constructor(
    readonly todayClickCount: number,
    readonly totalClickCount: number,
  ) { }
}