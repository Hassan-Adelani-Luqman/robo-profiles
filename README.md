# 🤖 Robo Profiles

A modern React application that generates random robot character profiles by combining real user data with robot avatars. This project demonstrates API integration, modern React patterns, and responsive design.

## ✨ Features

- **Random Character Generation**: Fetch random user profiles from JSONPlaceholder API
- **Robot Avatars**: Beautiful robot avatars generated using RoboHash API
- **Professional Profiles**: Each character gets a randomly assigned job title and professional information
- **Responsive Design**: Clean, modern UI with gradient backgrounds and smooth animations
- **Error Handling**: Graceful error states and loading indicators
- **Contact Information**: Display email addresses and websites for each character

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hassan-Adelani-Luqman/robo-profiles.git
cd robo-profiles
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
robo-profiles/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css         # Main application styles
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🎯 How It Works

1. **Click "Fetch Random"** to load 4 random character profiles
2. **Data Sources**: 
   - User information from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
   - Robot avatars from [RoboHash API](https://robohash.org/)
3. **Character Enhancement**: Each profile is enhanced with:
   - Random professional job titles
   - Robot avatar based on user ID
   - Company catchphrases as descriptions
   - Contact information (email and website)

## 🧩 Technical Details

### APIs Used

- **JSONPlaceholder API**: Provides realistic user data including names, emails, websites, and company information
- **RoboHash API**: Generates unique robot avatars based on user IDs

### Key Features

- **React 19**: Latest React version with modern hooks
- **Vite**: Fast build tool and development server
- **Modern CSS**: Grid layouts, gradients, and smooth animations
- **Error Boundaries**: Proper error handling for API failures
- **Loading States**: User-friendly loading indicators

### Responsive Design

The application features a 2-column grid layout that displays character cards with:
- Robot avatars
- Professional information
- Contact details
- Smooth hover effects

## 🎨 Customization

### Adding New Job Titles

Edit the `jobTitles` array in `src/App.jsx`:

```javascript
const jobTitles = [
  'Your Custom Job Title',
  // ... existing titles
]
```

### Styling

Modify `src/App.css` to customize:
- Color schemes
- Layout dimensions
- Animation effects
- Typography


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



Made with ❤️ by [Hassan Adelani Luqman](https://github.com/Hassan-Adelani-Luqman)


