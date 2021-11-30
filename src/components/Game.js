import styled from 'styled-components';
import { motion } from 'framer-motion';
//REDUX
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
//React Router
import { Link } from 'react-router-dom';

const Game = ({ name, released, image, id }) => {
  //DISPATCH loadDetail ACTION
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
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
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
