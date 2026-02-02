
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Camera, Clock, ArrowRight } from 'lucide-react';

interface EnhancedUpcomingEventsProps {
  onBookNowClick: (eventDate: string, location: string) => void;
}

const EnhancedUpcomingEvents = ({ onBookNowClick }: EnhancedUpcomingEventsProps) => {
  const events = [
  
  ];

  const getStatusColor = (status: string) => {
    return status === 'Confirmed' ? 'text-green-400 bg-green-400/20' : 'text-yellow-400 bg-yellow-400/20';
  };

  const getTypeIcon = (type: string) => {
    return <Camera className="w-5 h-5" />;
  };

  return (
    <section id="events" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl font-thin mb-6 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto font-light"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            See where we'll be capturing magical moments next. Join our journey of creating timeless memories.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="bg-gradient-to-r from-gray-900/50 to-black border-gray-800 hover:border-primary/30 transition-all duration-500 overflow-hidden group hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(event.status)} backdrop-blur-sm`}>
                        {event.status}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 group-hover:to-black/40 transition-colors duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-full mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                        {getTypeIcon(event.type)}
                      </div>
                      <span className="text-primary font-medium text-lg">{event.type}</span>
                    </div>

                    <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4 group-hover:text-gradient transition-all duration-300">
                      {event.title}
                    </h3>

                    <p className="text-white/60 text-lg mb-6 group-hover:text-white/80 transition-colors duration-300">
                      {event.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70 mb-8">
                      <div className="flex items-center group-hover:text-white transition-colors duration-300">
                        <Calendar className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center group-hover:text-white transition-colors duration-300">
                        <Clock className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center group-hover:text-white transition-colors duration-300">
                        <MapPin className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.status === 'Open' && (
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white/60 text-sm mb-2">
                            Slots available for this date and location
                          </p>
                          <p className="text-primary text-sm font-medium">
                            Limited availability - Book now!
                          </p>
                        </div>
                        <button
                          onClick={() => onBookNowClick(event.date, event.location)}
                          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 flex items-center group"
                        >
                          Book This Slot
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancedUpcomingEvents;
