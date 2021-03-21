import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updatePost } from '../stores/posts'


function EditableContent({ id, content }) {
    const [edit, setEdit] = useState(false)
    const [postContent, setPostContent] = useState(content)


    const handleToggleEdit = () => {
        setEdit(!edit)
    }
    const dispatch = useDispatch()
    const handleUpdateContent = () => {
        dispatch(updatePost(id, postContent))
        setEdit(false)
    }


    const handleChangecontent = (event) => {
        setPostContent(event.target.value)
    }

    return (
        <div>
            <textarea disabled={!edit} onChange={handleChangecontent} >{postContent}</textarea>
            <input type='button' value='Edit' onClick={handleToggleEdit} />
            <input type='button' value='Update' onClick={handleUpdateContent} disabled={!edit} />
        </div>
    )
}

export default EditableContent