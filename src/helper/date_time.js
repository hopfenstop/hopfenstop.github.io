import moment from "moment";

Date.prototype.addHours = function (h) {
    this.setTime(this.getTime() + (h * 60 * 60 * 1000));
    return this;
}

export function formatDate(date) {
    var monthNames = [
        'Januar',
        'Februar',
        'März',
        'April',
        'Mai',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'Dezember',
    ];
    var dayNames = [
        'Sonntag',
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
    ];


    var dateD = date.getDate();
    var dayIndex = date.getDay();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return dayNames[dayIndex] + ', ' + dateD + '. ' + monthNames[monthIndex] + ' ' + year;
}

export function formatTime(d) {

    let date = new Date(d);
    let stringTime = date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}).replace(/(:\d{2}| [AP]M)$/, "");
    return stringTime;
}

/*
 * 1. conversion from java to javascript date format
 * 2. umrechnen in lokale Zeitzone!
 * */
export function convertFromBackendTime(backendDate) {

    var appDate = new Date(backendDate * 1000);
    //convert UTC to local time : https://stackoverflow.com/questions/6525538/convert-utc-date-time-to-local-date-time-using-javascript
    let localDate = new Date(appDate.getTime() + appDate.getTimezoneOffset() * 60 * 1000)

    return localDate;
}

export function convertFromBackendTimeWithoutTimezone(backendDate) {
    return new Date(backendDate * 1000);
}

/*
 Constructor für TimeObject. Sicherstellen der Datenstruktur
 */
function makeTimeObject(openTime, closeTime) {
    var timeObject = {
        openTime: openTime,
        closeTime: closeTime
    }
    return timeObject
}

/*
 Umwandlung in Minuten um vergleichen zu können
 */
function makeComparableTimeObject(hours, minutes) {

    return hours * 60 + minutes
}

/*
 Funktion setzt zeitdaten vom server in anderes Datenformat zusammen.
 Mehrere Zeitblöcke aus einnem Tag werden zu einem zusammengefasst.
 Dabei wird die frühste Startzeit und die späteste Endzeit genommen.
 */
export function getFormatedKioskTimes(kioskTimes) {
    //zugriff auf öffnungszeiten an einem Tag per Tagesnamen formattedKioskTimes[<TagesName>]
    let formattedKioskTimes = {
        SUNDAY: [],
        MONDAY: [],
        TUESDAY: [],
        WEDNESDAY: [],
        THURSDAY: [],
        FRIDAY: [],
        SATURDAY: []
    }
    if (kioskTimes == null || kioskTimes.length == 0) {
        return null
    }
    else {
        kioskTimes.forEach(function (element) {
            formattedKioskTimes[element.day].push(makeTimeObject(element.openTime, element.closeTime))
            formattedKioskTimes[element.day].sort((a, b)=> {
                if (a.openTime[0] < b.openTime[0]) {
                    return -1;
                }
                if (a.openTime[0] > b.openTime[0]) {
                    return 1;
                }
                return 0;
            })
        })

        return formattedKioskTimes
    }
}

export var daysEnum = {
    0: "SUNDAY",
    1: "MONDAY",
    2: "TUESDAY",
    3: "WEDNESDAY",
    4: "THURSDAY",
    5: "FRIDAY",
    6: "SATURDAY"
}

export var dayReverseEnum = {
    "SUNDAY": 0,
    "MONDAY": 1,
    "TUESDAY": 2,
    "WEDNESDAY": 3,
    "THURSDAY": 4,
    "FRIDAY": 5,
    "SATURDAY": 6
}
/*
 returns true wenn offen, false wenn zu, null wenn keine Daten vorliegen
 */
export function isKioskOpenNow(kioskTimes) {
    let formattedKioskTimes = getFormatedKioskTimes(kioskTimes)
    if (formattedKioskTimes == null) {
        return null
    }

    prepareKioskTimes(formattedKioskTimes)

    let date = new Date()
    let dayTodayIndex = date.getDay();
    let dayToday = daysEnum[dayTodayIndex]

    let nowComparableTime = makeComparableTimeObject(date.getHours(), date.getMinutes())

    let todaysOpenTimes = [];
    todaysOpenTimes = formattedKioskTimes[dayToday];

    //kiosk by default geschlossen, wenn ein "ÖffnungsTimeSlice" matched, wird er "geöffnet"
    let open = "CLOSED"
    todaysOpenTimes.forEach(function (element) {
        let kioskOpenComparableTime = makeComparableTimeObject(element.openTime[0], element.openTime[1])
        let kioskCloseComparableTime = makeComparableTimeObject(element.closeTime[0], element.closeTime[1])

        //wenn öffnungszeit mehr als schließzeit, dann ist es über 0:00 hinaus, dann +1 Tag das der Vergleich funktioniert
        if (kioskOpenComparableTime > kioskCloseComparableTime) {
            kioskCloseComparableTime = kioskCloseComparableTime + 24 * 60
        }

        if (nowComparableTime >= kioskOpenComparableTime && nowComparableTime < kioskCloseComparableTime) {
            open = "OPEN"
            if (kioskCloseComparableTime - nowComparableTime < 30 && !iskiosk24h(formattedKioskTimes)) {
                open = "CLOSINGSOON"
            }
        }

        if(element.openTime[0] == 0 && element.openTime[1] == 0 && element.closeTime[0] == 0 && element.closeTime[1] == 0){
            open = "OPEN"
        }
    })

    return open
}

/**
 * Bei Kiosken die an 2 aufeinanderfolgenden Tagen von 00: 00  - 23:59  geöffnet haben sollte
 * nicht schließt bald angezeigt werden.
 * */
function iskiosk24h(formattedKioskTimes){
    let date = new Date()
    let dayTodayIndex = date.getDay();
    let dayToday = daysEnum[dayTodayIndex]

    var returnValue = false

    let todaysOpenTimes = formattedKioskTimes[dayToday];
    todaysOpenTimes.forEach(function (element){
        if(element.closeTime[0] == 23 && element.closeTime[1] == 59){
            let dayTomorrow = daysEnum[(dayTodayIndex + 1) % 7]
            let tomorrowOpenTimes = formattedKioskTimes[dayTomorrow]
            tomorrowOpenTimes.forEach(function (subElement){
                if(subElement.openTime[0] == 0 && subElement.openTime[1] == 0){
                    returnValue = true
                }
            })
        }
    })
    return returnValue
}

/*
 * Macht Öffnungszeit Samstag: 10:00am - 2:00am zu Samstag 10:00 - 00:00 && Sonntag 00:00 - 2:00am
 * */
function prepareKioskTimes(formattedKioskTimes) {

    for (let day in formattedKioskTimes) {
        formattedKioskTimes[day].forEach(function (timeslice){
            let kioskOpenComparableTime = makeComparableTimeObject(timeslice.openTime[0], timeslice.openTime[1])
            let kioskCloseComparableTime = makeComparableTimeObject(timeslice.closeTime[0], timeslice.closeTime[1])
            if (kioskOpenComparableTime > kioskCloseComparableTime && kioskCloseComparableTime != 0) {
                let dayToPushTimeslice = daysEnum[(dayReverseEnum[day] + 1) % 7]
                formattedKioskTimes[dayToPushTimeslice].push({openTime:[0,0], closeTime: timeslice.closeTime})
            }
        })
    }
}

/*
 * returns Array von "TimeObjekten"
 * */
export function getOpenTimesToday(kioskTimes) {
    var formattedKioskTimes = getFormatedKioskTimes(kioskTimes)
    if (formattedKioskTimes == null) {
        //null -> keine öffnungszeiten vorhanden.
        return null
    }
    var date = new Date()
    var dayTodayIndex = date.getDay();
    var dayToday = daysEnum[dayTodayIndex]

    return formattedKioskTimes[dayToday]
}

export function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

