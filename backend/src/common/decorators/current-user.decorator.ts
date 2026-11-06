import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator((_d, ctx: ExecutionContext) => {
  return ctx.switchToHttp().getRequest().user; // { userId, role }
});