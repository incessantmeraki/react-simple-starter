import React from 'react';

const BlogPost = (props) => {
  return (
    <div>
      This is post with id {props.match.params.id}
    </div>
  );
};

export default BlogPost;
