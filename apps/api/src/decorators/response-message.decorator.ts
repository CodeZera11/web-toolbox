import { SetMetadata } from '@nestjs/common';

export const RESPONSE_MESSAGE_KEY = 'response_message';

export const ResponseMessage = (message: string) => {
  return SetMetadata(RESPONSE_MESSAGE_KEY, message);
};