import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction color="red" label="Github" value="Paresh's git" icon={<GitHubIcon  style={{fill: "#3b5998"}}/>} href="https://github.com/guptaparesh" target="_blank" />
          <BottomNavigationAction color="blue" label="LinkedInProfile" value="Paresh's LinkedIn" icon={<LinkedInIcon  style={{fill: "#3b5998"}}/>} href="www.linkedin.com/in/paresh-gupta" target="_blank" />
        </BottomNavigation>
        
)
}

export default Footer