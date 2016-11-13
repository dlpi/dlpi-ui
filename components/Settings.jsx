import React from 'react'
import { Link } from 'react-router'

const Settings = props => {
  return (<div>
    <p>Settings</p>
    <Link to={`/settings/printer`}>Open Printer Settings</Link>
    <Link to={`/settings/resin`}>Open Resin Settings</Link>
    {props.children}
  </div>)
}

Settings.propTypes = {
  children: React.PropTypes.node
}

export default Settings
