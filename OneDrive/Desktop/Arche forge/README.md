# Arche Forge Trademark Intro

A dynamic React application featuring an immersive trademark introduction sequence with audio interaction, leading to a forge interface.

## Features

- **Interactive Intro Screen**: A captivating introduction screen with a series of trademarked phrases that display in rapid succession
- **Audio Integration**: Synchronized hammer sound effects that play with each phrase transition
- **Visual Design**: Bull-themed background imagery with bold typography
- **Seamless Navigation**: Automatic transition from intro to forge screen after completion
- **Responsive Layout**: Full-screen experience that adapts to different viewport sizes

## Technologies Used

- **React 18.2.0**: Frontend framework for building user interfaces
- **React Router DOM 6.8.1**: Client-side routing for navigation between components
- **Vite 5.2.0**: Fast build tool and development server
- **JavaScript ES6+**: Modern JavaScript features for component logic
- **CSS3**: Styling with inline styles for dynamic positioning and effects

## Installation Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd "Arche forge"
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## How to Run the Application Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

3. Click on the "FORGE" text to begin the introduction sequence

4. The application will automatically navigate to the forge screen after the intro completes

## Project Structure Overview

```
Arche forge/
├── public/
│   └── bull2.png              # Background image for intro screen
├── src/
│   ├── components/
│   │   ├── Forge.jsx          # Forge component displayed after intro
│   │   └── NightRaidIntro.jsx # Intro screen with trademark phrases
│   ├── App.css                # Application styles
│   ├── App.jsx                # Main application component with routing
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── hammer.mp3                 # Audio file for hammer sound effect
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
├── vite.config.js             # Vite configuration
└── README.md                  # This documentation file
```

## Additional Notes

### Application Flow
1. The application starts with a full-screen intro displaying "FORGE" text over a bull image
2. Clicking initiates a rapid sequence of trademarked phrases with synchronized hammer sounds
3. The sequence accelerates as it progresses, creating an immersive experience
4. After completion, users are automatically redirected to the forge screen

### Audio Implementation
- The hammer sound effect (`hammer.mp3`) is preloaded when the component mounts
- Each phrase transition is accompanied by a hammer sound for dramatic effect
- Audio timing is precisely synchronized with the visual transitions

### Customization
- The trademark phrases can be modified by editing the `LINES` array in `NightRaidIntro.jsx`
- Transition timing can be adjusted by modifying the delay calculations
- Visual styling can be customized through the inline style objects in each component

### Development Notes
- The application uses React hooks (useState, useEffect) for state management and lifecycle events
- Routing is handled by React Router DOM with two main routes: "/" for intro and "/forge" for the main interface
- The forge component is currently a placeholder that can be expanded with additional functionality