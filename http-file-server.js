const net = require('net');

const date = new Date();
function zeroFill(dateTime){
    return (dateTime < 10 ? '0':'') + dateTime
}

function now() {
    const date = new Date();    
    return zeroFill(date.getFullYear()) + "-" +
    zeroFill(date.getMonth()+1) + "-" +
    zeroFill(date.getDate()) + " " +
    zeroFill(date.getHours()) + ":" +
    zeroFill(date.getMinutes())
}

const server = http.createServer((request, response) => {
    // 'connection' listener
    console.log('client connected');
    
    socket.on('end',()=>{
        console.log('client disconnected');
    });
    socket.write(now());
    socket.write('\n');
    socket.end();
})

server.on('error', err =>{
    throw err;
})
server.listen(process.argv[2]); // Use process.arv[2] for port number