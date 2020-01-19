// write your CatList component here
import React from 'react'

const CatList = props => {

  return(
    props.catPics.map(catPic => <img src={catPic.url} alt="cat" key={ catPic.id }/ >)
  )
}

export default CatList
