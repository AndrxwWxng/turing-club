"use client";
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Event = {
  date: Date;
  title: string;
  description: string;
};

const events: Event[] = [
  {
    date: new Date(2024, 7, 28),
    title: "First Club Meeting",
    description: "Join us for the first meeting of the semester! We'll discuss upcoming projects and events."
  },
  {
    date: new Date(2024, 8, 11),
    title: "Second Club Meeting",
    description: "Our second meeting of the semester. Meet with us as we continue to prepare to begin our lessons. "
  },
  //add more events here 
  //when you add more events, make sure to make the month 1 less than the actually month (ex. august is 7)
];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedEvents, setSelectedEvents] = useState<Event[]>([]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const eventsOnDate = events.filter(
        event => event.date.toDateString() === date.toDateString()
      );
      setSelectedEvents(eventsOnDate);
    } else {
      setSelectedEvents([]);
    }
  };

  return (
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Calendar</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="rounded-md border w-full h-full flex justify-center"
                components={{
                  DayContent: ({ date }) => {
                    const hasEvent = events.some(
                      event => event.date.toDateString() === date.toDateString()
                    );
                    return (
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div>{date.getDate()}</div>
                        {hasEvent && (
                          <div className="absolute bottom-1 right-1 w-2 h-2 bg-blue-500 rounded-full" />
                        )}
                      </div>
                    );
                  },
                }}
            />
            </CardContent>
          </Card>
          <Card className="lg:col-span-1 flex flex-col">
            <CardHeader>
              <CardTitle>Events</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-auto">
              {selectedEvents.length > 0 ? (
                selectedEvents.map((event, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {event.date.toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-base">{event.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-8">No events scheduled for this date.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
  );
};

export default CalendarPage;