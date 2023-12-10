# CBN Approved QR Code Payment System - Final Year Project

Welcome to the CBN Approved QR Code Payment System - a proposed implementation for the Central Bank of Nigeria (CBN). This project serves as the final year project for B.Sc Computer Science at Federal University of Lafia. It is designed to demonstrate a secure and trusted payment system using CBN-approved QR codes.

## Project Overview

This project aims to provide a robust QR Code Payment System in line with the strategic goals of the Central Bank of Nigeria. It offers a user-friendly interface for managing user accounts, businesses, and generating CBN-approved QR codes. Additionally, a dedicated QR Code Scanner is provided for customers to make secure payments.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js and npm](https://nodejs.org/)
- [MySQL Database](https://www.mysql.com/)

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/ralphses/secured_qr_payment_system.git
    ```

2. **Backend Setup:**

    - Navigate to the CBN Approved QR Code Payment System backend:

        ```bash
        cd secured_qr_payment_system_backend
        ```

    - Build and run the Spring Boot application:

        ```bash
        mvn clean install
        java -jar target/cbn-approved-qr-payment.jar
        ```

3. **User Management Frontend:**

    - Navigate to the User Management frontend directory:

        ```bash
        cd secured_qr_payment_system_web
        ```

    - Install dependencies and start the React app:

        ```bash
        npm install
        npm start
        ```

4. **QR Code Scanner Frontend:**

    - Navigate to the QR Code Scanner frontend directory:

        ```bash
        cd secured_qr_payment_system_client
        ```

    - Install dependencies and start the React app:

        ```bash
        npm install
        npm start
        ```

## Usage

1. **User Management:**

    - Access the CBN User Management application at [http://localhost:3000](http://localhost:3000) in your browser.

2. **QR Code Scanner:**

    - Access the CBN QR Code Scanner application at [http://localhost:3001](http://localhost:3001) in your browser.

## Contributing

Feel free to contribute to the project! 
