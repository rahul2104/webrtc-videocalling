## WebRTC video calling with Reactjs

Demo : https://webrtc-calling.soul4codes.com/

In the project directory, you can run:

### `npm run start_client`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `run run start_server`

Launches the socker server in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Setup .env`

```
SERVER_PORT=8080
REACT_APP_SERVER_URL=http://localhost:8080
REACT_APP_PEER_SERVER=stun:stun.l.google.com:19302
DEBUG=true
```
