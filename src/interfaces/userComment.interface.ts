export interface IUserCommentBody {
    userId: number,
    profileId: number,
    comment: string
}

export interface ICreatedUserCommentResponse {
    id: number
}

export interface IUSerCommentUpsertData {
    userId: number,
    profileId: number,
    comment: string
}