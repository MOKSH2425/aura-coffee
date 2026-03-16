'use client';
import { useState } from 'react';

export default function Book() {
  const [guests, setGuests] = useState('2 Guests');
  const [slot, setSlot] = useState('02:30 PM');
  const [date, setDate] = useState('3');

  return (
    <div className="flex-grow pt-12 pb-20 px-6 relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aura-gold/5 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserve Your Moment</h1>
              <p className="text-gray-400 text-sm max-w-lg mx-auto">Experience the art of single-origin brewing in our signature lounge. Secure your spot today.</p>
          </div>

          <div className="bg-aura-card border border-white/5 rounded-xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-7/12 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-white/5">
                  <div className="mb-10">
                      <div className="flex items-center justify-between mb-6">
                          <h3 className="flex items-center gap-3 font-bold text-lg">
                              <span className="bg-[#2A2521] text-aura-gold w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                              Select Date
                          </h3>
                          <div className="flex items-center gap-4 text-xs font-bold text-gray-400">
                              <span className="material-icons text-sm cursor-pointer hover:text-white">chevron_left</span>
                              <span>October 2026</span>
                              <span className="material-icons text-sm cursor-pointer hover:text-white">chevron_right</span>
                          </div>
                      </div>

                      <div className="grid grid-cols-7 gap-y-4 text-center mb-4">
                          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(d => (
                              <span key={d} className="text-[10px] font-bold text-gray-600 uppercase">{d}</span>
                          ))}
                      </div>
                      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium">
                          <span className="text-gray-600 py-2">28</span>
                          <span className="text-gray-600 py-2">29</span>
                          <span className="text-gray-600 py-2">30</span>
                          {['1', '2', '3', '4', '5', '6', '7'].map(d => (
                              <button 
                                key={d}
                                onClick={() => setDate(d)}
                                className={date === d ? "bg-aura-gold text-white rounded py-2 shadow-lg shadow-aura-gold/20 font-bold" : "text-white hover:bg-white/5 rounded py-2 transition-colors"}
                              >
                                {d}
                              </button>
                          ))}
                      </div>
                  </div>

                  <div className="mb-10">
                      <h3 className="flex items-center gap-3 font-bold text-lg mb-6">
                          <span className="bg-[#2A2521] text-aura-gold w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                          Table Size
                      </h3>
                      <div className="flex flex-wrap gap-3">
                          {['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5+ Guests'].map(g => (
                              <button 
                                key={g} 
                                onClick={() => setGuests(g)}
                                className={`border border-white/10 rounded-full px-6 py-2 text-xs font-bold text-gray-400 hover:border-aura-gold hover:text-aura-gold transition-all cursor-pointer whitespace-nowrap ${guests === g ? 'border-aura-gold text-aura-gold bg-aura-gold/10' : ''}`}
                              >
                                {g}
                              </button>
                          ))}
                      </div>
                  </div>

                  <div>
                      <h3 className="flex items-center gap-3 font-bold text-lg mb-6">
                          <span className="bg-[#2A2521] text-aura-gold w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                          Available Slots
                      </h3>

                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Morning</p>
                      <div className="grid grid-cols-4 gap-3 mb-6">
                         {['09:00 AM', '09:30 AM', '10:00 AM'].map(t => (
                             <button key={t} onClick={() => setSlot(t)} className={`time-slot ${slot === t ? 'active' : ''}`}>{t}</button>
                         ))}
                          <button className="time-slot opacity-30 cursor-not-allowed line-through border-transparent">10:30 AM</button>
                      </div>

                      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Afternoon</p>
                      <div className="grid grid-cols-4 gap-3">
                          {['01:00 PM', '02:30 PM', '03:00 PM', '04:30 PM'].map(t => (
                              <button key={t} onClick={() => setSlot(t)} className={`time-slot ${slot === t ? 'active' : ''}`}>{t}</button>
                          ))}
                      </div>
                  </div>
              </div>

              <div className="lg:w-5/12 bg-[#181411] p-8 md:p-10 flex flex-col">
                  <h3 className="font-bold text-lg mb-8">Finalize Reservation</h3>

                  <div className="space-y-6 flex-grow">
                      <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Full Name</label>
                          <input type="text" className="w-full bg-[#2A2521] border border-white/5 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-aura-gold focus:border-aura-gold transition-all outline-none" placeholder="John Doe" />
                      </div>
                      <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Phone Number</label>
                          <input type="tel" className="w-full bg-[#2A2521] border border-white/5 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-aura-gold focus:border-aura-gold transition-all outline-none" placeholder="+91 00000 00000" />
                      </div>
                      <div>
                          <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 block">Special Requests</label>
                          <textarea className="w-full bg-[#2A2521] border border-white/5 rounded-md px-4 py-3 text-sm text-white placeholder-gray-600 focus:ring-1 focus:ring-aura-gold focus:border-aura-gold transition-all outline-none h-24 resize-none" placeholder="Birthday, window seat, allergies..."></textarea>
                      </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5">
                      <div className="flex justify-between items-end mb-4 text-xs">
                          <div>
                              <p className="text-gray-500 font-bold uppercase tracking-widest mb-1">Reservation Summary</p>
                              <p className="text-white font-bold text-sm">Oct {date}rd • {slot} • {guests}</p>
                          </div>
                          <span className="material-icons text-aura-gold">edit_calendar</span>
                      </div>

                      <button className="w-full bg-aura-gold text-white font-bold py-4 rounded-md uppercase tracking-wider hover:bg-white hover:text-aura-dark transition-all shadow-lg shadow-aura-gold/10">
                          Secure Table
                      </button>
                      <p className="text-[10px] text-gray-600 text-center mt-4">Cancellations must be made 2 hours in advance.</p>
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-aura-card border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-aura-gold/30 transition-colors">
                  <div className="bg-[#2A2521] p-3 rounded-lg text-aura-gold">
                      <span className="material-icons">location_on</span>
                  </div>
                  <div>
                      <h4 className="font-bold text-sm mb-1">Our Location</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Hitech City, Hyderabad<br/><a href="#" className="text-aura-gold hover:underline">Get Directions</a></p>
                  </div>
              </div>
              <div className="bg-aura-card border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-aura-gold/30 transition-colors">
                  <div className="bg-[#2A2521] p-3 rounded-lg text-aura-gold">
                      <span className="material-icons">schedule</span>
                  </div>
                  <div>
                      <h4 className="font-bold text-sm mb-1">Lounge Hours</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Daily: 8:00 AM - 11:00 PM<br/>Weekends till Midnight</p>
                  </div>
              </div>
              <div className="bg-aura-card border border-white/5 p-6 rounded-xl flex items-start gap-4 hover:border-aura-gold/30 transition-colors">
                  <div className="bg-[#2A2521] p-3 rounded-lg text-aura-gold">
                      <span className="material-icons">confirmation_number</span>
                  </div>
                  <div>
                      <h4 className="font-bold text-sm mb-1">Instant Confirmation</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">Receive booking details via SMS and Email instantly.</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
