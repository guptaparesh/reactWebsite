import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction color="red" label="Github" value="Paresh's git" icon={<GitHubIcon  style={{fill: "#3b5998"}}/>} href="https://github.com/guptaparesh" target="_blank" />          
        </BottomNavigation>
)
}

export default Footer