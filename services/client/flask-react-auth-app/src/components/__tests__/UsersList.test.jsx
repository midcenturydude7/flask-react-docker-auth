import React from 'react';
import { render, cleanup } from '@testing-library/react';

import UsersList from '../UsersList';

afterEach(cleanup);

const users = [
    {
        'email': 'hermanu@gmail.com',
        'id': 1,
        'username': 'michael'
    },
    {
        'email': 'michael@mherman.org',
        'id': 2,
        'username': 'michaelherman'
    }
];

it('renders a username', () => {
    const { getByText } = render(<UsersList users={users}/>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('michael')).toHaveClass('username');
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('michaelherman')).toHaveClass('username');
});
