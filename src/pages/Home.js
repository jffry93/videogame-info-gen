import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//COMPONENTS
import Game from '../components/Game';
//STYLING
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Home = () => {
  //FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  //GET THE DATA BACK FROM STATE
  const { popular, upcoming, newGames } = useSelector((state) => state.games);

  return (
    <StyledGamelist>
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
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
