import React, { useState, useEffect } from 'react';
import { Card, Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import InnerCard from '../InnerCard';
import styles from './CardCss';
import { isMobile } from '../../util/commonUtils';


const AppCard = ({ heading, myth, truth, mythBustedBy, link, index }) => {
    const bIsMobile = isMobile();

    const getCardHeader = () => {
        const flexDirection = bIsMobile ? "column" : "row";
        return (
            <div style={{ ...styles.cardHeaderContainer, flexDirection: flexDirection }}>
                <div style={styles.headingContainer}>
                    <span style={styles.heading}>{heading}</span>
                </div>

            </div>
        );
    }

    const getCardContent = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <InnerCard
                    heading="Myth"
                    text={myth}
                    isPositive={false}
                />
                <InnerCard
                    heading="Truth"
                    text={truth}
                    isPositive={true}
                />
            </div>
        )
    }

    const getCardFooter = () => {
        return (
            <div style={styles.footerContainer}>
                <Button style={styles.viewSourceButton} variant="outlined" href={link} target="_blank"> {`Source: ${mythBustedBy}`} </Button>
            </div>
        );
    }

    const cardWidth = bIsMobile ? '90%' : '30%';
    const cardMinWidth = bIsMobile ? cardWidth : '20rem';
    return (
        <Card style={{ ...styles.cardContainer, width: cardWidth, minWidth: cardMinWidth }}>
            {getCardHeader()}
            {getCardContent()}
            {getCardFooter()}
        </Card>
    );
}

export default AppCard;