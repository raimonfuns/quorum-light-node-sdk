import { IObject } from '../../utils/types/object';

export interface ITrx {
  TrxId: string;
  Type: string;
  GroupId: string;
  Data: string;
  TimeStamp: string;
  Version: string;
  Expired: string;
  ResendCount: string;
  Nonce: string;
  SenderPubkey: string;
  SenderSign: string;
  StorageType: string;
}

export interface ICreateTrxPayload {
  groupId: string;
  object: IObject;
  privateKey: string;
  aesKey: string;
}