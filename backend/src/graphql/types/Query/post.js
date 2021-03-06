const Post = require('../../../models/Post')
const User = require('../../../models/User')
const Comment = require('../../../models/Comment')

const postResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a post given its id.
  const post = await Post.query()
    .findById(args.id)
    .eager('comments')
  return post
}

const commentsResolver = async (obj, args, context) => {
  const comments = await Comment.query()
    .where('postId', args.id)
    .orderBy('createdAt')
  return comments
}

const postsResolver = async (obj, args, context) => {
  /* TODO: Write a resolver which returns a list of all posts.
    - this list should be ordered with the most recent posts first 
  */
  const postlist = await Post.query().orderBy('createdAt')
  return postlist
}

const postUserResolver = async (obj, args, context) => {
  const user = await User.query().findById(obj.userId)
  return user
}

const postCommentsResolver = async (obj, args, context) => {
  const comments = await Comment.query()
    .where('postId', obj.id)
    .orderBy('createdAt')
  return comments
}

const resolver = {
  Query: {
    post: postResolver,
    posts: postsResolver,
    comments: commentsResolver,
  },
  Post: {
    user: postUserResolver,
    comments: postCommentsResolver,
  },
}

module.exports = resolver
