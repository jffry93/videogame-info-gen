import styled from 'styled-components';
import { motion } from 'framer-motion';
//REDUX
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//RESIZE IMAGE
import { smallImage } from '../util';
//PLATFORM ICONS
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import apple from '../img/apple.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import gamepad from '../img/gamepad.svg';
//RATING ICONS
import emptyStar from '../img/star-empty.png';
import fullStar from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
  const history = useNavigate();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history('/');
    }
  };
  //RATING LOGIC
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(gameData.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt='full-star' key={i} src={fullStar}></img>);
      } else {
        stars.push(<img alt='empty-star' key={i} src={emptyStar}></img>);
      }
    }
    return stars;
  };

  //GET ICONS
  const getPlatformIcons = (platform) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
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
          <StyledDetails layoutId={pathId}>
            <StyledStats>
              <div className='rating'>
                <motion.h3 layoutId={`title ${pathId}`}>
                  {gameData.name}
                </motion.h3>
                <h3>Rating:{gameData.rating}</h3>
                {getStars()}
              </div>
              <StyledInfo>
                <h3>Platforms</h3>
                <StyledPlatforms>
                  {gameData.platforms.map((gameData) => (
                    <img
                      alt={gameData.platform.name}
                      key={gameData.platform.id}
                      src={getPlatformIcons(gameData.platform.name)}
                    ></img>
                  ))}
                </StyledPlatforms>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`image ${pathId}`}
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
  z-index: 5;
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
  z-index: 10;
  img {
    width: 100%;
  }
`;

const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
    height: 2rem;
    width: 2rem;
  }
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
