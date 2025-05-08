# Project Overview

This is the frontend for the Chronicler Distance Calculator application, which calculates the minimum possible distance between two lists of numbers. Built with React and styled using Tailwind CSS, this frontend provides an intuitive interface for uploading input files, processing data, and displaying calculation results.

## Getting Started
### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Clone the repository:
```
git clone https://github.com/anjanasilva99/chronicler-app-frontend.git
cd chronicler-app-frontend
```

### Install dependencies:
```
npm install
```

### Create a .env file in the root directory with:
```
REACT_APP_API_URL=http://localhost:5000
```

### Start the development server:
```
npm start
```

### File Format
The application expects input files where each line contains two space-separated numbers:

```
3 4
4 3
2 5
1 3
3 9
3 3
```

## Features

- File Upload: Upload text files containing two numbers per line
- Distance Calculation: Processes the input data and calculates optimal distances
- Interactive Results: View detailed results with sortable tables
- Responsive Design: Works seamlessly on both desktop and mobile devices
- Real-time Feedback: Visual indicators for loading states and errors

## Technologies Used

- React: UI library for building the interface
- Tailwind CSS: Utility-first CSS framework for styling
- Axios: HTTP client for API requests

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).