import React from 'react';
import styles from './InnerCardCss';
import crossIcon from '../../assets/close.png';
import tickIcon from '../../assets/tick.png';
import colors from '../../constants/colors';

const InnerCard = ({ heading, text, isPositive }) => {
    const borderColor = isPositive ? colors.positive : colors.negative;
    const icon = isPositive ? tickIcon : crossIcon;
    return (
        <div style={{ ...styles.container, borderColor: borderColor }}>
            <div style={styles.headingContainer}>
                <img src={icon} style={styles.icon} />
                <span style={styles.heading}>{heading}</span>
                <img src={icon} style={styles.icon} />
            </div>

            <div style={styles.seperator} />
            <span>{text}</span>
        </div>
    );
}

export default InnerCard;