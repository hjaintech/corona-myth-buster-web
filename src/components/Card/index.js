import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import InnerCard from '../InnerCard';
import styles from './CardCss';


const AppCard = ({ myth, truth, index }) => {
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        console.log(window.screen.availWidth);
        if (window.screen.availWidth < 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });

    return (
        <Card style={{ ...styles.cardContainer, width: isMobile ? '90%' : '60%' }}>
            <span style={styles.heading}>Bust the Myth #{index}</span>
            <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row'}}>
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

        </Card>
    );
}

export default AppCard;