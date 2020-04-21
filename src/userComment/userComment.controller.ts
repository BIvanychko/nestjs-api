import {Controller, Post, Body } from '@nestjs/common';
import { IUserCommentBody, ICreatedUserCommentResponse } from '../interfaces/userComment.interface';
import { UserCommentValidator } from './userComment.validator'
import { UserCommentService } from './userComment.service';

@Controller('users_comments')
export class UserCommentController {
    constructor(
        private readonly userCommmentValidator: UserCommentValidator,
        private readonly userCommentService: UserCommentService
        ) {}

    @Post()
     async createUserComment(@Body() userCommentBody: IUserCommentBody) : Promise<ICreatedUserCommentResponse> {
        this.userCommmentValidator.validateCreateInput(userCommentBody);

        const response = await this.userCommentService.createUserCommment(userCommentBody);
        console.log(`Response: ${JSON.stringify(response)}`)

        return response;
    }
}
