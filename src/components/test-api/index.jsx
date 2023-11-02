import { useEffect, useState } from 'react';
import styles from './styled.module.css';




const TestApi = () => {
  const [teamData, setTeamData] = useState([]);
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {


    const url = 'https://free-nba.p.rapidapi.com/players?page=0&per_page=25';

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4ca8379db6msh12736726a1fc99fp11967bjsn2d5b70788109',
      }
    };

    fetch(url, options)
      .then((res) => res.json())
      // .then((res) => console.log(res.data))

      .then((res) => {
        setTeamData(res.data);
        setIsLoad(false);
      })


      // .catch (error) {
      //     console.error(error);
      // }
      .catch((error) => console.error(error));


  }, []);



  return (

    <div className={styles.container}>


      <h1>TestApi</h1>

      {isLoad &&
        <div className={styles.loading}>
          <div>
            Загрузка данных...
          </div>
          <img src="https://media.tenor.com/k29LXFgOh9QAAAAC/miss-you.gif" alt="" style={{ width: '250px' }} />
        </div>
      }


      {/* i в мапе */}
      {teamData.map((el, i) => {
        return (
          // console.log(el),
          <div>
            <div className={styles.element} key={el.id}>
              {i + 1}. {el.last_name} - {el.team.city}&nbsp;&nbsp;

              <button style={{ cursor: 'pointer' }}>

                <img src='https://crossstitchsaga.ru/img/help_icons/trashcan.svg' alt=''
                  style={{ width: '20px' }}
                  onClick={() => {
                    setTeamData(
                      teamData.filter(filterElement => el.id !== filterElement.id))
                  }}
                />
              </button>

            </div>
            <br />
          </div>

        )

      })}
    </div>
  )
};

export default TestApi;