import { Link } from "react-router-dom"


const Comment = (props) => {
  return (
    <div>
        <label>Напишите коментарий </label>
        <input 
        value={props.inputValue} 
        onChange={(e)=>props.setInputValue(e.target.value)}
        />
        <button onClick={props.sendChat}
        >Отправить</button>

        <button onClick={()=> props.setChatData([])}>Удалить</button>
        {props.showDialogReg && (
        <div>
            Вы не авторизовались передите по <Link to="/">Ссылке</Link>
        </div>
        )}
    </div>


  );
};

export default Comment