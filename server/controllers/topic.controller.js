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

exports.likeTopic = async ctx => {
  try {
    const topic = await Topic.findById(ctx.params.id);
    topic.votes++;
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