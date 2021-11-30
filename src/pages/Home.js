import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//COMPONENTS
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Home = () => {
  //GET CURRENT URL LOCATION
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];
  console.log(pathId);

  //FETCH GAMES DATA FROM API BY DISPTACHING ACTION
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET THE UPDATED DATA BACK FROM REDUCER
  const { popular, upcoming, newGames } = useSelector((state) => state.games); //EXTRACT KEYS FROM GAMES REDUCER
  //console.log(useSelector((state) => state.games));
  return (
    <StyledGamelist>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <StyledGames>
        {
          /*LOOP GAME COMPONENT AND PASS DATA DOWN WITH PROPS*/
          upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))
        }
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </StyledGames>
    </StyledGamelist>
  );
};

const StyledGamelist = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-row-gap: 5rem;
  grid-column-gap: 3rem;
`;

export default Home;
