import React from 'react'
import { useEffect, useState } from 'react'
import { addPost } from '../stores/posts'
import { useDispatch } from 'react-redux'


function AddPost() {
    const [title, setTitle] = useState('')
    const [content, setcontent] = useState('')
    const dispatch = useDispatch()

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangecontent = (event) => {
        setcontent(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(addPost(title, content))
        setTitle('')
        setcontent('')
    }

    return (
        <div>
            <label htmlFor='title'>Title</label>
            <input type='text' onChange={handleChangeTitle} name='title' value={title} />
            <label htmlFor='content'>content</label>
            <textarea onChange={handleChangecontent} name='content' value={content} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddPost
