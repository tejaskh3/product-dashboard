# Business Owner Orders Management Web Application

This web application allows a business owner to log in via Google (using Auth0 for authentication). After logging in, the owner can view their account details at the top-left side of the screen and see a list of 2,000 random orders.

## Features

- **User Authentication**: Log in via Google using Auth0.
- **User Details**: View account details (name, email, profile picture) after logging in.
- **Order Management**: Display, search, delete, and edit a list of 2,000 random orders.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: Redux, Redux Toolkit, Redux Persist
- **Authentication**: Auth0

## Project Structure

- **App Component**: Handles authentication state, displays user details and order table.
- **Header Component**: Displays user details and a search bar.
- **OrderTable Component**: Manages and displays orders with pagination, edit, and delete functionality.
- **CreateOrderModal Component**: Allows creation of new orders.
- **Redux Store**: Manages global state and persists state across sessions using Redux Persist.
