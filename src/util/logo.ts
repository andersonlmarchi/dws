import chalk from 'chalk'
import figlet from 'figlet'

export function printBanner() {
  const logo = figlet.textSync('  DWS', {
    font: 'DOS Rebel',
  })

  console.log(chalk.white(logo))
  console.log(chalk.gray('---------------------------------------------------------'))
  console.log(chalk.white('                 Docker Workspace Switcher'))
  console.log(chalk.gray('---------------------------------------------------------'))
  console.log()
  console.log(chalk.yellow('          One workspace. One command. Full focus.'))
  console.log()
  console.log(chalk.gray('                         v0.1.0'))
  console.log()
}