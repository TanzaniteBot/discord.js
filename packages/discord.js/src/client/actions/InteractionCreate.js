'use strict';

const { InteractionType, ComponentType, ApplicationCommandType } = require('discord-api-types/v10');
const Action = require('./Action');
const Events = require('../../util/Events');
const Structures = require('../../util/Structures');

class InteractionCreateAction extends Action {
  handle(data) {
    const client = this.client;

    // Resolve and cache partial channels for Interaction#channel getter
    const channel = data.channel && this.getChannel(data.channel);

    // Do not emit this for interactions that cache messages that are non-text-based.
    let InteractionClass;

    switch (data.type) {
      case InteractionType.ApplicationCommand:
        switch (data.data.type) {
          case ApplicationCommandType.ChatInput:
            InteractionClass = Structures.get('ChatInputCommandInteraction');
            break;
          case ApplicationCommandType.User:
            InteractionClass = Structures.get('UserContextMenuCommandInteraction');
            break;
          case ApplicationCommandType.Message:
            if (channel && !channel.isTextBased()) return;
            InteractionClass = Structures.get('MessageContextMenuCommandInteraction');
            break;
          default:
            client.emit(
              Events.Debug,
              `[INTERACTION] Received application command interaction with unknown type: ${data.data.type}`,
            );
            return;
        }
        break;
      case InteractionType.MessageComponent:
        if (channel && !channel.isTextBased()) return;

        switch (data.data.component_type) {
          case ComponentType.Button:
            InteractionClass = Structures.get('ButtonInteraction');
            break;
          case ComponentType.StringSelect:
            InteractionClass = Structures.get('StringSelectMenuInteraction');
            break;
          case ComponentType.UserSelect:
            InteractionClass = Structures.get('UserSelectMenuInteraction');
            break;
          case ComponentType.RoleSelect:
            InteractionClass = Structures.get('RoleSelectMenuInteraction');
            break;
          case ComponentType.MentionableSelect:
            InteractionClass = Structures.get('MentionableSelectMenuInteraction');
            break;
          case ComponentType.ChannelSelect:
            InteractionClass = Structures.get('ChannelSelectMenuInteraction');
            break;
          default:
            client.emit(
              Events.Debug,
              `[INTERACTION] Received component interaction with unknown type: ${data.data.component_type}`,
            );
            return;
        }
        break;
      case InteractionType.ApplicationCommandAutocomplete:
        InteractionClass = Structures.get('AutocompleteInteraction');
        break;
      case InteractionType.ModalSubmit:
        InteractionClass = Structures.get('ModalSubmitInteraction');
        break;
      default:
        client.emit(Events.Debug, `[INTERACTION] Received interaction with unknown type: ${data.type}`);
        return;
    }

    const interaction = new InteractionClass(client, data);

    /**
     * Emitted when an interaction is created.
     * @event Client#interactionCreate
     * @param {BaseInteraction} interaction The interaction which was created
     */
    client.emit(Events.InteractionCreate, interaction);
  }
}

module.exports = InteractionCreateAction;
