import authReducer from './authReducer'
import contentReducer from './contentReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


const rootReducer = combineReducers({
    // auth: authReducer,
    memos: contentReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer