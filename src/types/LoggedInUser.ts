export default interface LoggedInUser {
    name: string
    token: string
    id: number | null
    role: number
}