const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.registerUser(userData);
    res.status(201).json({
      message: "User Registered Successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const userData = req.body;
    const { token, userId } = await userService.login(userData);
    res.status(200).json({
      message: "User Logged in Successfully",
      userId: userId,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login
 
};
