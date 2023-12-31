import { describe, expect, it, jest } from 'bun:test';
import { CommandInteraction } from 'discord.js';
import PingCommand from '@commands/ping_command';

describe('PingCommand', () => {
        it('should reply with "Pong!"', async () => {
                const interaction: CommandInteraction = {
                        reply: jest.fn(),
                } as unknown as CommandInteraction;

                const pingCommand = new PingCommand();
                await pingCommand.execute(interaction);

                expect(interaction.reply).toHaveBeenCalledWith('Pong!');
        });
});