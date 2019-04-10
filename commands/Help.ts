import { IModify, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { IRoom } from '@rocket.chat/apps-engine/definition/rooms';
import { SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { KokoApp } from '../KokoApp';
import { getDirect, sendMessage } from '../lib/helpers';

export async function processHelpCommand(app: KokoApp, context: SlashCommandContext, read: IRead, modify: IModify): Promise<void> {
    const sender = context.getSender();
    const room = await getDirect(app, read, modify, sender.username) as IRoom;
    const message = `These are the commands I can understand:
        \`/koko praise\` [@username] [text] Starts a new praise message (username and text are optional)
        \`/koko question\` Repeats last question allowing you to change your answer
        \---
        \`/koko cancel\` Cancels all operations with current user
        \`/koko help\` Shows this message`;

    await sendMessage(app, modify, room, message);
}
