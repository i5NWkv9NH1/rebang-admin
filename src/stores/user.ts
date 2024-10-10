// stores/auth.ts
import { apiAuth } from '@/api'
import type { Account, SigninPayload, SignupPayload, Tokens } from '@/types'
import { defineStore } from 'pinia'
import { usePermissionStore } from './permissions'

//#region
const defaultAccount: Account = {
  id: '',
  name: '',
  username: '',
  roles: [],
  organizations: [],
  profile: {
    status: 'Enabled',
    gender: 'Female',
    email: '',
    phone: '',
    address: '',
    avatarUrl: '',
    bannerurl: '',
    bio: '',
    website: '',
    location: '',
    socialMediaLinks: {},
    id: '',
    createdAt: '',
    updatedAt: ''
  },
  password: '',
  createdAt: '',
  updatedAt: ''
}
//#endregion

export const useUserStore = defineStore(
  'user',
  () => {
    const logger = (fnName: string, ...rest: string[]) => `${useUserStore.name}::${fnName}::${rest}`
    const router = useRouter()
    const { setPermissions, clearPermissions } = usePermissionStore()

    const tokens = ref<Tokens>({
      accessToken: '',
      refreshToken: ''
    })
    const account = ref<Account>({ ...defaultAccount })

    function setTokens(_token: Tokens) {
      tokens.value = _token
    }
    function clearTokens() {
      tokens.value = { accessToken: '', refreshToken: '' }
    }
    function setAccount(_account: Account) {
      account.value = _account
    }
    function clearAccount() {
      account.value = { ...defaultAccount }
    }

    async function refresh() {
      try {
        const response = await apiAuth.refreshToken({
          refreshToken: tokens.value.refreshToken
        })
        setTokens(response.data.result.tokens)
        setAccount(response.data.result.account)
      } catch (error) {
        clearTokens()
        clearAccount()
        clearPermissions()
        router.push('/auth/signin')
        throw new Error(logger(refresh.name, 'Token Expire'))
      }
    }

    async function signin(payload: SigninPayload) {
      try {
        const response = await apiAuth.signin(payload)
        setTokens(response.data.result.tokens)
        setAccount(response.data.result.account)
      } catch (error) {
        throw new Error(logger(signin.name, 'failed'))
      }
    }

    async function signup(payload: SignupPayload) {
      try {
        const response = await apiAuth.signup(payload)
        setTokens(response.data.result.tokens)
        setAccount(response.data.result.account)
      } catch {
        throw new Error(logger(signup.name, 'failed'))
      }
    }

    async function logout() {
      try {
        await apiAuth.logout(tokens.value)
        clearTokens()
        clearAccount()
        clearPermissions()
        router.push('/auth/signin')
      } catch (error) {
        throw new Error(logger(logout.name, 'failed'))
      }
    }

    async function findMe() {
      try {
        const response = await apiAuth.findMe()
        setAccount(response.data.result.account)
        setPermissions(response.data.result.permissions)
      } catch (error) {
        throw new Error(logger(findMe.name, 'failed'))
      }
    }

    const isAuthenticated = computed(() => !!tokens.value.accessToken)

    return {
      /**
       * * state
       */
      // prettier-ignore
      tokens,
      account,
      isAuthenticated,
      /**
       * * actions
       */
      clearTokens,
      signin,
      signup,
      refresh,
      logout,
      findMe
    }
  },
  { persist: true }
)

export const useAuthStore = useUserStore
