import { beforeEach, describe, expect, it, jest } from 'bun:test';
import { CommandInteraction } from 'discord.js';
import PingCommand from '@commands/ping_command';
import { Bot } from '@/bot';

describe('Bot', () => {
        let bot: Bot = new Bot();

        beforeEach(() => {
                bot.addCommand(new PingCommand())
                bot.handleCommands();
        })

        it('should handle commands', () => {
                bot.on('interactionCreate', (interaction) => {
                        expect(interaction.isCommand()).toBe(true);
                        if (interaction.isCommand()) {
                                expect(interaction.commandName).toBe('ping'); 
                                expect(interaction.reply).toHaveBeenCalledWith('Pong!');
                        }
                })

                bot.emit('interactionCreate', {
                        isCommand: () => true,
                        commandName: 'ping',
                        reply: jest.fn(),
                } as unknown as CommandInteraction);
        });
});