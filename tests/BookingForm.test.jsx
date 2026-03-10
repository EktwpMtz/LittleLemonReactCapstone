import { expect, test, describe, beforeEach } from '@rstest/core';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { BookingForm } from '../src/booking/BookingForm';

// Helper function to create mock functions
const createMockFn = () => {
  const calls = [];
  const fn = (...args) => {
    calls.push(args);
  };
  fn.mock = { calls };
  fn.mockClear = () => {
    calls.length = 0;
  };
  fn.toHaveBeenCalled = () => calls.length > 0;
  return fn;
};

describe('BookingForm', () => {
  let mockUpdateTableFormField;
  let mockUpdateCustomerInquiryDataField;
  let mockHandleNextStep;
  let mockHandleConfirmReservation;
  let defaultProps;

  beforeEach(() => {
    mockUpdateTableFormField = createMockFn();
    mockUpdateCustomerInquiryDataField = createMockFn();
    mockHandleNextStep = createMockFn();
    mockHandleConfirmReservation = createMockFn();

    const mockTableForm = {
      guests: '',
      date: '',
      time: '',
    };

    const mockCustomerInquiryData = {
      name: '',
      email: '',
      phone: '',
      requests: '',
    };

    defaultProps = {
      step: 1,
      tableForm: mockTableForm,
      customerInquiryData: mockCustomerInquiryData,
      availableTimes: ['17:00', '18:00', '19:00', '20:00'],
      remainingTime: '5:00',
      updateTableFormField: mockUpdateTableFormField,
      updateCustomerInquiryDataField: mockUpdateCustomerInquiryDataField,
      handleNextStep: mockHandleNextStep,
      handleConfirmReservation: mockHandleConfirmReservation,
    };
  });

  describe('Step 1 - Table Reservation', () => {
    test('renders all required fields for step 1', () => {
      render(<BookingForm {...defaultProps} />);

      expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();
    });

    test('displays special offers and important information', () => {
      render(<BookingForm {...defaultProps} />);

      expect(screen.getByText(/special offers/i)).toBeInTheDocument();
      expect(screen.getByText(/book a table for 4 or more and get a free dessert/i)).toBeInTheDocument();
      expect(screen.getByText(/important information/i)).toBeInTheDocument();
    });

    test('guests input has correct validation attributes', () => {
      render(<BookingForm {...defaultProps} />);

      const guestsInput = screen.getByLabelText(/number of guests/i);
      expect(guestsInput).toHaveAttribute('type', 'number');
      expect(guestsInput).toHaveAttribute('min', '1');
      expect(guestsInput).toHaveAttribute('max', '20');
      expect(guestsInput).toBeRequired();
    });

    test('date input has min and max date constraints', () => {
      render(<BookingForm {...defaultProps} />);

      const dateInput = screen.getByLabelText(/date/i);
      expect(dateInput).toHaveAttribute('type', 'date');
      expect(dateInput).toHaveAttribute('min');
      expect(dateInput).toHaveAttribute('max');
      expect(dateInput).toBeRequired();

      // Verify min date is today
      const today = new Date().toISOString().split('T')[0];
      expect(dateInput).toHaveAttribute('min', today);

      // Verify max date is 30 days from today
      const maxDate = new Date();
      maxDate.setDate(maxDate.getDate() + 30);
      expect(dateInput).toHaveAttribute('max', maxDate.toISOString().split('T')[0]);
    });

    test('time select is disabled when no available times', () => {
      const propsWithNoTimes = {
        ...defaultProps,
        availableTimes: [],
      };
      render(<BookingForm {...propsWithNoTimes} />);

      const timeSelect = screen.getByLabelText(/time/i);
      expect(timeSelect).toBeDisabled();
    });

    test('time select is enabled when available times exist', () => {
      render(<BookingForm {...defaultProps} />);

      const timeSelect = screen.getByLabelText(/time/i);
      expect(timeSelect).not.toBeDisabled();
    });

    test('displays all available times in select options', () => {
      render(<BookingForm {...defaultProps} />);

      const timeSelect = screen.getByLabelText(/time/i);
      const options = Array.from(timeSelect.options);

      expect(options).toHaveLength(5); // 1 placeholder + 4 times
      expect(options[0]).toHaveTextContent('Select a time');
      expect(options[1]).toHaveTextContent('17:00');
      expect(options[2]).toHaveTextContent('18:00');
      expect(options[3]).toHaveTextContent('19:00');
      expect(options[4]).toHaveTextContent('20:00');
    });

    test('calls updateTableFormField when guests input changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...defaultProps} />);

      const guestsInput = screen.getByLabelText(/number of guests/i);
      await user.clear(guestsInput);
      await user.type(guestsInput, '4');

      await waitFor(() => {
        expect(mockUpdateTableFormField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls updateTableFormField when date input changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...defaultProps} />);

      const dateInput = screen.getByLabelText(/date/i);
      await user.type(dateInput, '2026-03-15');

      await waitFor(() => {
        expect(mockUpdateTableFormField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls updateTableFormField when time select changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...defaultProps} />);

      const timeSelect = screen.getByLabelText(/time/i);
      await user.selectOptions(timeSelect, '18:00');

      await waitFor(() => {
        expect(mockUpdateTableFormField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls handleNextStep when form is submitted', async () => {
      const user = userEvent.setup();
      const propsWithData = {
        ...defaultProps,
        tableForm: {
          guests: '4',
          date: '2026-03-15',
          time: '18:00',
        },
      };
      render(<BookingForm {...propsWithData} />);

      const continueButton = screen.getByRole('button', { name: /continue/i });
      await user.click(continueButton);

      await waitFor(() => {
        expect(mockHandleNextStep.mock.calls.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Step 2 - Customer Information', () => {
    let step2Props;

    beforeEach(() => {
      step2Props = {
        ...defaultProps,
        step: 2,
        tableForm: {
          guests: '4',
          date: '2026-03-15',
          time: '18:00',
        },
      };
    });

    test('renders all required fields for step 2', () => {
      render(<BookingForm {...step2Props} />);

      expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeInTheDocument();
    });

    test('displays remaining time countdown', () => {
      render(<BookingForm {...step2Props} />);

      expect(screen.getByText(/you're almost there/i)).toBeInTheDocument();
      expect(screen.getByText(/we're holding this table for you for: 5:00/i)).toBeInTheDocument();
    });

    test('name input has correct attributes', () => {
      render(<BookingForm {...step2Props} />);

      const nameInput = screen.getByLabelText(/name/i);
      expect(nameInput).toHaveAttribute('type', 'text');
      expect(nameInput).toBeRequired();
    });

    test('email input has correct validation attributes', () => {
      render(<BookingForm {...step2Props} />);

      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
      expect(emailInput).toBeRequired();
    });

    test('phone input has correct attributes', () => {
      render(<BookingForm {...step2Props} />);

      const phoneInput = screen.getByLabelText(/phone/i);
      expect(phoneInput).toHaveAttribute('type', 'tel');
      expect(phoneInput).toBeRequired();
    });

    test('occasion select is not required', () => {
      render(<BookingForm {...step2Props} />);

      const occasionSelect = screen.getByLabelText(/occasion/i);
      expect(occasionSelect).not.toBeRequired();
    });

    test('displays all occasion options', () => {
      render(<BookingForm {...step2Props} />);

      const occasionSelect = screen.getByLabelText(/occasion/i);
      const options = Array.from(occasionSelect.options);

      expect(options).toHaveLength(4); // 1 placeholder + 3 occasions
      expect(options[0]).toHaveTextContent('Select an occasion');
      expect(options[1]).toHaveTextContent('Birthday');
      expect(options[2]).toHaveTextContent('Engagement');
      expect(options[3]).toHaveTextContent('Anniversary');
    });

    test('calls updateCustomerInquiryDataField when name changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...step2Props} />);

      const nameInput = screen.getByLabelText(/name/i);
      await user.type(nameInput, 'John Doe');

      await waitFor(() => {
        expect(mockUpdateCustomerInquiryDataField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls updateCustomerInquiryDataField when email changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...step2Props} />);

      const emailInput = screen.getByLabelText(/email/i);
      await user.type(emailInput, 'john@example.com');

      await waitFor(() => {
        expect(mockUpdateCustomerInquiryDataField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls updateCustomerInquiryDataField when phone changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...step2Props} />);

      const phoneInput = screen.getByLabelText(/phone/i);
      await user.type(phoneInput, '1234567890');

      await waitFor(() => {
        expect(mockUpdateCustomerInquiryDataField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls updateCustomerInquiryDataField when occasion changes', async () => {
      const user = userEvent.setup();
      render(<BookingForm {...step2Props} />);

      const occasionSelect = screen.getByLabelText(/occasion/i);
      await user.selectOptions(occasionSelect, 'Birthday');

      await waitFor(() => {
        expect(mockUpdateCustomerInquiryDataField.mock.calls.length).toBeGreaterThan(0);
      });
    });

    test('calls handleConfirmReservation when form is submitted', async () => {
      const user = userEvent.setup();
      const propsWithAllData = {
        ...step2Props,
        customerInquiryData: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890',
          requests: 'Birthday',
        },
      };
      render(<BookingForm {...propsWithAllData} />);

      const confirmButton = screen.getByRole('button', { name: /confirm reservation/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(mockHandleConfirmReservation.mock.calls.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Happy Path - Complete Reservation Flow', () => {
    test('completes full reservation process from step 1 to step 2', async () => {
      const user = userEvent.setup();
      
      // Step 1: Start with pre-filled form data
      const propsWithStep1Data = {
        ...defaultProps,
        tableForm: {
          guests: '4',
          date: '2026-03-15',
          time: '18:00',
        },
      };
      
      const { rerender } = render(<BookingForm {...propsWithStep1Data} />);

      // Verify step 1 is displayed with data
      expect(screen.getByDisplayValue('4')).toBeInTheDocument();
      expect(screen.getByDisplayValue('2026-03-15')).toBeInTheDocument();
      expect(screen.getByDisplayValue('18:00')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /continue/i })).toBeInTheDocument();

      // Submit step 1
      const continueButton = screen.getByRole('button', { name: /continue/i });
      await user.click(continueButton);

      await waitFor(() => {
        expect(mockHandleNextStep.mock.calls.length).toBeGreaterThan(0);
      });

      // Step 2: Rerender with step 2 and pre-filled customer data
      const step2Props = {
        ...defaultProps,
        step: 2,
        tableForm: {
          guests: '4',
          date: '2026-03-15',
          time: '18:00',
        },
        customerInquiryData: {
          name: 'John Doe',
          email: 'john@example.com',
          phone: '1234567890',
          requests: 'Birthday',
        },
      };
      rerender(<BookingForm {...step2Props} />);

      // Verify step 2 is displayed with data
      expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
      expect(screen.getByDisplayValue('john@example.com')).toBeInTheDocument();
      expect(screen.getByDisplayValue('1234567890')).toBeInTheDocument();
      expect(screen.getByDisplayValue('Birthday')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /confirm reservation/i })).toBeInTheDocument();

      // Submit step 2
      const confirmButton = screen.getByRole('button', { name: /confirm reservation/i });
      await user.click(confirmButton);

      await waitFor(() => {
        expect(mockHandleConfirmReservation.mock.calls.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Form Validation', () => {
    test('guests input validates number range', () => {
      render(<BookingForm {...defaultProps} />);

      const guestsInput = screen.getByLabelText(/number of guests/i);
      
      // Should not accept values less than 1
      expect(guestsInput).toHaveAttribute('min', '1');
      
      // Should not accept values greater than 20
      expect(guestsInput).toHaveAttribute('max', '20');
    });
  });
});
