import React from 'react'
import styles from './Nav.module.css';
import { logoImg } from '../../assets';
import searchIcon from '@mui/icons-material/Search';
import assistantIcon from '@mui/icons-material/Lightbulb';
import newIcon from '@mui/icons-material/Add';
import findIcon from '@mui/icons-material/FilterAlt';
import settingsIcon from '@mui/icons-material/Settings';
import helpIcon from '@mui/icons-material/QuestionMark';
import { SvgIconComponent } from '@mui/icons-material';

type Link = {
    label: string;
    href: string;
    Icon: SvgIconComponent;
}

const links: Link[] = [
    { label: 'Search', href: '#', Icon: searchIcon },
    { label: 'Assistant', href: '#', Icon: assistantIcon },
    { label: 'New', href: '#', Icon: newIcon },
    { label: 'Advanced Find', href: '#', Icon: findIcon },
    { label: 'Settings', href: '#', Icon: settingsIcon },
    { label: 'Help', href: '#', Icon: helpIcon }
];

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => (
                <div key={link.href} className={styles['link']}>
                    <a href={link.href}>
                        <link.Icon style={{ fontSize: 24}} />
                    </a>
                </div>
            ))}
        </div>
    );
};

const Nav: React.FC<{}> = () => {
  return (
    <nav className={styles.navbar}>
       <div className={styles['logo-container']}>
            <img className={styles['img-Logo']} width="0px" height="0px" src={logoImg} alt="logo"/>
       </div>
       <div className={styles['site-name']}><a href="#">Amway Durable Services - New</a></div>
       {/* <Links links={links}/> */}
    </nav>
  )
}

export default Nav
