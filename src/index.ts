#!/usr/bin/env node
import { Command } from "commander"
import { printBanner } from "./util/logo"

const program = new Command()

program.name('dws')
    .description("Docker Workspace Switcher")
    .version("0.1.0")

program.option('-a, --about', 'Show about information')

program.action((options) => { 
    switch (true) {
        case options.about:
            console.log()
            printBanner()
            break
        default:            
            program.help()
    }
})

program.parse(process.argv)
