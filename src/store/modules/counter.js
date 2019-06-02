// /**
//  * 액션 타입 지정
//  */
// const INCREMENT = 'counter/INCREMENT'
// const DECREMENT = 'counter/DECREMENT'

// /**
//  * 액션 함수 지정
//  */
// export function increment() {
//   return { type: INCREMENT }
// }

// export function decrement() {
//   return { type: DECREMENT }
// }

// // 모듈의 초기 상태를 정의
// const initState = {
//   number: 0
// }

// /**
//  * 리듀서를 생성하여 export
//  */
// export default function reducer(state = initState, action) {
//   switch (action.type) {
//     case INCREMENT:
//       return { number: number + 1 }
//     case DECREMENT:
//       return { number: number - 1 }
//     default:
//       return initState
//   }
// }

/* ========================================= */
/**
 * redux-actions의 createAction이라는 함수를 사용하면
 * 액션 생성 함수코드를 다음과 같이 작성 할 수 있게 됩니다
 */
// import { createAction } from 'redux-actions'

// // 액션 타입을 정의해줍니다
// const INCREMENT = 'counter/INCREMENT'
// const DECREMENT = 'counter/DECREMENT'

// // 액션 생성 함수를 생성
// export const increment = createAction(INCREMENT)
// export const decrement = createAction(DECREMENT)

// // 모듈의 초기 상태를 정의
// const initState = { number: 0 }

// // reducer
// export default handleActions({
//   [INCREMENT]: (state, action) => {
//     return { number: state.number + 1 }
//   },
//   [DECREMENT]: (state) => { number: state.number - 1 }
// }, initState)

import { createAction, handleActions } from 'redux-actions'

const INCREMENT = 'counter/INCREMENT'
const DECREMENT = 'counter/DECREMENT'

export const increment = createAction(INCREMENT)
export const decrement = createAction(DECREMENT)

const initState = { number: 0 }

export default handleActions({
  [INCREMENT]: (state, action) => {
      return { number: state.number + 1 }
  },
  [DECREMENT]: (state) => ({ number: state.number - 1 })
}, initState)