import { userInfoState } from '@atom/authAtom'
import { currentSeasonState } from '@atom/seasonAtom'
import { EAdminRole } from '@domain/admin/type'
import { includes, some } from 'lodash'
import { getRecoil } from 'recoil-nexus'

export const hasMatch = <T>(arrayA: T[], arrayB: T[]): boolean => {
  return some(arrayA, (item) => includes(arrayB, item))
}

export const isSuperAdmin = (requiredActive?: boolean) => {
  const currentSeason = getRecoil(currentSeasonState)
  const userInfo = getRecoil(userInfoState)

  if (userInfo) {
    if (userInfo.roles.includes(EAdminRole.ADMIN)) return true
    if (userInfo.roles.includes(EAdminRole.BDH)) {
      if (requiredActive && userInfo.latest_season !== currentSeason.season) return false
      else return true
    }
  }
  return false
}
