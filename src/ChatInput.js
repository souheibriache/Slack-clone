import React , {useState} from 'react'
import './ChatInput.css'
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase'

function ChatInput({channelName , channelId}) {
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();

    const sendMessage = e =>{
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message : input,
                timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                user : user.displayName,
                userImage : user.photoURL
            })
        }
    }

    return (
        <div className="chatinput" >
            <form>
                <input placeholder={"Message #"+channelName} 
                onChange={e => setInput(e.target.value)}
                >
                </input>
                <Button type="submit" onClick={sendMessage}  value={input} >
                    SEND
                </Button>
            </form>
        </div>
    )
}

export default ChatInput
