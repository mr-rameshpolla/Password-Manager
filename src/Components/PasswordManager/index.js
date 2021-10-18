import './index.css'

const PasswordManager = props => {
  const {liItem, showPassword, deleteBtnClicked} = props
  const {website, username, password, id} = liItem

  const showingPassword = showPassword ? (
    password
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const firstCharacter = website.charAt(0).toUpperCase()

  const deleteButtonClicked = () => {
    deleteBtnClicked(id)
  }

  return (
    <li>
      <div>
        <div>
          <p>{firstCharacter}</p>
        </div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          <p>{showingPassword}</p>
        </div>
        <button type="button" className="button2" testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="image2"
            onClick={deleteButtonClicked}
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordManager
