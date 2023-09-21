# Disperse React Component

* Submit : On submit will validate with the inputs & throws an error if any, examples shown below - 
<img width="805" alt="image" src="https://github.com/DeepaG10/disperse/assets/145286265/09d100e1-3350-42a8-85c8-a1ff915098c6">

* Success :
<img width="805" alt="image" src="https://github.com/DeepaG10/disperse/assets/145286265/c067c8b9-eb79-4f37-b933-f71af3f3ffd0">

* Duplictaed :
<img width="800" alt="image" src="https://github.com/DeepaG10/disperse/assets/145286265/f9c9e034-08ac-416a-97fe-77a0d0dd47bb">

* Keep First Occurrence : This method will keep the first occurrence & remove others duplicates. Example -
<img width="801" alt="image" src="https://github.com/DeepaG10/disperse/assets/145286265/9ca7b06c-318a-48a1-b746-c469c94bea48">

* Combine Balances : This method will combines all duplicated addresses amount. Example -
<img width="800" alt="image" src="https://github.com/DeepaG10/disperse/assets/145286265/0e11f817-e026-4c48-bb5d-b566453eaa1c">

The Disperse React component is a versatile tool that allows users to manage and process lists of addresses and corresponding amounts. This component provides a simple user interface for input validation, deduplication of addresses, and balance aggregation.

# Features
* Input Validation: Validates user input to ensure that addresses and amounts are correctly formatted.
* Keep First Occurrence: Removes duplicate addresses, retaining only the first occurrence.
* Combine Balances: Aggregates the balances of addresses that appear multiple times.
  
# Usage
* Clone or download the repository to your local machine.
* Navigate to the project directory.
* Install the required dependencies using npm or yarn:

bash
```
npm install
# or
yarn install
```
* Start the development server:

bash
```
npm start
# or
yarn start
```
* Access the application in your web browser at http://localhost:3000.
* In the textarea provided, enter addresses and corresponding amounts. Each address and amount should be separated by a space, and each pair should be on a separate line. For example:

```
0x8B3392483BA26D65E331dB86D4F430E9B3814E5e 15
0x2C1BbAa9B34b5D8A6E850a6A734FBa705F34a3aC 25
```
* Click the "Submit" button to validate and process the input.
* If there are any validation errors, they will be displayed below the textarea.
* Use the "Keep First Occurrence" button to remove duplicate addresses, keeping only the first occurrence.
* Use the "Combine Balances" button to sum the balances of addresses that occur multiple times.
* The addresses and their corresponding amounts will be displayed in a list below the buttons.

# Installation
If you wish to integrate the Disperse component into your existing React project, follow these steps:

* Install the package via npm or yarn:

bash
```
npm install @your-organization/disperse-component
# or
yarn add @your-organization/disperse-component
```
* Import the component in your React application:

javascript
```
import Disperse from "@your-organization/disperse-component";
```
* Utilize the Disperse component within your application.

# Getting Started with Development
To get started with development on this component, follow these steps:

* Clone the repository to your local machine:

bash
```
git clone https://github.com/your-username/disperse-component.git
```
* Navigate to the project directory:
 
bash
```
cd disperse-component
```
* Install the required dependencies:

bash
```
npm install
# or
yarn install
```
* Start the development server:

bash
```
npm start
# or
yarn start
```
* You can now make modifications to the `Disperse` component and test them in a local development environment.

# Address Validation
The component employs a basic regular expression for address validation. You can replace it with more robust validation logic as required. Here's the validation function used in the component:

javascript
```
const isValidAddress = (address) => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};
```
# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Author
Author: Deepa Gupta

Email: deepa403246@gmail.com






