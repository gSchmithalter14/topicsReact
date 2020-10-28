const Topic = require('../models/Topic.model');

exports.getTopics =  async ctx => {
  try {
    const topics = await Topic.find({});
    if (!topics.length) {
      ctx.body = 'No topics created yet';
    } else {
      ctx.body = topics;
  
    }
    ctx.status = 200;
  } catch (o_O) {
    throw new Error(o_O);
  }
};


exports.postTopic = async ctx => {
  try {
    const newTopic = await Topic.create(ctx.request.body);
    ctx.body = {message: 'Topic posted', data: newTopic};
    ctx.status = 201; 
  } catch (o_O) {
    throw new Error(o_O);
  }
};

exports.deleteTopic = async ctx => {
  try {
    const { id } = ctx.params;
    await Topic.deleteOne({ _id: id });

    ctx.body = 'deleted';
    ctx.status = 200;
  } catch (o_O) {
    throw new Error(o_O);
  }
};


exports.voteUp = async ctx => {
  try {
    const topic = await Topic.findById(ctx.params.id);
    topic.votes++;
    console.log(topic.votes);
    await Topic.findByIdAndUpdate(ctx.params.id, {votes : topic.votes})
    ctx.status = 201; 
  } catch (o_O) {
    throw new Error(o_O);
  }
};

exports.voteDown = async ctx => {
  try {
    const topic = await Topic.findById(ctx.params.id);
    if (topic.votes > 0) {
      topic.votes--;
    } else topic.votes = 0;
    await Topic.findByIdAndUpdate(ctx.params.id, {votes : topic.votes})
    ctx.status = 201; 
  } catch (o_O) {
    throw new Error(o_O);
  }
};
