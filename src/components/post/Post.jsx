import React from 'react'
import "./Post.css"
import { MoreVert } from '@material-ui/icons'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { Users } from '../../dummyData'
import { useState } from 'react';

function Post({ post }) {

    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    const [likecolor,setLikecolor] = useState("#909090")

    const [dislike,setDislike] = useState(post.dislike)
    const [isDisLiked,setIsDisLiked] = useState(false);
    const [dislikecolor,setDisLikecolor] = useState("#909090")

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
        setLikecolor(isLiked ? "#909090" : "#065fd4")
    }

    const dislikeHandler = () => {
        setDislike(isDisLiked ? dislike-1 : dislike+1)
        setIsDisLiked(!isDisLiked)
        setDisLikecolor(isDisLiked ? "#909090" : "#ff0000")
        
        
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={ Users.filter((u) => u.id === post.userId)[0].profilePicture } alt="" />
                        <span className="postUsername">{ Users.filter((u) => u.id === post.userId)[0].username }</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post.desc}
                    </span>
                    <img className="postImg" onDoubleClick={likeHandler} src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAltIcon className="likeIcon" onClick={likeHandler} htmlColor={likecolor} />
                        <span className="postlikeCounter">{like} people like it!</span>
                        <FavoriteOutlinedIcon className="likeIcon" onClick={dislikeHandler} htmlColor={dislikecolor} />
                        <span className="postdislikeCounter">{dislike} people love it!</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    
        
    )
}

export default Post
