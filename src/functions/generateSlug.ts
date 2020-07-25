import { nanoid } from 'nanoid'
import urlSlug from 'url-slug'

export default (text: string): string => urlSlug(text + nanoid(3))
