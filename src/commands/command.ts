import { Bot } from '@/bot';
import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

export abstract class Command {
        abstract data: SlashCommandBuilder;
        abstract execute(interaction: CommandInteraction): Promise<void>;
}
