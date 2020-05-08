console.log("process.env",process.env);
module.exports = {
    SERVER_PORT: process.env.SERVER_PORT || 8080,
    SERVER_URL:  process.env.REACT_APP_SERVER_URL || "http://localhost:8080",
    PEER_SERVER:  process.env.REACT_APP_PEER_SERVER || "stun:stun.l.google.com:19302"
};
