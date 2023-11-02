import { Link } from 'react-router-dom';
import styles from './styled.module.css';



const Header = () => {
  return (
    <div className={styles.container}>
    
      <nav className={styles.navbar}>

        
        <Link to='/' style={{color:'rgb(255, 237, 76)'}}>Home</Link>
        
        <Link to='/chat' style={{color:'rgb(255, 437, 76)'}}>Chat</Link>
        
        <Link to='/test' style={{color:'rgb(250, 239, 140)'}}>Подгрузка&nbsp;данных</Link>
        
      </nav>
    </div>
  )
}

export default Header;