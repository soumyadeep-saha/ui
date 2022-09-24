export const IMAGES = {
  APP_BANNER: require("./images/my-banner.png"),
  EMPTY_TRIPS: require("./images/empty-trip.png"),
  BACK: require("./images/back.png"),
  EXPENSES_EMPTY: require("./images/expenses-empty.png"),
  ADD_EXPENSES: require("./images/add-expenses.png")
};

export const THUMBNAILS = {
  1: require("./images/1.png"),
  2: require("./images/2.png"),
  3: require("./images/3.png"),
  4: require("./images/4.png"),
  5: require("./images/5.png"),
  6: require("./images/6.png")
};

export const RANDOM_IMAGE = () => {
  const rand = Math.floor(Math.random() * 10);
  return THUMBNAILS[rand];
};
