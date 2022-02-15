interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

//test-interface
export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}