import { act } from 'react-dom/test-utils'
import { fetchPostsApi, getPostApi, createPostApi, deletePostApi, updatePostApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const DELETE_POST = 'DELETE_POST'
const UPDATE_POST = 'UPDATE_POST'
const GET_POST = 'GET_POST'
const GET_ALL_POSTS = 'GET_ALL_POSTS'

const initialState = {
    posts: []
}

export const fetchPosts = () => {
    return async (dispatch) => {
        const posts = await fetchPostsApi()
        dispatch({
            type: GET_ALL_POSTS,
            payload: {
                posts: posts
            }
        })
    }
}

export const getPost = (id) => {
    return async (dispatch) => {
        const post = await getPostApi(id)
    }
}

export const addPost = (title, content) => {
    return async (dispatch) => {
        const response = await createPostApi(title, content)
        dispatch({
            type: ADD_POST,
            payload: {
                post: {
                    id: response.id,
                    title: response.title,
                    content: response.content
                }
            }
        })
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        const response = deletePostApi(id)
        dispatch({
            type: DELETE_POST,
            payload: {
                id: id
            }
        })
    }
}

export const updatePost = (id, content) => {
    return async (dispatch) => {
        const response = await updatePostApi(id, content)
        dispatch({
            type: UPDATE_POST,
            payload: {
                id: id,
                content: content
            }
        })
    }
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload.post]
            }
        case GET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter((post) => {
                    return post.id !== action.payload.id
                })
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map((post) => {
                    return post.id === action.payload.id ? { ...post, content: action.payload.content } : post
                })
            }
        default:
            return {
                ...state
            }
    }
}
