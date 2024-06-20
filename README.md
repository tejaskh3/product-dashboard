# Business Owner Orders Management Web Application

This web application allows a business owner to log in via Google (using Auth0 for authentication). After logging in, the owner can view their account details at the top-left side of the screen and see a list of 2,000 random orders.
![image](https://github.com/tejaskh3/product-dashboard/assets/98630752/de2f2099-da40-4ff6-940a-4e6e3f1e0cc8)
- mobile view
  ![image](https://github.com/tejaskh3/product-dashboard/assets/98630752/3d5b76f4-5e06-4fcf-9163-2ae7d5184e20)
  ![image](https://github.com/tejaskh3/product-dashboard/assets/98630752/e27b8285-f62f-49a9-926f-45e70c8967da)



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
