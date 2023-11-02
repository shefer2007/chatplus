import styles from './styled.module.css';

const ChatBlock = (props) => {
  return (
    <div className={styles.chatBlock}>
        <h2>Чат</h2>
        {props.chatData.map((el, i)=> {
            return (
              console.log(props.chatData),
                <div key={i}>
                    {props.chatData.length - i}. {el}
                </div>
            )
        })}
    </div>
  )
}

export default ChatBlock