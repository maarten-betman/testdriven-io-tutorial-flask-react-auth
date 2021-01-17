import React from 'react';
import {render, cleanup} from "@testing-library/react";

import AddUser from '../AddUser'

afterEach(cleanup);

const props = {
    username: '',
    email: '',
    handleChange: () => { return true },
    addUser: () => { return true },
}

it('renders with default prop', () => {
    const { getByLabelText, getByText } = render(<AddUser {...props}/>);

    const usernameinput = getByLabelText("Username");
    expect(usernameinput).toHaveAttribute('type', 'text');
    expect(usernameinput).toHaveAttribute('required');
    expect(usernameinput).not.toHaveValue();

    const emailInput = getByLabelText('Email');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
    expect(emailInput).not.toHaveValue();

    const buttonInput = getByText('Submit');
    expect(buttonInput).toHaveValue('Submit');
});

it("renders", () => {
    const { asFragment } = render(<AddUser {...props}/>);
    expect(asFragment()).toMatchSnapshot();
})

