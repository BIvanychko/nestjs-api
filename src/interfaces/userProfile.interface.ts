export interface IUserProfileBody {
    email: string,
    active: boolean,
    ban: boolean,
    nickName: string,
    firstName: string,
    lastName: string
}

export interface ICreatedUserProfileResponse {
    userId: number,
    profileId: number
}