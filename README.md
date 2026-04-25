# TogetherToGo Backend
This is the backend for the TogetherToGo application, built with NestJS and Prisma. It provides RESTful APIs for user management, event management, and other core functionalities of the application.

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Sgattix/togethertogo-backend.git
   
   cd togethertogo-backend
    ```
2. **Install Dependencies**:
   ```bash
    npm install
    ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add the following variables:
   ```
    DATABASE_URL=your_database_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
4. **Run Database Migrations**:
   ```bash
    npx prisma migrate dev --name init
    ```
5. **Start the Server**:
   ```bash
    npm run start:dev
    ```

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the existing code style and include tests for any new functionality.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

## Contact
For any questions or issues, please open an issue on the GitHub repository or contact the maintainer at [alessandro.sgattoni20@gmail.com](mailto:alessandro.sgattoni20@gmail.com).

## Credits
- Developed by Alessandro Sgattoni
- Inspired by the need for a platform to connect volunteers with local events and initiatives. 