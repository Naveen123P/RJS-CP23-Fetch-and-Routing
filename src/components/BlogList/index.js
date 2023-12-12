// Write your JS code here import {async} from 'fast-glob'
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import UserInfo from '../UserInfo'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemsList()
  }

  getBlogItemsList = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogList: formattedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="blog-item-container">
        <UserInfo />
        {isLoading ? (
          <Loader type="TailSpin" height={50} width={50} />
        ) : (
          blogList.map(eachItem => (
            <BlogItem key={eachItem.id} blogItemDetails={eachItem} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
