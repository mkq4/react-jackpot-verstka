/* eslint-disable react/prop-types */

import cl from './Footer.module.css';

const FooterBlock = ({ title, links }) => {
  return (
    <div className={cl.footerBlock}>
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBlock;