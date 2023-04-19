import React from 'react'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import { firestore } from '../firebase'
import ChatMessage from './/chatmessage'
import {useState} from 'react'
import {auth} from "../firebase"
function Chatroom() {
    const messageRef= firestore.collection("messages")
    const query = messageRef.orderBy('createdAt').limit(25);
    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid } = auth.currentUser;
  
      await messageRef.add({
        text: formValue,
        createdAt: firestore.FieldValue.serverTimestamp(),
        uid,
        
      })
    }
  return (
    <div>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <form onSubmit={sendMessage}>

    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

    <button type="submit" disabled={!formValue}>Send</button>

  </form>
    </div>
    
  )
}

export default Chatroom