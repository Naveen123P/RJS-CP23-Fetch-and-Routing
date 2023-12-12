// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogItem: updatedData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {id, title, imageUrl, avatarUrl, author, content} = blogItem
    return (
      <div className="blogs-items-container">
        {isLoading ? (
          <Loader type="TailSpin" height={50} width={50} />
        ) : (
          <div className="blog-item-container">
            <h1 className="title-text">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt={`item${id}`} className="avatar-img" />
              <p className="author-text">{author}</p>
            </div>
            <img src={imageUrl} alt={`item${id}`} className="blog-img" />
            <p>{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
