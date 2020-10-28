const Router = require('koa-router');
const router = new Router();

const {
  getTopics,
  postTopic,
  deleteTopic,
  voteUp,
  voteDown
} = require('./controllers/topic.controller');

router.get('/topics', getTopics);
router.post('/topics', postTopic);
router.delete('/topics/:id', deleteTopic);
router.put('/topics/:id/up', voteUp);
router.put('/topics/:id/down', voteDown);

module.exports = router;