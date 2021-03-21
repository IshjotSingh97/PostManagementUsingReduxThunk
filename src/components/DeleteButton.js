import React, { useDispatch } from 'react'
import deletePost from '../stores/posts'


function DeleteButton({ id }) {

    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deletePost(id))
    }

    return (
        <input type='button' onClick={handleDelete} value='Delete' />

    )
}

export default DeleteButton