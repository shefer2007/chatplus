import { useState } from 'react';
import styles from './styled.module.css';
import { useLocalStorage } from '../../hoock/useLocalStorage';



const Home = () => {
  // const [user, setUser] = useState("");
  const [user, setUser] = useLocalStorage("USER", "");

  const [inputValue, setInputValue] = useState("");


  return (
    <div className={styles.container}>

      {user && (
        <div>
          <div> Приветствую вас, уважаемый {user}</div>
          <button onClick={() => setUser('')}> Выйти </button>
        </div>
      )}

      {!user && (
        <div>
          <label> Введите ваше имя </label>
          <input
            value={inputValue}
            onChange={(e)=>setInputValue(e.target.value)}
          />
          <button onClick={()=>setUser(inputValue)}> Сохранить </button>
        </div>
      )}


    </div>
  )
}

export default Home;