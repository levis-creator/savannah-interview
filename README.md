
# SIL Frontend Engineer Assessment

## Overview
This project is a frontend web application developed as part of the SIL Frontend Engineer Assessment. It integrates with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to display and manage user information, albums, and photos. The application supports user authentication and offers a responsive design for seamless use across devices.

---

## Features
1. **Landing Page**
   - Brief overview of the application’s functionality.

2. **Authentication**
   - Login using third-party providers (Google, Facebook, or GitHub).
   - Maintains user sessions after authentication.

3. **Home Page**
   - Lists all users with their details.
   - Displays the number of albums for each user.

4. **User Details Page**
   - Displays selected user's information.
   - Lists all albums belonging to the user.

5. **Album Details Page**
   - Shows details of a selected album.
   - Lists photos within the album.

6. **Photo Details Page**
   - Displays a specific photo.
   - Allows editing the photo title.
   - Updates are sent via a PATCH/PUT request to the backend.

7. **Responsive Design**
   - Optimized for mobile, tablet, and desktop devices.

---

## API Integration
The project leverages the JSONPlaceholder API for all data operations:

- **Users**: `https://jsonplaceholder.typicode.com/users`
- **Albums**: `https://jsonplaceholder.typicode.com/albums`
- **Photos**: `https://jsonplaceholder.typicode.com/photos`

### API Request Types
- **GET**: Fetch data for users, albums, and photos.
- **PUT/PATCH**: Simulate updates (e.g., editing photo titles).

---

## Technical Requirements
- **Technologies**: HTML, CSS, JavaScript, React.js, or other modern frameworks.
- **Setup Commands**:
  - Install dependencies: `npm install`
  - Run the application: `npm start`
- **Deployment**: Configured for platforms like Heroku or Vercel.

### Additional Features
- Persistent state across reloads.
- Informative commit messages.
- Automated CI/CD pipelines for testing and deployment.

---

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- Git for version control.

### Setup Instructions
1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the application:  
   ```bash
   npm start
   ```

---

## Testing
- Run unit tests:  
  ```bash
  npm run test
  ```

---

## Deployment
- The application is deployed on a free-tier platform (e.g., Heroku or Vercel).  
- View the live application at: [Live Demo URL](#) *(replace with actual URL)*.

---

## Contributing
1. Fork the repository.
2. Create a feature branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit changes with descriptive messages:  
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## Future Enhancements
- Implement real-time data synchronization.
- Integrate advanced authentication with role-based access.
- Enhance error logging and debugging tools.

---

## License
This project is for assessment purposes only and is not intended for production use.
