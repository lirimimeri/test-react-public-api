import React from 'react'
import { connect } from 'react-redux'
import { Row } from 'reactstrap'

import Photo from './Photo'

const Photos = ( props ) => {
  const photos = props.photos.map(photo => <Photo title={photo.title} image={photo.url}/>)
  
  return (
    <Row>
      {photos}
    </Row>
  )
}

const mapStateToProps = state => {
  return {
    photos: state.photos.photos,
    isLoading: state.photos.loading
  }
}

export default connect(mapStateToProps)(Photos)