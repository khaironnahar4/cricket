# Cricket Team Builder

## Project Overview
**Cricket Team Builder** is a React-based application that allows users to build their custom cricket team by selecting players from an API-sourced list. The app incorporates coin management, player selection limitations, and dual viewing modes to enhance the experience of creating a balanced cricket team. Each interaction is designed to ensure intuitive team management, allowing users to track both available coins and player limits.

## Technologies Used
- **React.js**: Framework for building the UI and managing application state.
- **React-Toastify**: For user-friendly and visually engaging notifications.
- **Tailwind CSS**: To style the components following Figma’s design.
- **REST API**: To fetch player data dynamically.

## Key Features
1. **API Integration and Player Cards**  
   The app fetches cricket players' details from an external API, displaying them in cards that showcase information like player name, country, role, and price. Each player card has a button to select the player, function to the coin balance.

2. **Coin Management and Player Selection**  
   Users can earn coins by clicking a designated button, which increases their balance, displayed in the Navbar. When selecting players, the app checks if the user has enough coins, reducing the coin balance accordingly for each addition. Users can select up to 6 players, with validation to prevent duplicate selections or exceed the limit.

3. **Toggle Between Available and Selected Players**  
   The application offers two main buttons: one to display all available players and another to view only the selected players. This toggle functionality lets users switch seamlessly between views, offering a smooth selection and management experience.

## Detailed Functionality

### Navbar
- Displays the user’s coin balance, initially set to 0.
- Users can add coins to their balance by clicking a button, enabling them to accumulate enough to select players.

### Player Selection and Validation
- **Add Player**: Each player card has an “Choose Player” button. When clicked, the app:
  - Checks if the user has sufficient coins for the player’s price.
  - Adds the player to the selected list if all conditions are met.
  - Reduces the user’s coin balance based on the player’s price.
  - Alerts the user if they attempt to select more than 6 players or the same player twice.

### Dual View: Available & Selected Players
- Users can toggle between “Available Players” and “Selected Players” view.
- “Available Players” shows all fetched players, while “Selected Players” shows only those added to the team.

### Remove Selected Player
- The “Selected Players” view displays each chosen player in a single-column layout, including a delete button.
- Clicking the delete button removes the player from the selected list and restores the spent coins to the user’s balance.

**Cricket Team Builder** is crafted to provide a fun and dynamic experience for creating a custom cricket team with full control over player selection, coin management, and an intuitive interface for building the ideal lineup.
