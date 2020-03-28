import colors from '../../constants/colors';

export default {
    container: {
        display: 'flex',
        flexDirection: 'column',
        borderWidth: '0 0 0 10px',
        borderStyle: 'solid',
        borderRadius: '6px',
        marginBottom: '10px',
        marginTop: '10px',
        paddingLeft: '20px',
        backgroundColor: 'white',
        margin: '10px 5% 10px 5%',
        padding: '20px',
        flex: 1,
        boxShadow: `1px 1px 5px 5px ${colors.grey}`
    },
    heading: {
        textTransform: 'uppercase',
        color: '#383050',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    seperator: {
        height: '1px',
        backgroundColor: '#979797',
        margin: '5px 0 5px 0'
    },
    icon: {
        height: '15px',
        width: '15px'
    },
    headingContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}