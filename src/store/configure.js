/**
 * 스토어 만드는 함수 만들기
 */
import { createStore } from 'redux'
import modules from './modules'

const configure = () => {
  const store = createStore(modules)
  return store
}

export default configure