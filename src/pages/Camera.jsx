import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
 
class CameraApp extends Component {
    onTakePhoto (dataUri) {
    console.log('takePhoto');
  }
 
  render () {
    return (
      <div className="App">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
        />
      </div>
    );
  }
}
 
export default CameraApp;