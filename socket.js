/**
 * Module dependencies.
 */


/**
 * Module exports.
 */

module.exports = exports = Socket;

/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
    connect: 1,
    connect_error: 1,
    connect_timeout: 1,
    connecting: 1,
    disconnect: 1,
    error: 1,
    reconnect: 1,
    reconnect_attempt: 1,
    reconnect_failed: 1,
    reconnect_error: 1,
    reconnecting: 1,
    ping: 1,
    pong: 1
};

/**
 * Shortcut to `Emitter#emit`.
 */


/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket (io, nsp, opts) {
    this.io = io;
    this.nsp = nsp;
    this.json = this; // compat
    this.ids = 0;

    return this;

}




/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */

Socket.prototype.send = function () {
    this.emit(1);
    return this;
};

/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */

Socket.prototype.emit = function (ev) {

    return this;
};
