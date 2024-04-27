import { connect as mongooseConnect } from 'mongoose'
import { config } from 'dotenv'
config();
export const connect = () => mongooseConnect(process.env['MONGO_URI'])