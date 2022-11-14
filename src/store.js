import {configureStore, createSlice} from '@reduxjs/toolkit';

// productList : DB에서 상품 목록을 가져온다
let productList = createSlice({
    name : 'productList',
    initialState : [],
    reducers : {
        //변경
        changeProductList(state, action){
            // console.log('test')
            return action.payload
        }
    }
})

// productCount : 주문 화면에서 상품 선택 및 개수 확인
let productCount = createSlice({
    name : 'productCount', // state 이름
    initialState : // 초기 값
        [],
    reducers :{ // state 수정 함수
        //추가
        pushProductCount(state, action){
            
            state.push(action.payload)
        },

        //변경
        changeProductCount(state, action){
            return action.payload
        }
    }
})

// 여기에 만든거 등록 해야 함 
export default configureStore({
    reducer:{
        productCount : productCount.reducer, // .reduer 붙여야 등록 완료 (문법임)
        productList : productList.reducer
    }
})


// state 수정 함수 등록 해야 함
export let { pushProductCount, changeProductCount } = productCount.actions;
export let { changeProductList } = productList.actions;
