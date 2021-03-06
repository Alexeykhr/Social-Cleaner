export default {
  main_config: {
    h2: 'Basic settings',
    owner_id: {
      name: 'Community ID',
      info: 'Positive number. Empty - current user.'
    },
    filter: {
      name: 'Filter posts',
      items: [
        'All',
        'Suggested posts on a community wall',
        'Timed posts',
        'Posts by the wall owner',
        'Posts by someone else'
      ]
    },
    count: {
      name: 'Number of posts (from and to), inclusive'
    },
    is_delete_posts: {
      name: 'Delete posts or clear comments under posts',
      items: [
        'Posts',
        'Comments'
      ]
    }
  },
  wall_config: {
    h2: 'Wall parameters',
    ids: {
      name: 'Posts ID'
    },
    from_ids: {
      name: 'ID of authors of posts',
      info: 'A negative value is the community ID.'
    },
    texts: {
      name: 'Phrases in the text'
    },
    attachments: {
      name: 'Added media attachments'
    },
    indicators: {
      name: 'Indicators',
      items: [
        'Comments',
        'Likes',
        'Reposts',
        'Views'
      ]
    }
  },
  comments_config: {
    h2: 'Comment parameters',
    from_ids: {
      name: 'ID of authors of comments',
      info: 'A negative value is the community ID.'
    },
    texts: {
      name: 'Phrases in the comment'
    },
    attachments: {
      name: 'Added media attachments'
    },
    indicators: {
      name: 'Indicators',
      items: [
        'Likes'
      ]
    }
  },
  html: {
    attachments: [
      'All',
      'Video',
      'Audio',
      'Document',
      'Link',
      'Note',
      'Poll',
      'Wiki Page',
      'Photos List',
      'Market Item',
      'Market Collection'
    ]
  }
}
