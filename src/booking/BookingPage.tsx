import { useState } from 'react';
import './BookingPage.css';

export const BookingPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

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
            <form>
              <label htmlFor="guests">Number of guests:</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                max="20"
                required
              />
              <br />
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" required />
              <br />
              <label htmlFor="time">Time:</label>
              <input type="time" id="time" name="time" required />
              <br />
              <button type="submit" onClick={handleNextStep}>
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
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
              <br />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <br />
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" required />
              <br />
              <label htmlFor="requests">Ocassion</label>
              <input type="text" id="requests" name="requests" />
              <br />

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
