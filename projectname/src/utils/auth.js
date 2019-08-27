// import Cookies from 'js-cookie'

const TokenKey = 'eleToken'

export function getToken () {
  // return Cookies.get(TokenKey)
  return localStorage.eleToken
}

export function setToken (token) {
  // return Cookies.set(TokenKey, token)
  return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
  return localStorage.removeItem(TokenKey)
}
