import { CommandInteraction, SlashCommandBuilder } from "discord.js";
import { Command } from "./command";

export default class PingCommand extends Command {
        data = new SlashCommandBuilder()
                .setName('ping')
                .setDescription('Replies with pong!');
        
        async execute(interaction: CommandInteraction): Promise<void> {
                await interaction.reply('Pong!');
        }
}