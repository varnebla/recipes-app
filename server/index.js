const koa = require('koa');
const app = new koa();

const router = require('./router');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const cors = require('@koa/cors');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT;
const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster1-x2prp.mongodb.net/${process.env.DB_DBNAME}?retryWrites=true&w=majority`;

app.use(cors())
  .use(logger())
  .use(bodyparser())
  .use(router.routes());

  
  
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log(`🔥DB is on fire on ${dbUrl}`);
  app.listen(PORT, console.log(`🚀Listening to http://localhost:${PORT}`));
});