# CBN Approved QR Code Payment System - Final Year Project

Welcome to the CBN Approved QR Code Payment System - a proposed implementation for the Central Bank of Nigeria (CBN). This project serves as the final year project for B.Sc. Computer Science at Federal University of Lafia. It is designed to demonstrate a secure and trusted payment system using CBN-approved QR codes.

## Project Overview

This project aims to provide a robust QR Code Payment System in line with the strategic goals of the Central Bank of Nigeria. It offers a user-friendly interface for managing user accounts, businesses, and generating CBN-approved QR codes. Additionally, a dedicated QR Code Scanner is provided for customers to make secure payments.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [Node.js and npm](https://nodejs.org/)
- [MySQL Database](https://www.mysql.com/)
- [PHP and Laravel](https://laravel.com/docs/8.x/installation)

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
       java -jar target/secured_qr_backend_0.0.1-SNAPSHOT.jar
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

5. **External Business Website (Laravel):**

   - Navigate to the external business website directory:

       ```bash
       cd sample-external-business
       ```

   - Install Laravel dependencies:

       ```bash
       composer install
       ```

   - Configure the Laravel application and set up the database:

       ```bash
       cp .env.example .env
       php artisan key:generate
       php artisan migrate
       ```

   - Start the Laravel application:

       ```bash
       php artisan serve
       ```

## Usage

1. **User Management:**

   - Access the CBN User Management application at [http://localhost:3000](http://localhost:3000) in your browser.

2. **QR Code Scanner:**

   - Access the CBN QR Code Scanner application at [http://localhost:3001](http://localhost:3001) in your browser.

3. **Business Website (Laravel):**

   - Access the external business website at [http://localhost:8000](http://localhost:8000) in your browser.
   - Integrate with CBN-approved QR code generation via API calls using the provided API key.

## Screenshots

![Merchant QR code Management](/screenshots/home.png)
*Caption: Screenshot of the CBN QR Code Platform.*

![Merchant QR code Management](/screenshots/home%202.png)
*Caption: Screenshot of the CBN QR Code Platform showing QR code generation interface*

![QR Code Scanner](/screenshots/scanner.png)
*Caption: Screenshot of the CBN QR Code Scanner Interface.*

![QR Code Scanner](/screenshots/scanner%202.png)
*Caption: Screenshot of the CBN QR Code Scanner Interface showing unapproved QR code.*

![QR Code Scanner](/screenshots/scanner%203.png)
*Caption: Screenshot of the CBN QR Code Scanner Interface showing an invalid QR Code.*

## Contributing

Feel free to contribute to the project!

### Features and Changes

1. **Business Website Integration:**
   - An independent and external business website written in Laravel for businesses to manage their QR codes securely.
   - Integration with CBN-approved QR code generation via API calls.

2. **Project Features:**
   - User Management
   - Business Management
   - QR Code Generation
   - QR Code Scanner
   - Security Measures

### Technologies Used

- **Backend:**
   - Spring Boot for Java-based backend development.
   - Maven for project management and build automation.

- **Frontend:**
   - React for user interface development.
   - Node.js and npm for package management.

- **Database:**
   - MySQL for data storage.

- **Business Website (Laravel):**
   - PHP and Laravel for the external business website.

### Future Improvements

- **Transaction History:** Implement a feature to view transaction history for users and businesses.
- **Mobile Application:** Develop a mobile application for both user management and QR code scanning.
- **Multi-Factor Authentication:** Enhance security by implementing multifactor authentication.

### Feedback and Contribution

Your feedback and contributions are highly welcomed. If you have ideas for improvement or want to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and submit a pull request.


### Acknowledgments

- Special thanks to the Central Bank of Nigeria for inspiring this project.
- Thanks to the open-source community for providing tools and frameworks that make projects like this possible.

Feel free to explore, use, and contribute to the project!
