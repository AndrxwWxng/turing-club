import React from 'react';
import { Calendar } from '@/components/ui/calendar';

const CalendarPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Meeting Calendar</h1>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      {/* add logic here to display meeting details based on the selected date */}
    </div>
  );
};

export default CalendarPage;