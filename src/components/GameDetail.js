import styled from 'styled-components';
import { motion } from 'framer-motion';
//REDUX
import { useSelector } from 'react-redux';

const GameDetail = () => {
  //extract data from redux store
  const { screenshot, gameData } = useSelector((state) => state.detail);
  return (
    <div>
      <StyledCardShadow>
        <StyledDetails>
          <div className='stats'>
            <div className='rating'>
              <h3>{gameData.name}</h3>
              <h3>Rating:{gameData.rating}</h3>
            </div>
            <div className='info'>
              <h3>Platforms</h3>
              <div className='platforms'>
                {gameData.platforms.map((gameData) => (
                  <h3 key={gameData.platform.id}>{gameData.platform.name}</h3>
                ))}
              </div>
            </div>
          </div>
          <div className='media'>
            <img src={gameData.background_image} alt='screenshot' />
          </div>
          <div className='description'>
            <p>{gameData.description_raw}</p>
          </div>
          <div className='gallery'>
            {screenshot.results.map((screen) => (
              <img key={screen.id} src={screen.image} alt='screenshot' />
            ))}
          </div>
        </StyledDetails>
      </StyledCardShadow>
    </div>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0%.5rem;
  }
  &::-webkit-scrollbar-thump {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledDetails = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 20rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

export default GameDetail;
