# FastFinger

FastFinger is a dynamic typing test application designed to help users improve their typing speed and accuracy. Built with JavaScript, this application provides random text challenges and measures Words Per Minute (WPM) and typing accuracy.

## Features

- **Random Text Generation**: Choose from a variety of predefined paragraphs for the typing test.
- **Typing Feedback**: Real-time feedback on typing accuracy with sound effects for correct and incorrect key presses.
- **Performance Metrics**: Calculates and displays Words Per Minute (WPM) and accuracy percentage.
- **Timer**: A countdown timer to add a competitive element to the test.
- **User-friendly Interface**: Simple and intuitive design for ease of use.


## Getting Started

### Prerequisites

To run this project locally, you need to have a web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sanmit0804/FastFinger.git

2. Navigate to the project directory:
   ```bash
   cd FastFinger

3. Open 'index.html' in your web browser.

## Usage
1. Open the index.html file in a web browser.
2. Click the "Start Test" button to begin the typing test.
3. Type the displayed text as accurately and quickly as possible.
4. The application will provide real-time feedback on your typing.
5. The test ends when the timer reaches zero or when the text is typed correctly.
6. View your WPM and accuracy results.
7. Click "Restart" to try again.


## Code Overview

### Main Files

- **index.html**: The main HTML file that contains the structure of the application.
- **style.css**: The CSS file that styles the application.
- **script.js**: The JavaScript file that contains the logic for the typing test.

### Functions

- **getRandomPara(index)**: Selects a random paragraph from the predefined array.
- **updateTimer()**: Updates the countdown timer.
- **timeReduce()**: Initializes and starts the timer.
- **displayResult()**: Displays the results of the typing test.
- **startTest()**: Starts the typing test.

### Event listeners

Event listeners to handle user input and restart the test.

### Sound Effects

- **Correct Key Press**: Plays a sound when the user types a correct character.
- **Incorrect Key Press**: Plays a sound when the user types an incorrect character.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Thanks to the creators of the Quotable API for the random quotes feature.

## Contact

For any questions or suggestions, please contact sanmitsuthar3@gmail.com

