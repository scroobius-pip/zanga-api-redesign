import { getSdk } from '../../generated/sdk'
export interface Context {
    userEmail: string
    client: ReturnType<typeof getSdk>
}

