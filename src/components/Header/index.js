import React from 'react';
import styles from './HeaderCss';
const Header = () => {
    return (
        <div style={styles.headerContainer}>
          <span style={styles.headingText}>Corona Myths</span>
        </div>
    );
}

export default Header;