

exports.index = async (req, res) => {
  try {
    res.send('Hi developers!');
  } catch (error) {
    res.send(error);
  }
}