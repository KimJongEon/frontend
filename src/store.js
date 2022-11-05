import {configureStore, createSlice} from '@reduxjs/toolkit';


let productCount = createSlice({
    // state 이름
    name : 'productCount',
    
    // 값
    initialState : 
        [
        
        ],

    // state 수정 함수
    reducers :{
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
        productCount : productCount.reducer // .reduer 붙여야 등록 완료 (문법임)
    }
})


// state 수정 함수 등록 해야 함
export let { pushProductCount, changeProductCount } = productCount.actions