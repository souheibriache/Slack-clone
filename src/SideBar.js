import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create'
import React , {useState , useEffect} from 'react'
import './SideBar.css'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import SideBarOption  from './SideBarOption'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import AppsIcon from '@material-ui/icons/Apps'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import {db} from './firebase';
import { useStateValue } from './StateProvider';


function SideBar() {

    const [{user}] = useStateValue();

    const [channels, setChannels] = useState([]);
    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc =>({
                id : doc.id ,
                name : doc.data().name
            })))
        })
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Clever programmer</h2>
                    <h3>
                        <FiberManualRecordIcon />
                    {user.displayName}
                </h3>
                </div>
                <CreateIcon/>
               
               
            </div>

            <SideBarOption Icon={InsertCommentIcon} title="threads" />
            <SideBarOption Icon={InboxIcon} title="Mentions and reactions" />
            <SideBarOption Icon={DraftsIcon} title="Saved items" />
            <SideBarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SideBarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SideBarOption Icon={AppsIcon} title="Apps" />
            <SideBarOption Icon={FileCopyIcon} title="File Browser" />
            <SideBarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SideBarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SideBarOption addChannelOption ={true} Icon={AddIcon} title="Add channel" />
            {/* Connect to DB */}
            {/* <SidebarOption/> */}
            {channels.map(channel =>
                  <SideBarOption title={channel.name} id ={channel.id}/>
            )}
        </div>
    )
}

export default SideBar
