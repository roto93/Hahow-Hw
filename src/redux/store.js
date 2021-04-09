import { createStore } from 'redux'
import { rootReducer } from '../redux/reducer/index'

export default function configureStore() {     //建立一個函數給App使用
    let store = createStore(rootReducer)      //用createStare()建立一個Redux-store，裡面放一個reducer: rootReducer
    //console.log(store.getState())
    return store
}