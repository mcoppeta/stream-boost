import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        axios
        .post('http://localhost:3001/login', {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
            console.log(res.data);
            console.log(accessToken)
            window.history.pushState({}, null, "/");
        })
        .catch(() => {
            window.location = "/";
        })
    }, [code]);

    return accessToken;
}