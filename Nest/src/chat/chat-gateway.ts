import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";

@WebSocketGateway(3200, { cors: { origin: '*' } }) // Define the port number for the WebSocket server
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer() server: Server

    @SubscribeMessage('newMessage')
    handleNewMessage(client: Socket, message: any) {
        console.log('newMessage', message);
        this.server.emit('message', message); // Broadcast the message to all connected clients
    }
    // emit and broadcast are two methods that can be used to send messages to clients.
    // The emit method sends a message to a specific client, while the broadcast method sends a message to all clients connected to the server.

    handleConnection(client: Socket) {
        console.log('New user connected...', client.id);

        this.server.emit('user-joined', `A new user has joined the chat ${client.id}`);
    }
    handleDisconnect(client: Socket) {
        console.log('User disconnected...', client.id);

        this.server.emit('user-left', `A user has left the chat ${client.id}`);
    }
}