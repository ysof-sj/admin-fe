import { accessTokenState, userInfoState } from '@atom/authAtom'
import { ILoginRequest } from '@domain/auth/type'
import FormContainer from '@src/components/auth/form-container'
import LoginForm from '@src/components/auth/login-form'
import { APILogin } from '@src/services/auth'
import { isEmpty } from 'lodash'
import { useSetRecoilState } from 'recoil'

const LoginV = () => {
  const setAccessToken = useSetRecoilState(accessTokenState)
  const setInfoUser = useSetRecoilState(userInfoState)
  const onLogin = async (val: ILoginRequest) => {
    const data = await APILogin(val)
    if (!isEmpty(data)) {
      setAccessToken(data.access_token)
      setInfoUser(data.user)
    }
  }

  return (
    <div className='h-screen bg-[#F9FEFF] px-4 pt-[85px] md:pt-[100px]'>
      <FormContainer title='BTC YSOF' des='Vui lòng nhập thông tin để đăng nhập vào tài khoản của bạn'>
        <LoginForm onLogin={onLogin} />
      </FormContainer>
    </div>
  )
}

export default LoginV
