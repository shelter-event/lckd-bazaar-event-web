import { AxiosResponse } from "axios";
import { create } from "zustand";
import { devtools, persist } from 'zustand/middleware';
import { getMatchingGameCount, getMatchingGameLotteryIndex, postLottery, postMatchingGameExecute } from "../../api/MatchingGameApi";
import ZustandState from "./ZustandState";

export interface MatchingGameState {
  matchingGameCounter: ZustandState<number>,
  matchingGameLotteryIndex: ZustandState<number[]>,

  getMatchingGameCounter: () => void,
  getMatchingGameLotteryIndex: () => void,

  postMatchingGameExecute: () => void,
  postLottery: ({ name }: any) => void,
}

export const useMatchingGameStore = create<MatchingGameState>()(
  devtools(
    persist(
      (set, getItem) => ({ 
        matchingGameCounter: {
          data: 0,
          loading: false,
          error: null,
        },

        matchingGameLotteryIndex: {
          data: [],
          loading: false,
          error: null,
        },

        getMatchingGameCounter: async () => {
          set({
            matchingGameCounter: {
              data: 0,
              loading: false,
              error: null,
            }
          })

          try {
            const response: AxiosResponse<any> = await getMatchingGameCount()
            set({
              matchingGameCounter: {
                data: response.data,
                loading: false,
                error: null,
              }
            })

          } catch (error) {
            set({
              matchingGameCounter: {
                data: 0,
                loading: false,
                error,
              }
            })
          }
        },

        getMatchingGameLotteryIndex: async () => {
          set({
            matchingGameLotteryIndex: {
              data: [] as number[],
              loading: false,
              error: null,
            }
          })

          try {
            const response: AxiosResponse<any> = await getMatchingGameLotteryIndex()
            set({
              matchingGameLotteryIndex: {
                data: response.data,
                loading: false,
                error: null,
              }
            })
          } catch (error) {
            set({
              matchingGameLotteryIndex: {
                data: [] as number[],
                loading: false,
                error,
              }
            })
          }
        },

        postMatchingGameExecute: async () => {
          set({
            matchingGameCounter: {
              data: getItem().matchingGameCounter.data + 1,
              loading: false,
              error: null,
            }
          })
          try { await postMatchingGameExecute() }
          catch (error) { }
        },

        postLottery: async ({ name }: any) => {
          try { await postLottery({ name }) }
          catch (error) { }
        },
      }), {
      name: 'matching-game-store'
    })
  )
)


