import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, {useState} from 'react';

function Layout({ children, activeMenu }) {
  const [value, setValue] = useState(false);

    function onClick() {
      setValue(!value);
    }

  return (
    <div className={styles.container}>
      <Header fold={onClick}/>
      <div className={styles.layout}>
          {value === true ? <div><Menu activeMenu={activeMenu} /> <div className={styles.contents1}>{children}</div></div>
          : <div><div className={styles.pad}/> <div className={styles.contents2}>{children}</div></div>}
      </div>
    </div>
  );
}

export default Layout;