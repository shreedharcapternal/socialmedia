import React from 'react'
import "./Share.css"
import PermMediaIcon from '@material-ui/icons/PermMedia';

import { Label, Room, EmojiEmotions } from '@material-ui/icons'
import GroupIcon from '@material-ui/icons/Group';



function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/image1.jpg" alt="" />
                    <input placeholder="What's in your mind" type="text" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon htmlColor="#00A400" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <GroupIcon htmlColor="#3578E5" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Room htmlColor="#FA383E" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                    </div>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Post</button>
                </div>
            </div>
        </div>
    )
}

export default Share
