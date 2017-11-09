import { User } from './user.model'

export class ChatMessage {
  constructor(
    public text: string,
    public timestamp: number,
    public author: string,
    public authorID: string
  ) {}
}
