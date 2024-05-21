import axios from "axios";
import { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function ChatBot(){
  const [showchatbot,setShowChatbot] = useState(false);
  const [messages,setmessages] = useState<string[]>([]);
  const [querry,setquerry] = useState<string>('');
  const [loading,setloading] = useState<boolean>(false);
  const fetchresponce = async()=>{
    try {
      if(querry.trim() === '') return;
      setmessages([...messages,querry])
      setquerry('');
      // this will be the code for fetching responce from the server
      setloading(true);
      // const responce = await axios.post('http://localhost:5000/postquerry',{message:querry});
      // setmessages([...messages,responce.data.message]);
    } catch (error) {
      
    }finally{
      setloading(false);
    }
  }
    return (
      <>
    <div  onClick={()=>setShowChatbot(true)}  hidden={showchatbot}   className='chatbotwrapper'>
      <img src="https://media2.giphy.com/avatars/acetech/RK67baKq9A79.gif" className='chatbot' />
    </div>
    <div  hidden={!showchatbot}  className={showchatbot?'messagebox':'hidemessagebox'}>
    <div className="topbar">
     <p className="toptext">Hii I am  your Ai Assistant</p>
     <button onClick={()=>setShowChatbot(false)} className="crossbtn"><IoClose/></button>
    </div>
    <div className="messages">
     {
        messages.map((message,index)=>{
          return(
            <div key={index} className="message">{message}</div>
          )
        })
     }
     {
        loading && <div>Fetching responce...</div>
     }
    </div>
    
    <div className="inputbox">
     <input value={querry} onChange={(e)=>setquerry(e.target.value)} type="text" placeholder="Type a message" className="inputmessage"/>
     <button onClick={fetchresponce} className="sendbtn">
       <IoMdSend/>
     </button>
    </div>
    </div>
   </>
    );
}

export default ChatBot;