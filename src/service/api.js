import {create} from 'apisauce'
import {useSelector} from "react-redux";
import {setUser, userSelector} from "../redux/slices/user.slice";
import {useNavigate} from 'react-router-dom'
import {toast} from "react-toastify";

const config = {
  baseURL: process.env.REACT_APP_MODE === 'local' ? 'http://127.0.0.1:3001/api' : 'https://example.com/api',
  headers: {
    "Content-Type": "application/json"
  }
}

const api = create(config)

export const login = (payload) => api.post('/login', {...payload})
export const signUp = (payload) => api.post('/signup', {...payload})

export const useSignedApi = () => {
  const {accessToken, expiresAt} = useSelector(userSelector)
  const navigate = useNavigate()

  const prvApi = create({
    baseURL: config.baseURL,
    headers: {
      "Content-Type": config.headers["Content-Type"],
      accessToken: accessToken
    }
  })

  if (Date.now() > expiresAt) {
    toast('Access token was expired')
    setUser({
      accessToken: '',
      expiresAt: ''
    })
    setTimeout(() => {
      navigate('/logoin')
    }, 500)
    return {}
  }

  const signOut = () => prvApi.post('/logout')

  return {
    signOut,
  }
}