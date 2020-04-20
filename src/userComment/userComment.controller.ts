import {Controller, Post, Body, BadRequestException} from '@nestjs/common';
import { IUserCommentBody } from './userComment.model';
import { UserCommentValidator } from './userComment.validator'

@Controller('users_comments')
export class UserCommentController {
    constructor(private readonly userCommmentValidator: UserCommentValidator) {}

    @Post()
    createUserComment(@Body() userCommentBody: IUserCommentBody) : string {
        this.userCommmentValidator.validateCreateInput(userCommentBody);

        return `Hi! Its ok)`;
    }
}
