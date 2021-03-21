const BASE_URL = `http://localhost:5000/posts`
export const fetchPostsApi = async () => {
    const url = BASE_URL
    const response = await fetch(url)
    const data = await response.json()
    return data

}
export const getPostApi = async (id) => {
    const url = BASE_URL + `/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export const createPostApi = async (title, content) => {
    const url = BASE_URL
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            title: title,
            content: content
        })
    })
    const data = await response.json()
    return data
}

export const deletePostApi = async (id) => {
    const url = BASE_URL + `/${id}`
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
    return response
}

export const updatePostApi = async (id, content) => {
    const url = BASE_URL + `/${id}`
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            content: content
        })
    })
    return response
}