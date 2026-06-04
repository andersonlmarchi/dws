#!/usr/bin/env node
import { Command } from "commander"
import { printBanner } from "./util/logo"

const program = new Command()

program.name('dws')
    .description("Docker Workspace Switcher")
    .version("0.1.0")

program.option('-a, --about', 'Show about information')
program.option('-cmd, --commands', 'List available commands')
program.option('-h, --help', 'Display help information')
program.option('-v, --version', 'Display version information')

program.action((options) => {
    switch (options) {
        case options.about:
            printBanner()
            break
        case options.commands:
            console.log('Available commands:')
            console.log('  -a, --about       Show about information')
            console.log('  -cmd, --commands  List available commands')
            console.log('  -h, --help        Display help information')
            console.log('  -v, --version     Display version information')
            break
        default:
            program.help()
    }
})

program.parse(process.argv)
