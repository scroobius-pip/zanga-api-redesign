import { getSdk } from '../../generated/sdk'
export interface Context {
    userId: string
    client: ReturnType<typeof getSdk>
}