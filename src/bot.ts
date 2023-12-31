import { Client } from 'discord.js';
import { Command } from '@commands/command';

export class Bot extends Client {
        public commands: Map<string, Command> = new Map();

        constructor() {
                super({ intents: ['Guilds'] });
        }

        /**
         * Adds a command to the bot's command list and registers it with Discord.
         * @param command - The command to add.
         * @param guildID - Optional. The ID of the guild to register the command with.
         */
        public addCommand(command: Command, guildID?: string): void {
                this.commands.set(command.data.name, command);

                if (guildID) {
                        this.guilds.fetch(guildID).then((guild) => {
                                guild.commands.create(command.data);
                        });

                        return;
                }

                this.application?.commands.create(command.data);
        }

        /**
         * Handles the commands received by the bot.
         */
        public handleCommands(): void {
                this.on('interactionCreate', (interaction) => {
                        if (!interaction.isCommand()) return;

                        const command = this.commands.get(interaction.commandName);
                        if (!command) return;

                        command.execute(interaction);
                });
        }
}
