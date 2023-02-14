#!/usr/bin/env node
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { validate } from './validate'

yargs(hideBin(process.argv))
  .command(validate)
  .command(
    '$0',
    'the default command',
    () => {},
    (argv) => {
      console.log('No command matching')
    }
  )
  .help()
  .alias('h', 'help').argv
