import React from 'react'
import "./Sidebar.css"
import { RssFeed, Chat } from '@material-ui/icons'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import GroupIcon from '@material-ui/icons/Group';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HelpIcon from '@material-ui/icons/Help';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import SchoolIcon from '@material-ui/icons/School';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import { Users } from '../../dummyData'
import Closefriends from '../closefriends/Closefriends'


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/4mhXitnfwjM.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yo/r/YLO0spooJdL.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/xv1f8IDT6TY.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ciwaVQS_Rtg.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/ypnzCSNhKC_.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>

                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/5HHfhF2cg6X.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/S2PaZnvADSv.png" className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button onClick={() => alert("Show More")} className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                {
                    Users.map((friend) => (
                           <Closefriends key={friend.id} user={friend} />
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
