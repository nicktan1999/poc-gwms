// src/components/Toolbar.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import backIcon from '@mui/icons-material/ArrowBack';
// import recordsIcon from '@mui/icons-material/Description';
// import openIcon from '@mui/icons-material/OpenInNew';
// import saveIcon from '@mui/icons-material/Save';
// import saveCloseIcon from '@mui/icons-material/ExitToApp';
import newIcon from '@mui/icons-material/Add';
// import deactivateIcon from '@mui/icons-material/NotInterested';
import deleteIcon from '@mui/icons-material/Delete';
// import refreshIcon from '@mui/icons-material/Refresh';
// import accessIcon from '@mui/icons-material/VpnKey';
import { SvgIconComponent } from '@mui/icons-material';
import styles from '../Form/Toolbar.module.css';

type Link = {
  label: string;
  href: string;
  Icon: SvgIconComponent;
  onClick?: () => void;
}

const links: Link[] = [
  { label: 'New', href: '#', Icon: newIcon, onClick: () => {/* Will be set in the component */} },
  { label: 'Delete', href: '#', Icon: deleteIcon },
];

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <div className={styles['links-container']}>
      {links.map((link: Link) => (
        <div key={link.href} className={styles['link-item-container']}>
          <a href={link.href} className={styles['link-item']} onClick={(e) => {
            e.preventDefault();
            if (link.onClick) link.onClick();
          }}>
            <link.Icon style={{ fontSize: 20 }} />
            <span className={styles['link-label']}>{link.label}</span>
          </a>
        </div>
      ))}
    </div>
  );
};

const Toolbar: React.FC = () => {
  const navigate = useNavigate(); 

  // Define the new button's click handler
  const handleNewButtonClick = () => {
    navigate('/new/product', { state: { isNew: true } }); 
  };

  const updatedLinks = links.map(link => 
    link.label === 'New' ? { ...link, onClick: handleNewButtonClick } : link
  );

  return (
    <div>
      <Links links={updatedLinks} />
    </div>
  );
}

export default Toolbar;
