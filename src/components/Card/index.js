import React, { useState, useEffect } from 'react';
import { Card, Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import InnerCard from '../InnerCard';
import styles from './CardCss';
import {isMobile} from '../../util/commonUtils';


const AppCard = ({ myth, truth, mythBustedBy, link, index }) => {
    const bIsMobile = isMobile();

    const getCardHeader = () => {
        const flexDirection = bIsMobile ? "column" : "row";
        return (
            <div style={{...styles.cardHeaderContainer, flexDirection: flexDirection}}>
                <Chip label={`Source: ${mythBustedBy}`} />
                <span style={styles.heading}>Bust the Myth #{index}</span>
                <div style={{ backgroundColor: 'white', borderRadius: 10 }}>
                    <Button variant="outlined" color="default" onClick={() => { window.open(link) }}>
                        More details
                    </Button>
                </div>

            </div>
        );
    }

    return (
        <Card style={{ ...styles.cardContainer, width: bIsMobile ? '90%' : '60%' }}>
            {getCardHeader()}

            <div style={{ display: 'flex', flexDirection: bIsMobile ? 'column' : 'row' }}>
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