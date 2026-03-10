import { useState, useMemo, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../lib/api';
import { BookingForm } from './BookingForm';
import './BookingPage.css';

export const BookingPage = () => {
  const [timer, setTimer] = useState(300); // 5 minutes en segundos
  const [step, setStep] = useState(1);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Formulario paso 1
  const [tableForm, setTableForm] = useState({
    guests: '',
    date: '',
    time: '',
  });

  // Formulario paso 2
  const [customerInquiryData, setCustomerInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    requests: '',
  });

  useEffect(() => {
    if (tableForm.guests && tableForm.date) {
      const result = fetchAPI(new Date(tableForm.date));
      setAvailableTimes(result);
    }
  }, [tableForm]);

  const updateTableFormField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTableForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateCustomerInquiryDataField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCustomerInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
    setTimer(300);
    setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          alert('Your reservation has expired. Please start again.');
          setStep(1);
          return 0;
        }
      });
    }, 1000);
  };

  const handleConfirmReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Reservation data:', { tableForm, customerInquiryData });
    submitAPI({ tableForm, customerInquiryData });
    alert('Your reservation has been confirmed! We look forward to serving you.');
  };



  const remainingTime = useMemo(() => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, [timer]);

  return (
    <section className="booking">
      <h1>Reservation at Little Lemon Restaurant</h1>
      <article className="booking-process">
        <img
          src="/restaurant.jpg"
          alt="Restaurant"
          className="booking-image"
        />
        <div className="booking-steps">
          <span data-active={step === 1}>1) Find a table</span>
          <span data-active={step === 2}>2) Choose a date</span>
        </div>
        <hr></hr>
        <BookingForm
          step={step}
          tableForm={tableForm}
          customerInquiryData={customerInquiryData}
          availableTimes={availableTimes}
          remainingTime={remainingTime}
          updateTableFormField={updateTableFormField}
          updateCustomerInquiryDataField={updateCustomerInquiryDataField}
          handleNextStep={handleNextStep}
          handleConfirmReservation={handleConfirmReservation}
        />
      </article>
    </section>
  );
};
