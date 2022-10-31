import {configureStore, createSlice} from '@reduxjs/toolkit';


let productCount = createSlice({
    // state 이름
    name : 'productCount',
    
    // 값
    initialState : '1'

})

// 여기에 만든거 등록 해야 함 
export default configureStore({
    reducer:{
        productCount : productCount.reducer // .reduer 붙여야 등록 완료 (문법임)
    }
})