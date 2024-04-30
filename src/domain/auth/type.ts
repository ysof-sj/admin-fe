import { IAdmin } from '../admin/type'

export interface ILoginRequest {
  email: string
  password: string
}

export interface ILoginResponse {
  access_token: string
  user: IAdmin
}
