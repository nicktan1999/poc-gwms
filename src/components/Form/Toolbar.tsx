import React from 'react'
import backIcon from '@mui/icons-material/ArrowBack';
import recordsIcon from '@mui/icons-material/Description';
import openIcon from '@mui/icons-material/OpenInNew';
import saveIcon from '@mui/icons-material/Save';
import saveCloseIcon from '@mui/icons-material/ExitToApp';
import newIcon from '@mui/icons-material/Add';
import deactivateIcon from '@mui/icons-material/NotInterested';
import deleteIcon from '@mui/icons-material/Delete';
import refreshIcon from '@mui/icons-material/Refresh';
import accessIcon from '@mui/icons-material/VpnKey';
import { SvgIconComponent } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styles from './Toolbar.module.css'

type Link = {
    label: string;
    href: string;
    Icon: SvgIconComponent;
}

const links: Link[] = [
    { label: 'Back', href: '/', Icon: backIcon },
    { label: 'Save', href: '#', Icon: saveIcon },
    { label: 'New', href: '#', Icon: newIcon },
    { label: 'Deactivate', href: '#', Icon: deactivateIcon },
    { label: 'Delete', href: '#', Icon: deleteIcon }
];

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => (
                <div key={link.href} className={styles['link-item-container']}>
                    <a href={link.href} className={styles['link-item']}>
                        <link.Icon />
                        <span className={styles['link-label']}>{link.label}</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

const Toolbar: React.FC<{}> = () => {
  return (
    <div>
       <Links links={links}/>
    </div>
  )
}

export default Toolbar