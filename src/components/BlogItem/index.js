// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails

  return (
    <Link to={`/blogs/${id}`} className="nav-link">
      <div className="blog-item">
        <img src={imageUrl} alt={`item${id}`} className="blog-img" />
        <div className="blog-container">
          <p className="title-text">{topic}</p>
          <p className="topic-text">{title}</p>
          <div className="avatarUrl-author-container">
            <img src={avatarUrl} alt={`item${id}`} className="avatar-img" />
            <p className="title-text">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
