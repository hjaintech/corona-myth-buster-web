import colors from '../../constants/colors';
import {fontFamily} from '../../constants/commonConstants';

const height =  300;

export default {
    bannerContainer: {
        backgroundColor: colors.lightBlack,
        height: height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        width: '100%'
    },
    textContent: {
        position: 'absolute', 
        top: 0, 
        left: 0,
        height: height,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px'
    },
    title: {
        color: colors.white,
        fontSize: '2.5rem',
        fontWeight: 'bold',
        fontFamily: fontFamily,
        marginBottom: 20
    },
    desc: {
        color: colors.white,
        fontSize: 30,
        fontFamily: fontFamily
    },
    bannerBackgroundImage: {
        height: height,
        width: '100%',
        opacity: 0.2
    }
}