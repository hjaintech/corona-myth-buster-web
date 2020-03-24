import React, { useState, useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import InnerCard from '../InnerCard';
import styles from './CardCss';


const AppCard = ({ myth, truth, mythBustedBy, link, index }) => {
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
            <div style={{ padding: '0 20px 0 20px', height: '100px', backgroundColor: '#2296f3', display: 'flex', flexDirection: 'row', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px'}}>
                <Chip label={`Source: ${mythBustedBy}`} />
                <span style={styles.heading}>Bust the Myth #{index}</span>
                <div style={{ backgroundColor: 'white', borderRadius: 10 }}>
                    <Button variant="outlined" color="default" onClick={() => { window.open(link) }}>
                        More details
                    </Button>
                </div>

            </div>

            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
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