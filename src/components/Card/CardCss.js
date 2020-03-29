import colors from '../../constants/colors';
export default {
    cardContainer: {
        margin: '25px 10px 25px 10px',
        backgroundColor: colors.primaryLight,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        justifyContent: 'space-between'
    },
    heading: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardHeaderContainer: {
        height: '40px',
        backgroundColor: colors.primaryDark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '25px',
    },
    headingContainer: {
        backgroundColor: colors.primaryModerate,
        padding: '10px 10px 10px 10px',
        margin: '0 15% -35px 15%',
        width: '70%',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    viewSourceButton: {
        width: '90%',
        color: colors.white,
        borderColor: colors.white,
        margin: '5%'
    },
    footerContainer: {
        backgroundColor: colors.primaryDark,
        marginTop: '10px'
    },
    verifierChip: {
        margin: '10px 5% 10px 5%',
        width: '90%'
    }
};
