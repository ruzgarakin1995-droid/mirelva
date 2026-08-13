"use client";
import React, { useState, useRef, useEffect } from 'react';

interface CustomDatePickerProps {
  value: string;
  onChange: (date: string) => void;
  disabled?: boolean;
  position?: 'top' | 'bottom';
}

export function CustomDatePicker({ value, onChange, disabled, position = 'bottom' }: CustomDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
    
    return { daysInMonth, firstDayOfMonth: adjustedFirstDay };
  };

  const { daysInMonth, firstDayOfMonth } = getDaysInMonth(currentMonth);

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = (currentMonth.getMonth() + 1).toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
    const selectedDateString = `${year}-${month}-${formattedDay}`;
    onChange(selectedDateString);
    setIsOpen(false);
  };

  const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
  const dayNames = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

  const getDisplayValue = () => {
    if (!value) return "";
    const [y, m, d] = value.split('-');
    const monthName = monthNames[parseInt(m) - 1];
    return `${parseInt(d)} ${monthName} ${y}`;
  };

  const isPast = (day: number) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dateToCheck = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return dateToCheck < today;
  };

  return (
    <div className="relative w-full" ref={wrapperRef}>
      <div 
        className={`w-full bg-transparent border-b py-2 transition-colors flex justify-between items-center ${disabled ? 'opacity-50 cursor-not-allowed border-[#E5E0D8]' : 'cursor-pointer border-[#E5E0D8] hover:border-[#1A1A1A]'}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={`font-light text-sm ${value ? 'text-[#1A1A1A]' : 'text-[#8C8A84]'}`}>
          {value ? getDisplayValue() : 'Tarih Seçin'}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${isOpen ? 'text-[#1A1A1A]' : 'text-[#8C8A84]'} transition-colors`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {isOpen && (
        <div className={`absolute ${position === 'top' ? 'bottom-[calc(100%+8px)]' : 'top-full mt-2'} left-0 w-full min-w-[260px] bg-[#FAF9F6] border border-[#E5E0D8] shadow-2xl z-50 p-4 animate-fade-in-up`}>
          <div className="flex justify-between items-center mb-3 border-b border-[#E5E0D8] pb-3">
            <button type="button" onClick={prevMonth} className="p-1.5 hover:bg-[#E5E0D8] hover:text-[#1A1A1A] transition-all text-[#8C8A84] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-serif text-[#1A1A1A] tracking-wider text-[13px] uppercase">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <button type="button" onClick={nextMonth} className="p-1.5 hover:bg-[#E5E0D8] hover:text-[#1A1A1A] transition-all text-[#8C8A84] rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-1">
            {dayNames.map(day => (
              <div key={day} className="text-center text-[9px] uppercase tracking-[0.1em] text-[#8C8A84] py-1">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
              <div key={`empty-${idx}`} className="h-8"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, idx) => {
              const day = idx + 1;
              const selected = value === `${currentMonth.getFullYear()}-${(currentMonth.getMonth() + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
              const past = isPast(day);
              return (
                <button
                  key={day}
                  type="button"
                  disabled={past}
                  onClick={() => handleDateSelect(day)}
                  className={`h-8 w-full flex items-center justify-center text-xs transition-all duration-300 font-light
                    ${past ? 'text-[#E5E0D8] cursor-not-allowed line-through' : 
                      selected ? 'bg-[#1A1A1A] text-white border border-[#1A1A1A]' : 
                      'text-[#1A1A1A] border border-transparent hover:border-[#1A1A1A] hover:bg-transparent'
                    }
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
