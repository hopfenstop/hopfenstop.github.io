export const PRIMARY_COLOR = "#e0ab16"
export const STANDARD_FONT_SIZE = 16

export const styles = {
    contentWrapper: {
        marginLeft: 20,
        marginRight: 20
    },
    divider: {
        borderTop: '0.5px solid #bbb',
        borderBottom: '0px'
    },
    grey:{
        color: 'grey'
    },
    callToAction:{
        color: '#007aff'
    },
    kioskTimes: {
        dayColumn: {
            minWidth: '110px'
        },
        timeColumn: {
            color: 'grey'
        }
    },
    kioskDetailView: {
        kioskName: {
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 15
        },
        kioskTimes: {
            viewWeekDay: {
                flex: 0,
                flexDirection: "row"
            },
            textWeekDay:{
                fontSize: STANDARD_FONT_SIZE,
                marginRight: 5,
                minWidth: 80,
            },
        },
        sectionHeader: {
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: STANDARD_FONT_SIZE,
            fontWeight: 'bold',
            display: 'block'
        },
        sectionHeaderRight: {
            fontWeight: 'normal',
            float: 'right'
        },
        sectionText: {
            paddingBottom: 10,
            fontSize: STANDARD_FONT_SIZE,
            color: 'grey'
        },
        noToilet:{
            paddingBottom: 10,
            color: 'red',
        },
        toilet: {
            paddingBottom: 10,
            color: 'green',
        }
    }
}