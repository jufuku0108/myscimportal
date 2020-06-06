export interface Accesslog {
  accessLogId: number;
  dateTime: Date;
  type: string;
  httpMethod: string;
  statusCode: string;
  absoluteUrl: string;
  headers: string;
  body: string;
}
