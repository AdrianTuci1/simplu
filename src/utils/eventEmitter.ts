import EventEmitter from "eventemitter3";

// Create a singleton event emitter instance
const eventEmitter = new EventEmitter();

// Export the event emitter for use across components
export default eventEmitter;