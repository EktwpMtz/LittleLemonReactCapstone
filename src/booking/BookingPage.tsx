import { useState } from 'react';
import './BookingPage.css';

export const BookingPage = () => {
  const [step, setStep] = useState(1);

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

  const updateTableFormField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTableForm((prev) => ({ ...prev, [name]: value }));
  };

  const updateCustomerInquiryDataField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInquiryData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handleConfirmReservation = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para confirmar la reserva
    console.log('Reservation data:', { formData1: tableForm, formData2: customerInquiryData });
    alert('Reservation confirmed!');
  };

  const minDate = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

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
        {step === 1 ? (
          <div className="booking-form" data-step={1}>
            <form onSubmit={handleNextStep}>
              <div className="form-field">
                <label htmlFor="guests">Number of guests:</label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="20"
                  value={tableForm.guests}
                  onChange={updateTableFormField}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="date">Date:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  min={minDate}
                  value={tableForm.date}
                  onChange={updateTableFormField}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="time">Time:</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={tableForm.time}
                  onChange={updateTableFormField}
                  required
                />
              </div>
              <button type="submit">
                Continue
              </button>
            </form>
            <div>
              <h2>Special Offers</h2>
              <p>Book a table for 4 or more and get a free dessert!</p>
              <h3>Important Information</h3>
              <p>
                Please arrive 10 minutes before your reservation time. We look
                forward to serving you!
              </p>
            </div>
          </div>
        ) : (
          <div className="booking-form" data-step={2}>
            <form onSubmit={handleConfirmReservation}>
              <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInquiryData.name}
                  onChange={updateCustomerInquiryDataField}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInquiryData.email}
                  onChange={updateCustomerInquiryDataField}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerInquiryData.phone}
                  onChange={updateCustomerInquiryDataField}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="requests">Occasion:</label>
                <input
                  type="text"
                  id="requests"
                  name="requests"
                  value={customerInquiryData.requests}
                  onChange={updateCustomerInquiryDataField}
                />
              </div>

              <button type="submit">Confirm Reservation</button>
            </form>
            <div>
              <h2>You're almost there!</h2>
              <p>We're holding this table for you for: 5:00</p>
              <h3>Need to make changes?</h3>
              <p>
                You can modify your reservation up to 24 hours before your
                scheduled time.
              </p>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};
