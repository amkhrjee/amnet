import React, { Component } from 'react';
import moment from 'moment';
import parse from 'html-react-parser'
class Post extends Component {
    render(){
        
        return(
            <div className="post-container">
                <div className="title-wrapper">
                <p className="title"><span role="img" aria-label="emoji">🗓️</span>{moment(this.props.memo.createdAt.toDate()).format('llll')}</p>
                </div>
                <div className="post-wrapper">
                    <p>
                        {parse(this.props.memo.memo)}
                    </p>
                </div>
            </div>
        )
    }
}

export default Post