Geo-Delivery Application

This project is a location/address flow application that enables users to select and save their delivery location using Google Maps functionalities. The application includes features like location permission handling, address selection via map interaction, and form-based input for saving detailed addresses.

---

Features

1. Location Modal
- Prompts the user to allow location access.
- Options:
  - Enable Location: Uses the browser’s geolocation to fetch the user’s location.
  - Search Manually: Allows manual address input using a map interface.

2. Interactive Map
- Displays the selected address on a map.
- Users can adjust the marker to fine-tune their location.
- "Locate Me" button centers the map and marker to the user’s current location.

3. Address Form
- Allows users to input specific details:
  - House/Flat/Block No.
  - Apartment/Road/Area.
- Categorize addresses under: Home, Office, or Others.

 4. Saved Addresses Management
- List of saved addresses.
- Options to:
  - Select an address for delivery.
  - Delete or update addresses.

---

Technologies Used

Frontend
- React: For building the user interface.
- React-Leaflet: For map rendering and interaction.
- Leaflet: For map functionalities and marker handling.

Backend
- Node.js: For handling backend APIs (optional in this version).

APIs
- Leaflet/OpenStreetMap: For map and geolocation functionalities.
- Browser Geolocation API: For fetching the user’s current location.

---

 Installation

Prerequisites
- Node.js installed.
- A modern web browser.

 Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/geo-delivery.git
   ```

2. Navigate to the project directory:
   ```bash
   cd geo-delivery
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---


Usage

1. Launch the application.
2. Grant or deny location access using the modal prompt.
3. Use the map to select your delivery location:
   - Drag the marker to fine-tune.
   - Use "Locate Me" to center the map on your current location.
4. Fill in address details in the form and save the address.
5. View and manage saved addresses in the "Saved Addresses" section.

---

Known Issues
- The map may load slowly due to high-resolution tile fetching. Optimize by reducing zoom levels or caching.
- Ensure that browser geolocation permissions are enabled for proper functionality.

---

Future Enhancements
- Add backend integration using Node.js for saving addresses in a database.
- Implement reverse geocoding to fetch detailed address from latitude and longitude.
- Enhance UI with additional styling and animations.
- Add user authentication for personalized address management.

---

 License
This project is licensed under the MIT License. See the LICENSE file for details.

---

 Contact
For questions or suggestions, please reach out to:
- Name: Gokul Parameshwar S
- Email: gokulparameshwar4@gmail.com
- GitHub: [gokul4123](https://github.com/gokul4123)

