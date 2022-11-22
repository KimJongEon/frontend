import {configureStore, createSlice} from '@reduxjs/toolkit';

// productList : DB에서 상품 목록을 가져온 후 changeProductList
let productList = createSlice({
    name : 'productList',
    initialState : [],
    reducers : {
        // 변경
        changeProductList(state, action){
            // console.log('test')
            return action.payload
        }
    }
})

// orderHistory : DB에서 주문 내역을 가져온 후 changeOrderHistory
let orderHistory = createSlice({
    name : 'orderHistory',
    initialState : [],
    reducers : {
        // 변경
        changeOrderHistory(state, action){
            return action.payload
        }
    }
})

// orderList : 주문 화면에서 상품 선택 및 개수 확인
let orderList = createSlice({
    name : 'orderList', // state 이름
    initialState : // 초기 값
        [],
    reducers :{ // state 수정 함수
        //추가
        pushOrderList(state, action){
            
            state.push(action.payload)
        },

        //변경
        changeOrderList(state, action){
            return action.payload
        }
    }
})

// orderHistoryDetail : 주문 내역 클릭시 주문 상세 내역 확인
let orderHistoryDetail = createSlice({
    name : 'orderHistoryDetail',
    initialState : {},
    reducers : {
        changeOrderHistoryDetail(state, action){
            return action.payload
        }
    }
})

// 여기에 만든거 등록 해야 함 
export default configureStore({
    reducer:{
        orderList : orderList.reducer, // .reduer 붙여야 등록 완료 (문법임)
        productList : productList.reducer,
        orderHistory : orderHistory.reducer,
        orderHistoryDetail : orderHistoryDetail.reducer
    }
})


// state 수정 함수 등록 해야 함
export let { pushOrderList, changeOrderList } = orderList.actions;
export let { changeProductList } = productList.actions;
export let { changeOrderHistory } = orderHistory.actions;
export let { changeOrderHistoryDetail } = orderHistoryDetail.actions;
