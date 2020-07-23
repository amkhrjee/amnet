export const addMemo = (memo) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async call to database
        const  firestore = getFirestore()
        firestore.collection('memos').add({
            ...memo,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'ADD_MEMO', memo})
        }).catch((err) => {
            dispatch({type: 'ADD_MEMO_ERR', err})
        })
    }
}