import Redis from "ioredis"
import generatePin from '../utils/pinGenerator.js'

const redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')
const TTL = 300 // 5 minutos

async function generateAndStorePin(email) {
  const pin = generatePin()
  await redisClient.set(`pin:${email}`, pin, 'EX', TTL)
  return pin;
}

async function validatePin(email, submittedPin) {
  const saved = await redisClient.get(`pin:${email}`)
  return saved && saved === submittedPin
}

export { generateAndStorePin, validatePin }
