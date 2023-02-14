import { CommandModule } from 'yargs'

export const validate: CommandModule = {
  command: 'validate',
  handler: () => {
    console.log('validate handler')
  },
}
