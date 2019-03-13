import React from 'react'
import { Route } from 'react-website'

import App from './pages/App'
import SMSSender from './pages/SMSSender'
import Camera from './pages/Camera'

export default (
  <Route path="/" Component={ App }>
    <Route Component={ SMSSender }/>
    <Route path="camera" Component={ Camera }/>
  </Route>
)