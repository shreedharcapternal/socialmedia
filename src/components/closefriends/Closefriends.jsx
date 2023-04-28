import React from 'react'
import "./Closefriends.css"

function Closefriends({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default Closefriends
