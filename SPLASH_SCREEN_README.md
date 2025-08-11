# Splash Screen Implementation

This project now includes a beautiful splash screen that displays a Lottie animation before showing the main application content.

## Features

- **Lottie Animation**: Displays the `navdhan-animation.json` file as a centered animation
- **Progress Bar**: Shows loading progress with a smooth animated progress bar
- **Fade-out Effect**: Smooth transition from splash screen to main content
- **Responsive Design**: Works on all screen sizes
- **Customizable Duration**: Configurable display time (default: 4000ms)

## Components

### SplashScreen Component

Located at `src/components/SplashScreen.tsx`

**Props:**
- `children`: React components to render after splash screen
- `duration`: Time in milliseconds to show splash screen (optional, default: 4000ms)

**Usage:**
```tsx
import { SplashScreen } from '../components';

export default function App() {
  return (
    <SplashScreen duration={5000}>
      <YourMainContent />
    </SplashScreen>
  );
}
```

## Implementation Details

### Animation
- Uses `lottie-react` library to display the Lottie animation
- Animation loops continuously during splash screen display
- Centered and sized appropriately for the screen

### Styling
- Gradient background from blue to indigo
- Modern typography with proper spacing
- Responsive design that works on mobile and desktop
- Smooth CSS transitions and animations

### Progress Tracking
- Real-time progress bar that fills up during splash screen display
- Percentage indicator showing completion status
- Animated loading dots for visual feedback

### State Management
- Uses React hooks for state management
- Smooth fade-out transition before hiding
- Proper cleanup of timers and intervals

## Dependencies

- `lottie-react`: For displaying Lottie animations
- `react`: For React hooks and component functionality
- `tailwindcss`: For styling and animations

## Installation

The required dependencies are already installed:

```bash
npm install lottie-react
```

## Customization

### Changing Duration
Modify the `duration` prop when using the SplashScreen component:

```tsx
<SplashScreen duration={6000}>
  <YourContent />
</SplashScreen>
```

### Modifying Animation
Replace the `navdhan-animation.json` file with your own Lottie animation file.

### Styling Changes
Modify the CSS classes in the SplashScreen component to change colors, sizes, and layout.

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Lottie animations work in all modern browsers

## Performance Considerations

- Animation is optimized for smooth playback
- Timers are properly cleaned up to prevent memory leaks
- Smooth transitions use CSS transforms for better performance

## Troubleshooting

### Animation Not Playing
- Ensure the Lottie JSON file is valid
- Check that `lottie-react` is properly installed
- Verify the file path in the import statement

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that all CSS classes are available
- Verify responsive design breakpoints

### Performance Issues
- Reduce animation complexity if needed
- Adjust duration for slower devices
- Consider reducing animation frame rate on mobile
