import axios from 'axios';
import { gameDetailsURL } from '../api';
import { gameScreenshotURL } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotURL(id));
  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
