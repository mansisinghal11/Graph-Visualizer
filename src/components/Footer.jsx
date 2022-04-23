import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {
  return (
    <div className='footer'>
      <p>© 2022 Mansi Singhal</p>
      <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/mansi-singhal-2001/')} />
      <GitHubIcon onClick={() => window.open('https://github.com/mansisinghal11')} />
    </div>
  );
}
