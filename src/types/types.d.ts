import { getSdk } from '../../generated/sdk'
export interface Context {
    userEmail: string
    userId: string
    client: ReturnType<typeof getSdk>
}

