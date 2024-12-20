import { IAdminInResponse } from '@domain/admin/type'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const accessTokenState = atom<string>({
  key: 'accessToken',
  default: '',
  effects_UNSTABLE: [persistAtom],
})

export const userInfoState = atom<IAdminInResponse>({
  key: 'userInfo',
  default: undefined,
})
