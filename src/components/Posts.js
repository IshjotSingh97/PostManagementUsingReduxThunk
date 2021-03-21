import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleWidget } from '../stores/widget'
import { getPost } from '../stores/posts'
import AddPost from './AddPost'
import PostList from './PostList'



function Posts() {
    return (
        <div>
            <AddPost />
            <PostList />
        </div >
    )
}

export default Posts
