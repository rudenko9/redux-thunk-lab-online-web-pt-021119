import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  render() {
    console.log(this.props.catPics)
    return (
      <div>
        <h1>CatBook</h1>
        {/* add CatList component here */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App)
