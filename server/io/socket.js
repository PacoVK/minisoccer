module.exports.createSocketListener = (io) => {

    io.on('connection', (socket) => {

        console.log('a user connected ');

        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });

        socket.on('saved', () => {
            io.sockets.emit('update');
        },);

        socket.on('end', () => {
            socket.disconnect(0);
        });
    });


    io.listen(process.env.SOCKET_PORT || '8000');

};
