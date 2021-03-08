import React, { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates';
import moment from 'moment';
import './datepickerStyle.scss'


const Datepicker = (props) => {
    const [startDate, setStartDate] = useState(props.startDate);
    const [endDate, setEndDate] = useState(props.endDate);
    const [focusedInput, setFocusedInput] = useState(null);
    const [date, setDate] = useState(props.date);
    const [focused, setFocused] = useState(false);

    const handleDateChange = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
        console.log(startDate)
        props.onChange(startDate, endDate);
    }

    const handleDateChangeSingle = (date) => {
        setDate(date);
        props.onChange(date);
    }

    const handleFocus = () => {
        setFocused(!focused);
    }

    return (
        <>
            {props.options.range ?
                <DateRangePicker
                    startDate={startDate}
                    startDateId="start_date_id"
                    endDate={endDate}
                    endDateId="end_date_id"
                    onDatesChange={({ startDate, endDate }) =>
                        handleDateChange(startDate, endDate)
                    }
                    numberOfMonths={props.options.numMonths ? props.options.numMonths : 2}
                    focusedInput={focusedInput}
                    onFocusChange={setFocusedInput}
                    isOutsideRange={props.options.pastDatesDisabled ? (day => isInclusivelyBeforeDay(day, moment().subtract(1, 'days'))) : (()=>false)}
                /> :
                <SingleDatePicker
                    date={date}
                    onDateChange={(date) => handleDateChangeSingle(date)}
                    focused={focused}
                    onFocusChange={handleFocus}
                    id="single_date_picker"
                    numberOfMonths={props.options.numMonths ? props.options.numMonths : 1}
                    isOutsideRange={props.options.pastDatesDisabled ? (day => isInclusivelyBeforeDay(day, moment().subtract(1, 'days'))) : (()=>false)}
                />
            }
        </>
    );
}

export default Datepicker;