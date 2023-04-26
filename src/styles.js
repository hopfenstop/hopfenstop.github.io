export const PRIMARY_COLOR = "#e0ab16"
export const STANDARD_FONT_SIZE = 16

export const styles = {
    kioskDetailView: {
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
            fontWeight: 'bold'
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