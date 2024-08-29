// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnail, changeImage, clickedId} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnail

  const onClickingImage = () => {
    changeImage(id)
  }

  const blurredStyle = clickedId ? 'thumbnail-image' : 'thumbnail-opacity'

  return (
    <li className="each-item">
      <button type="button" onClick={onClickingImage} className={blurredStyle}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
