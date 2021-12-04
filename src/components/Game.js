import styled from 'styled-components';
import { motion } from 'framer-motion';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
//React Router
import { Link } from 'react-router-dom';
//IMAGE RESIZE
import { smallImage } from '../util';
import { popUp } from '../animations';

const Game = ({ name, released, image, id }) => {
  const pathIdToNumber = id.toString();
  //DISPATCH loadDetail ACTION
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      variants={popUp}
      initial='hidden'
      animate='show'
      layoutId={pathIdToNumber}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${pathIdToNumber}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${pathIdToNumber}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
