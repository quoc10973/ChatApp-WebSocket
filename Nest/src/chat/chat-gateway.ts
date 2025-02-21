import { SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";

@WebSocketGateway(3200, {}) // Define the port number for the WebSocket server
export class ChatGateway {

    @WebSocketServer() server: Server

    @SubscribeMessage('newMessage')
    handleNewMessage(client: Socket, message: any) {
        console.log('newMessage', message);

        client.emit('replyMessage', 'This is a reply message');

        this.server.emit('replyMessage', 'This is a broadcast message to all connected clients');
    }
    // emit and broadcast are two methods that can be used to send messages to clients.
    // The emit method sends a message to a specific client, while the broadcast method sends a message to all clients connected to the server.
}