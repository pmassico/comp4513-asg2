const getUserId = async (req, res, next) => {
  const user = { userID: "..." };

  res.json(user);
};

module.exports = {
  getUserId
};
