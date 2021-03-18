import { getRepository } from 'typeorm'
import path from 'path'
import fs from 'fs'

import uploadConfig from '../config/upload'
import User from '../models/Users'

type Request = {
  userId: string
  avatarFilename: string
}

class UpdateUserAvatarService {
  public async execute({ userId, avatarFilename }: Request) {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({
      where: {
        id: userId
      }
    })

    if (!user) {
      throw new Error('Only authenticated user can change avatar.')
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)

      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
    }

    user.avatar = avatarFilename

    await usersRepository.save(user)

    return user
  }
}

export default UpdateUserAvatarService