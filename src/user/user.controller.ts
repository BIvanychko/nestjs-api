import { Controller, Post, Body } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/userProfile.interface';
import { UserValidator } from './user.validator';
import { UserService } from './user.service';

@Controller('users_profiles')
export class UserController {
    constructor(
        private readonly userProfileValidator: UserValidator,
        private readonly userProfileService: UserService
    ) {}

    @Post()
    async createUserProfile(@Body() userProfileBody: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        this.userProfileValidator.validateCreateInput(userProfileBody);

        return await this.userProfileService.createUserProfile(userProfileBody);
    }
}
