# Doodle Chat - Code Challenge 

## Chat Setup

### API Token 
A token.js file with an API token should be added to this project for it to work in `src`. The token used for this project is ignored by GitHub. 

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## User flow
Upon entering the chat, the user can enter their name. If the user leaves this blank, an alert will appear on the page if the user tries to start the chat. Once the user enters their name and starts the chat, the user can see all messages. The user can automatically see the newer messages first at the bottom of the chat when the chat starts. The user can send messages by typing in the input field and clicking the send button. The user can see their message automatically send and can receive messages. 

Information available to user: 
- Author 
- Message content 
- Date and time message was sent 

## Methodology 
* I separated my tasks in two:
    - UI task which outlined all of elements on the page. 
    - API client which handles all of the requests and posts to the API. 

I believe separating these two tasks are important. The API client methods can be used throughout a bigger project so separating this makes the project clearer and allows for reusability. 

Once I had an outline of the design of the project, I chose to use react. I believe that creating components for the UI would be faster and would allow for reuse in a bigger project. 

## How it works 
All messages are called when the user starts the chat after inputting their name. After all messages are called, if there are any known messages, the last message in the array is stored. `getLastTenMessages` is called and gets any messages since the last known message. This function is called every second to continuously check if there are any new messages. If so, new messages are added to known messages, state is updated and they are all rendered on the screen. 
 
Since we are checking for new messages (sent or received) every second, there might be a delay of one second to render a sent message. In order to remove that delay, every sent message sets state until the `getLastTenMessages` function is called. This updates the component so that the user gets automatic feedback when sending a message. 
 
## Improvements 
* Convert the HTML escape characters when sending a message. 
* Create unit tests for the API.
* Create unit tests for individual components.
* Catch other errors since it seems that fetch only handles network errors.
* Improve the project's handling of messages being sent too quickly.

**Time taken to complete**: ~10hrs