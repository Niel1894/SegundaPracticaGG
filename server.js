const app = require('./app');
const dotenv = require('dotenv');

dotenv.load({ path: '.env' });

const port = process.env.PORT

app.listen(port, async () => {
  try {
    console.log(`Example app listening on port ${port}!`);
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;