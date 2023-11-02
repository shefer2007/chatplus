import { useState } from 'react';
import Comment from './Comment';
import styles from './styled.module.css';
import { useLocalStorage } from '../../hoock/useLocalStorage';
import ChatBlock from './Chat-block';



const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatData, setChatData] = useLocalStorage("CHAT", []);
  const [showDialogReg, setShowDialogReg] = useState(false);

  console.log(chatData);

  const [user] = useLocalStorage("USER");

  const sendChat = ()=> {
    if (user) { 
      setChatData([`${user}: ${inputValue}`,...chatData ])
      setInputValue('')      
    }else {
      setInputValue("");
      setShowDialogReg(true);
    }

  }
  
  return (
    <div className={styles.container}>
      <Comment 
      inputValue={inputValue} 
      setInputValue={setInputValue}
      showDialogReg={showDialogReg}
      sendChat={sendChat}
      setChatData={setChatData}
      />
      <ChatBlock 
      chatData={chatData}
      />
    </div>
  )
}

export default Chat;