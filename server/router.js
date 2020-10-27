const Router = require('koa-router');
const router = new Router();

const {
  getTopics,
  postTopic,
  likeTopic,
  deleteTopic
} = require('./controllers/topic.controller');

router.get('/topics', getTopics);
router.post('/topic', postTopic);
router.post('/like/:id', likeTopic);
router.delete('/topic/:id', deleteTopic);

module.exports = router;