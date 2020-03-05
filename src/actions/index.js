export const checkIn = index => {
  return {
    type: "CHECK_IN",
    payload: {
      index: index
    }
  };
};
