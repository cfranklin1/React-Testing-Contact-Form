import React from 'react';
import { screen, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event';

import App from './App';
import ContactForm from './components/ContactForm';


test("app rendering", () => {
    render(<App />);
});

test("name input test", () => {
    render(<ContactForm />);

    const nameInput = screen.queryByText(/''/i);

    expect(nameInput).toBeInTheDocument();
});


test("clicks form submit button", () => {
    render(<ContactForm />);

    const input = screen.getByRole('textbox');

    const button = screen.getByRole('submit');

    userEvent.click(button);

    expect(input).not.toHaveTextContent('');


})