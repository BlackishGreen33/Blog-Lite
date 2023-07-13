import React from 'react';

interface Post {
    title: string;
    excerpt: string;
}

const PostCard = (props: {post: Post}) => {
    return (
        <div>
            {props.post.title}
            {props.post.excerpt}
        </div>
    );
}

export default PostCard;