# Space Weather Web Application

Welcome to the repository for the Space Weather web application! This repository contains the source code for a web application built with React.js and Express. The application retrieves and displays current space weather information using the API for [Space Weather Database Of Notifications, Knowledge, Information (DONKI)](https://kauai.ccmc.gsfc.nasa.gov/DONKI/).

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The Space Weather Web Application provides users with real-time space weather data obtained from the DONKI NASA API. Users can view various space weather parameters, such as solar flares, coronal mass ejections, geomagnetic storms, and more. The application is built using React.js for the frontend and Express for the backend API.

## Features

The web application includes the following features:

- Displaying current space weather information obtained from the DONKI NASA API.
- Visual representation of space weather parameters through charts and graphs.
- User-friendly interface for easy navigation and interaction.
- Real-time updates of space weather data.

## Prerequisites

Before getting started, ensure you have the following software installed on your machine:

- Node.js: [Installation Guide](https://nodejs.org)

## Installation

To install and run the Space Weather Web Application, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/Luci-4/space-weather
   ```

2. Change into the project directory:

   ```
   cd space-weather
   ```

3. Install the required dependencies for both the frontend and backend:

   ```
   npm install
   ```

## Configuration

To configure the application to use the DONKI NASA API, follow these steps:

1. Obtain an API key from the [api.nasa.gov](https://api.nasa.gov/) website.
2. Create a `.env` file in the root directory of the project.
3. Add the following line to the `.env` file, replacing `<YOUR_API_KEY>` with your actual API key:

   ```
   API_KEY=<YOUR_API_KEY>
   ```

## Usage

To start the Space Weather Web Application, follow these steps:

1. Start the backend server:

   ```
   node ./bin/www
   ```

2. Start the frontend development server:

   ```
   npm start
   ```

3. Open your web browser and navigate to [http://localhost:5000](http://localhost:5000) to access the application.

## Contributing

Contributions to this repository are welcome! If you have any improvements, bug fixes, or new features to add, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your changes.
3. Make your modifications and commit them.
4. Push your branch to your forked repository.
5. Open a pull request in the main repository and provide a detailed explanation of your changes.

I will review your contribution, provide feedback, and merge it if appropriate.

## License
This project is licensed under the MIT License.

Thank you for visiting the repository. Enjoy exploring and using the Space Weather Web Application. If you have any questions or issues, please don't hesitate to reach out.
