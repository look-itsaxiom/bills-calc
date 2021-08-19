import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function BillListSchedule(props) {
    const billsToEvents = (billsList) => {
        return billsList.map(bill => ({
            id: billsList.indexOf(bill),
            title: bill.name,
            date: bill.dueDate,
            backgroundColor: (bill.paid ? '#D6FF8E' : "hsla(0, 100%, 38%, 0.72)"),
            textColor: "black",
            allDay: true

        }))
    }

    return (
        <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" events={billsToEvents(props.billsList)} />
    )
}