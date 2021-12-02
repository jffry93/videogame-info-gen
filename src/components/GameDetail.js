import styled from 'styled-components';
import { motion } from 'framer-motion';
//REDUX
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//RESIZE IMAGE
import { smallImage } from '../util';

const GameDetail = () => {
  const history = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history('/');
    }
  };
  //extract data from redux store
  const { screenshot, gameData, isLoading } = useSelector(
    (state) => state.detail
  );
  return (
    <>
      {!isLoading && (
        <StyledCardShadow className='shadow' onClick={exitDetailHandler}>
          <StyledDetails>
            <StyledStats>
              <div className='rating'>
                <h3>{gameData.name}</h3>
                <h3>Rating:{gameData.rating}</h3>
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {gameData.platforms.map((gameData) => (
                    <h3 key={gameData.platform.id}>{gameData.platform.name}</h3>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <img
                src={smallImage(gameData.background_image, 1280)}
                alt='screenshot'
              />
            </StyledMedia>
            <StyledDescription>
              <p>{gameData.description_raw}</p>
            </StyledDescription>
            <StyledGallery>
              {screenshot.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt='screenshot'
                />
              ))}
            </StyledGallery>
          </StyledDetails>
        </StyledCardShadow>
      )}
    </>
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledInfo = styled(motion.div)`
  text-align: center;
`;

const StyledPlatforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const StyledDescription = styled(motion.div)`
  margin: 5rem 0rem;
`;

const StyledGallery = styled(motion.div)`
  img {
    margin: 1rem 0rem;
  }
`;
export default GameDetail;
