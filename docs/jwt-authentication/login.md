---
sidebar_position: 1
---

# Login With JWT
This guide demonstrates how to implement **JWT-based authentication** using the `AuthMateClient` library. JSON Web Tokens (JWT) are a secure, compact, and self-contained way to represent user identity between client and server.

## Overview

The `loginWithJWT` method provided by **AuthMate** enables users to log in by submitting their email and password. Upon successful authentication, a JWT is returned that you can use to authorize subsequent API requests.

## Prerequisites

Before using `loginWithJWT`, ensure you have:

- A valid **AuthMate API key**
- A registered user with **email** and **password**
- Installed the `authmate` package

```bash
import { AuthMateClient } from 'authmate';

// Replace with your actual AuthMate API key
const apiKey = 'Your-API-Key';

// User credentials
const payload = {
  email: 'test@example.com',
  password: 'Test@123'
};

// Login with JWT
const loginRes = await AuthMateClient.loginWithJWT(apiKey, payload);

// The response will contain the JWT token and user information
console.log('JWT Login Response:', loginRes);
```

## Example Response

On a successful login, you'll receive a response similar to:

``` bash
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_12345",
    "email": "test@example.com",
    "name": "Test User"
  }
}
```

You can store the token in localStorage, sessionStorage, or use React state/context to manage the user session.
