import { Controller, Post, Body } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/user.interface';
import { UserValidator } from './user.validator';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(
        private readonly userProfileValidator: UserValidator,
        private readonly userProfileService: UserService
    ) {}

    @Post()
    async createUserProfile(@Body() userProfileBody: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        this.userProfileValidator.validateCreateInput(userProfileBody);

        const response = await this.userProfileService.createUserProfile(userProfileBody);
        console.log(`Response: ${JSON.stringify(response)}`);

        return response;
    }
}
