import React, {useState, useEffect} from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Button, Typography, CardActions } from '@material-ui/core';
import InnerCard from '../InnerCard';
import styles from './CardCss';


const AppCard = ({ myth, truth }) => {
    let flexDirection = 'column';
    const [isMobile, setIsMobile] = useState(true);
    useEffect(() => {
        console.log(window.screen.availWidth);
        if (window.screen.availWidth > 600) {
            setIsMobile(true);
        }else {
            setIsMobile(false);
        }
    });

    return (
        <Card style={{...styles.cardContainer, flexDirection: isMobile? 'row': 'column'}}>
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
        </Card>
    );
}

export default AppCard;