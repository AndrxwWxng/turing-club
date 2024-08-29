import React from 'react';
import CalendarPage from '@/components/Calendar';
import Header from '@/components/Header';

const CalenderPage = () => {
    return (
        <>
        <Header title="Meeting Calendar" subtitle="Check our upcoming events" />
        <CalendarPage />
        </>
    );
};

export default CalenderPage