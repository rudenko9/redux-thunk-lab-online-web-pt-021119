import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {

  componentDidMount() {
    this.props.fetchCats()
  }

  isLoadingMsg = () => {
    if(this.props.loading) return <h2>Loading...</h2>
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        { this.isLoadingMsg() }
        <CatList catPics={ this.props.catPics } />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)