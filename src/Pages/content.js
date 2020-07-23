import React from 'react';
import Post from '../Components/post';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const Content = ({memos}) => {
    
    return(
        <div className="content-wrapper">
            {memos && memos.map(memo => {
                return(
                    <Post key={memo.id} memo={memo} />
                )
            })}
        </div>

    )
}

const mapStateToProps = state => {
    console.log(state);
    return{
        memos: state.firestore.ordered.memos
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'memos'}
    ])
)(Content)