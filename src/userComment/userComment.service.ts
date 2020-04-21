import { Injectable } from '@nestjs/common';
import { IUserCommentBody, ICreatedUserCommentResponse } from '../interfaces/userComment.interface';

@Injectable()
export class UserCommentService {

    async createUserCommment(userComment: IUserCommentBody): Promise<ICreatedUserCommentResponse> {
        return {id: 1};
    }
}
