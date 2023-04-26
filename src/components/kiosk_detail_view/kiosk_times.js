import React from "react"
import { MapContainer, TileLayer, Marker } from "react-leaflet"
import * as dateAndTimeFunctions from '../../helper/date_time'
import { styles } from '../../styles'

 const showOpenTimesWeek = function(kioskTimes) {
    let times;
    times = dateAndTimeFunctions.getFormatedKioskTimes(kioskTimes);
    if (kioskTimes == null || kioskTimes.length == 0) {
        return;
    }

    return (
        <div>
            <table>
                <tr>
                    <td>Montag</td>
                    <td>{formatFromUntil(times.MONDAY)}</td>
                </tr>
                <tr>
                    <td>Dienstag</td>
                    <td>{formatFromUntil(times.TUESDAY)}</td>
                </tr>
                <tr>
                    <td>Mittwoch</td>
                    <td>{formatFromUntil(times.WEDNESDAY)}</td>
                </tr>
                <tr>
                    <td>Donnerstag</td>
                    <td>{formatFromUntil(times.THURSDAY)}</td>
                </tr>
                <tr>
                    <td>Freitag</td>
                    <td>{formatFromUntil(times.FRIDAY)}</td>
                </tr>
                <tr>
                    <td>Samstag</td>
                    <td>{formatFromUntil(times.SATURDAY)}</td>
                </tr>
                <tr>
                    <td>Sonntag</td>
                    <td>{formatFromUntil(times.SUNDAY)}</td>
                </tr>
            </table>
        </div>
    )
}

const formatFromUntil = function(times, type) {
    let textOpenTimes = []

    if (times == null || times.length == 0) {
        textOpenTimes.push(<span key={0}>{'geschlossen'}</span>)
    } else {
        for (let i = 0; i < times.length; i++) {
            textOpenTimes.push(<span
                key={i}>{dateAndTimeFunctions.formatNumberLength(times[i].openTime[0], 2) + ":" + dateAndTimeFunctions.formatNumberLength(times[i].openTime[1], 2) + " - " + dateAndTimeFunctions.formatNumberLength(times[i].closeTime[0], 2) + ":" + dateAndTimeFunctions.formatNumberLength(times[i].closeTime[1], 2)}</span>)
        }
    }

    return textOpenTimes
}

const KioskTimes = function({kioskTimes}){
    return showOpenTimesWeek(kioskTimes)
}

export default KioskTimes