import React from 'react';
import CalendarPage from '@/components/Calendar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CalenderPage = () => {
    return (
        <>
        <Header title="Meeting Calendar" subtitle="Check our upcoming events" />
        <CalendarPage />
        <Footer />
        </>
    );
};

export default CalenderPage