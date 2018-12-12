module.exports.createSocketListener = (io) => {

    io.on('connection', (socket) => {
        console.log('a user connected');
        socket.on('disconnect', function () {
            console.log('User Disconnected');
        });

        socket.on('test', (msg, callback) => {
            console.log('message: ' + msg);
            callback('pong');
        },);

        socket.on('end', () => {
            socket.disconnect(0);
        });
    });


    io.listen(process.env.SOCKET_PORT || '8000');

};
