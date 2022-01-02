import React from 'react';
import { toQueryParams } from './util';

//add state param in future
const authorizeOptions = {
    client_id: 'bff2cdf0fb7a4ba680ed838ce9bbcea7',
    response_type: 'code',
    redirect_uri: 'http://localhost:3000',
    scope: 'user-read-private user-read-email'
}
const AUTH_URL = "https://accounts.spotify.com/authorize?" + toQueryParams(authorizeOptions);

export default function Login() {
    return (
        <div>
            <a href={AUTH_URL}>login</a>
        </div>
    )
}