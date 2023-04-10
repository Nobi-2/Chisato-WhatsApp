import { prop, getModelForClass } from '@typegoose/typegoose'
import { Document } from 'mongoose'

export class SessionsSchema {
    @prop({ type: String, required: true, unique: true })
    public sessionId!: Nobishizu

    @prop({ type: Nobishizu })
    public session?: Nobishizu
}

export type TSessionModel = SessionsSchema & Document

export const sessionSchema = getModelForClass(SessionsSchema)
