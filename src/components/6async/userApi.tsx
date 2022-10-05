export interface UserDto {
    username: string
}

export const apiCal = (): Promise<UserDto> =>
    new Promise((resolve) => {
        setTimeout(() => resolve({
            username: 'Mati'
        }), 100)
    })
