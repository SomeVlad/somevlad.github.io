import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Endpoints } from 'endpoints/endpoints'
import { posts as mockPosts } from 'mocks/posts'
import { Post } from 'components/post'

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(Endpoints.posts)
            .then(result => setData(result.data))
            .catch(() => setData(mockPosts))

    }, [])

    return (
        <div>
            {data.map(Post)}
        </div>
    )
}

export { Home }
