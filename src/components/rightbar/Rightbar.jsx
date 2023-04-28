import React from 'react'
import "./Rightbar.css"
import CakeIcon from '@material-ui/icons/Cake';
import { Users } from '../../dummyData'
import Online from '../online/Online'

function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
             <div className="birthdayContainer">
                <img src="/assets/birthday.jpg" className="birthdayImg" />
                <span className="birthdayText"><b>Aditya</b> and <b>3 other friends</b>  have birthday today</span>
            </div>
            <img className="rightbarAd" src="/assets/img2.jpg" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
                {
                    Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))
                }
            </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Pune</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Maharashtra</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/post/img1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Shreedhar Patil</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/img2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Sujit bhai</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/img3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Aditya Jadhav</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/img4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Samit tukol</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/img2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Rishi Yadav</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/post/img4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Kunal Patil</span>
                </div>
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               { profile ? <ProfileRightbar /> : <HomeRightbar /> }
            </div>
        </div>
    )
}

export default Rightbar
