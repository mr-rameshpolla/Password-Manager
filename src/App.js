import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import PasswordManager from './Components/PasswordManager'
import './App.css'

class App extends Component {
  state = {
    liItems: [],
    username: '',
    password: '',
    website: '',
    searchedText: '',
    showPassword: false,
  }

  buttonClicked = event => {
    event.preventDefault()
    const {username, password, website} = this.state
    if (username !== '' && password !== '' && website !== '') {
      const newItem = {
        id: uuid4(),
        username,
        password,
        website,
      }
      this.setState(prevState => ({
        liItems: [...prevState.liItems, newItem],
        username: '',
        password: '',
        website: '',
      }))
    }
  }

  deleteBtnClicked = id => {
    this.setState(prevState => ({
      liItems: prevState.liItems.filter(eachItem => eachItem.id !== id),
    }))
  }

  searchedText = event => {
    this.setState({searchedText: event.target.value})
  }

  checkBoxClicked = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangePassWord = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {
      liItems,
      username,
      password,
      website,
      showPassword,
      searchedText,
    } = this.state

    const filtering = liItems.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchedText.toLowerCase()),
    )
    const lengthOfArray = filtering.length
    let mapping
    if (lengthOfArray === 0) {
      mapping = (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="passwordManager"
          />
          <p>No Passwords</p>
        </div>
      )
    } else {
      mapping = filtering.map(eachItem => (
        <PasswordManager
          liItem={eachItem}
          key={eachItem.id}
          id={eachItem.id}
          showPassword={showPassword}
          deleteBtnClicked={this.deleteBtnClicked}
        />
      ))
    }
    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="main-container">
            <div className="container1">
              <h1 className="text">Add New Password</h1>
              <form onSubmit={this.buttonClicked}>
                <div className="flexingIcons">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icons"
                  />
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Website"
                      value={website}
                      onChange={this.onChangeWebsite}
                    />
                  </div>
                </div>
                <div className="flexingIcons">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="icons"
                  />

                  <div>
                    <input
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      onChange={this.onChangeUserName}
                    />
                  </div>
                </div>
                <div className="flexingIcons">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="icons"
                  />

                  <div>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={this.onChangePassWord}
                    />
                  </div>
                </div>
                <div className="buttonDiv">
                  <button className="button" type="submit">
                    ADD
                  </button>
                </div>
              </form>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
                alt="password manager"
                className="passwordManager"
              />
            </div>
          </div>
        </div>
        <div className="belowContainer">
          <div className="headPartSecond">
            <div>
              <h1 className="text">Your Passwords</h1>
              <p className="span">{lengthOfArray}</p>
            </div>
            <div className="flexing">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icons"
              />
              <input type="search" onChange={this.searchedText} />
            </div>
          </div>
          <hr />
          <div className="checkBox">
            <div>
              <input
                id="checkbox"
                type="checkbox"
                onClick={this.checkBoxClicked}
              />
            </div>
            <div>
              <label className="text" htmlFor="checkbox">
                Show Passwords
              </label>
            </div>
          </div>
          <ul className="container2">{mapping}</ul>
        </div>
      </div>
    )
  }
}

export default App
