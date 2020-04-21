import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserCommentBody, ICreatedUserCommentResponse } from '../interfaces/userComment.interface';
import { UserComment } from '../database/models/userComment.model';
import { UserService } from '../user/user.service';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class UserCommentService {
    constructor(
        private readonly userCommentModel: UserComment,
        private readonly userService: UserService,
        private readonly profileService: ProfileService
    ) {}

    async createUserCommment(userComment: IUserCommentBody): Promise<ICreatedUserCommentResponse> {
        const user = await this.userService.getUserById(userComment.userId);
        if(!user) {
            throw new NotFoundException('User does not exist');
        }

        const profile = await this.profileService.getProfileById(userComment.profileId);
        if(!profile) {
            throw new NotFoundException('Profile does not exist');
        }

        const createdUserComment = await this.userCommentModel.createUserComment(userComment);
        return {id: createdUserComment.$id()};
    }
}
