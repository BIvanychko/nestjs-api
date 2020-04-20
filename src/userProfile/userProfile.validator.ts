import { Injectable, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { IUserProfileBody } from './userProfile.interface';

@Injectable()
export class UserProfileValidator {
    validateCreateInput(createUserProfileBody: IUserProfileBody): void {
        const schema = Joi.object({
            email: Joi.string().required()
                .error(new BadRequestException('Missed or invalid email. Email must be of type string')),
            active: Joi.boolean().required()
                .error(new BadRequestException('Missed or invalid active flag. Active must be of type boolean')),
            ban: Joi.boolean().required()
                .error(new BadRequestException('Missed or invalid ban flag. Ban must be of type boolean')),
            nickName: Joi.string().required()
                .error(new BadRequestException('Missed or invalid nick name. Nick name must be of type string')),
            firstName: Joi.string().required()
                .error(new BadRequestException('Missed or invalid first name. First name must be of type string')),
            lastName: Joi.string().required()
                .error(new BadRequestException('Missed or invalid last name. Last name must be of type string'))
        });

        const {error} = schema.validate(createUserProfileBody, {allowUnknown: true});
        if (error) throw error;
    }
}