import { User } from './user.model';
import { ChatMessage } from './chat-message.model';

export class ChatRoom {
  constructor(
    public name: string,
    public lastMessage: string,
    public timestamp: number,
    public flag: number = 0
  ) {}
}
