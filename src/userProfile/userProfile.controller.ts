import { Controller, Post, Body } from '@nestjs/common';
import { IUserProfileBody } from './userProfile.model';
import { UserProfileValidator } from './userProfile.validator';

@Controller('users_profiles')
export class UserProfileController {
    constructor(private readonly userProfileValidator: UserProfileValidator) {}

    @Post()
    createUserProfile(@Body() userProfileBody: IUserProfileBody) :string {
        this.userProfileValidator.validateCreateInput(userProfileBody);

        return `Hi! Its email: ${userProfileBody.email}, active:${userProfileBody.active}`;
    }
}
