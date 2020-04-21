import { Controller, Post, Body } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/userProfile.interface';
import { UserProfileValidator } from './userProfile.validator';
import { UserProfileService } from './userProfile.service';

@Controller('users_profiles')
export class UserProfileController {
    constructor(
        private readonly userProfileValidator: UserProfileValidator,
        private readonly userProfileService: UserProfileService
    ) {}

    @Post()
    async createUserProfile(@Body() userProfileBody: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        this.userProfileValidator.validateCreateInput(userProfileBody);

        return await this.userProfileService.createUserProfile(userProfileBody);
    }
}
