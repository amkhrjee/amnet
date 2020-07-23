const initState = {
    memos: 
        [
            {id: '1', content: 'This is spmmeyhidf esfesfFeFf asfddfffg fgfwfegffes fgffggf wf'},
            {id: '2', content: 'This is spmmeyhidf esfesfFeFf asfddfffg fgfwfegffes fgffggf wf'}
        ]
}


const contentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MEMO':
            console.log('created memo', action.memo);
            return state
        case 'ADD_MEMO_ERR':
            console.log('task failed successfully!', action.err);
            return state;
    
        default:
            return state
    }
}

export default contentReducer