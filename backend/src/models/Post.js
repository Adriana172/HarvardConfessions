const BaseModel = require('./BaseModel')
const { BelongsToOneRelation, HasManyRelation } = require('objection')

class Post extends BaseModel {
  static get tableName() {
    return 'posts'
  }

  static get relationMappings() {
    const User = require('./User')
    const Comment = require('./Comment')

    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'posts.userId',
          to: 'users.id',
        },
      },
      comments: {
        relation: HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'posts.id',
          to: 'comments.postId',
        },
      },
    }
  }
}

module.exports = Post
