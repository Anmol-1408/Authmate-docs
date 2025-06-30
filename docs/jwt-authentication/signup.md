---
sidebar_position: 2
---

# SignUp With JWT

This guide explains how to register users using **JWT-based authentication** with the `AuthMateClient` library. The signup process creates a new user account and returns a JWT token, which can be used for immediate login or further authenticated operations.

## Overview

Using the `register` method from **AuthMate**, you can allow new users to sign up with their email and password. Upon successful registration, the API returns a JWT token and user profile information.

## Prerequisites

Before using `register`, make sure:

- You have an **AuthMate API key**
- The `authmate` package is installed in your project


```bash
import { AuthMateClient } from 'authmate';

// Replace with your actual AuthMate API key
const apiKey = 'Your-API-Key';

// User credentials
const payload = {
  email: 'test@example.com',
  password: 'Test@123'
};

// Register new user
const regRes = await AuthMateClient.register(apiKey, payload);

// The response contains a JWT token and user details
console.log('User Registered:', regRes);
```

## Example Response
A successful registration will return a response similar to:

```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user_67890",
    "email": "test@example.com",
    "name": null
  }
}
```
You can immediately log in the user or store the token to keep them signed in.