//API KEYS
const apiKey = `${process.env.REACT_APP_API_KEY}`;
//BASE URL
//const base_url = `https://api.rawg.io/api/platforms?key=${apiKey}/`;

//GETTING THE DATE
//Used to populate the API dynamically
const getCurrentDate = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const year = currentDate.slice(0, 4);
  const month = currentDate.slice(5, 7);
  const day = currentDate.slice(8, 10);

  return {
    full: currentDate,
    year: year,
    month: month,
    day: day,
  };
};
//VALUES NEEDED TO SET UP THE URL
const currentYear = getCurrentDate().year;
const currentMonth = getCurrentDate().month;
const currentDay = getCurrentDate().day;
const currentDate = getCurrentDate().full;
const prevYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${Number(currentYear) + 1}-${currentMonth}-${currentDay}`;

//SETTING UP THE API KEY AND URL
const popular_games = `https://api.rawg.io/api/games?key=${apiKey}&dates=${prevYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `https://api.rawg.io/api/games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `https://api.rawg.io/api/games?key=${apiKey}&dates=${prevYear},${currentDate}&ordering=-released&page_size=10`;

//HOME PAGE GAMES
export const popularGamesURL = () => `${popular_games}`;
export const upcomingGamesURL = () => `${upcoming_games}`;
export const newGamesURL = () => `${newGames}`;

//GAME DETAILS
export const gameDetailsURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}?key=${apiKey}`;
export const gameScreenshotURL = (game_id) =>
  `https://api.rawg.io/api/games/${game_id}/screenshots?key=${apiKey}`;

//SEARCH BAR GAMES
export const searchGamesURL = (game_name) =>
  `https://api.rawg.io/api/games?key=${apiKey}&search=${game_name}&page_size=10`;
