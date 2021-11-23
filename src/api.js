//API KEYS
const apiKey = `${process.env.REACT_APP_API_KEY}`;
//BASE URL
const base_url = `https://api.rawg.io/api/platforms?key=${apiKey}/`;
console.log(base_url);
//GETTING THE DATE
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

const currentYear = getCurrentDate().year;
const currentMonth = getCurrentDate().month;
const currentDay = getCurrentDate().day;
const currentDate = getCurrentDate().full;
const prevYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
//const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `https://api.rawg.io/api/games?key=${apiKey}&dates=${prevYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${popular_games}`;

console.log(popular_games);
