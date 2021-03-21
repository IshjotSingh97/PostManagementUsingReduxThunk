import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts, deletePost } from '../stores/posts'
import EditableContent from './EditableContent'

function PostList() {
    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const handleDelete = (id) => {
        console.log('a hit')
        dispatch(deletePost(id))
    }

    return (
        <div>
            {posts.length && posts.map((post, index) => {
                return (
                    <div key={post.id}>
                        <h6>{post.id} {post.title}</h6>
                        <EditableContent id={post.id} content={post.content} />
                        <input type='button' onClick={() => handleDelete(post.id)} value='Delete' />
                    </div>
                )
            })}
        </div>
    )
}

export default PostList

