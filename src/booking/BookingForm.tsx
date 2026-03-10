import { useMemo } from 'react';

type BookingFormProps = {
  step: number;
  tableForm: {
    guests: string;
    date: string;
    time: string;
  };
  customerInquiryData: {
    name: string;
    email: string;
    phone: string;
    requests: string;
  };
  availableTimes: string[];
  remainingTime: string;
  updateTableFormField: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  updateCustomerInquiryDataField: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleNextStep: (e: React.FormEvent<HTMLFormElement>) => void;
  handleConfirmReservation: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const BookingForm = ({
  step,
  tableForm,
  customerInquiryData,
  availableTimes,
  remainingTime,
  updateTableFormField,
  updateCustomerInquiryDataField,
  handleNextStep,
  handleConfirmReservation,
}: BookingFormProps) => {
  const [minDate, maxDate] = useMemo(() => {
    const today = new Date();
    const max = new Date(today);
    max.setDate(max.getDate() + 30);
    return [
      today.toISOString().split('T')[0],
      max.toISOString().split('T')[0]
    ];
  }, []);
  return (
    <>
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
                max={maxDate}
                value={tableForm.date}
                onChange={updateTableFormField}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="time">Time:</label>
              <div className='select-wrapper'>
                <span className="material-symbols-outlined">
                  schedule
                </span>
                <select
                  id="time"
                  name="time"
                  value={tableForm.time}
                  onChange={updateTableFormField}
                  required
                  disabled={!availableTimes.length}
                >
                  <option value="" disabled>Select a time</option>
                  {availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
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
              <div className="select-wrapper">
                <span className="material-symbols-outlined">
                  favorite
                </span>
                <select
                  id="requests"
                  name="requests"
                  value={customerInquiryData.requests}
                  onChange={updateCustomerInquiryDataField}
                >
                  <option value="">Select an occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
            </div>

            <button type="submit">Confirm Reservation</button>
          </form>
          <div>
            <h2>You're almost there!</h2>
            <p>We're holding this table for you for: {remainingTime}</p>
            <h3>Need to make changes?</h3>
            <p>
              You can modify your reservation up to 24 hours before your
              scheduled time.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
