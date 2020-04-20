import { Injectable, BadRequestException } from '@nestjs/common';
import * as Joi from '@hapi/joi';
import { IUserCommentBody } from './userComment.interface';

@Injectable()
export class UserCommentValidator {
    validateCreateInput(createUserCommentBody: IUserCommentBody): void {
        const schema = Joi.object({
            userId: Joi.number().integer().required()
                .error(new BadRequestException('Missed or invalid user id. User id must be of type number and integer')),
            profileId: Joi.number().integer().required()
                .error(new BadRequestException('Missed or invalid profile id. Profile id must be of type number and integer')),
            comment: Joi.string().required()
                .error(new BadRequestException('Missed or invalid comment. Comment must be of type string'))
        });

        const {error} = schema.validate(createUserCommentBody, {allowUnknown: true});
        if (error) throw error;
    }
}