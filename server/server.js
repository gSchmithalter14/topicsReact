const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const logger = require('koa-logger');
const mongoose = require('mongoose');

const app = new Koa();
const router = require('./router');

app.use(bodyParser());

app.use(cors());

app.use(logger());

app.use(router.routes());


// Mongoose setup
const connectDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/codemocracy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  // eslint-disable-next-line no-console
  console.log('🏁 MongoDB Connected');
};
connectDB();

const PORT = 4000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 App running on port ${PORT}`);
});