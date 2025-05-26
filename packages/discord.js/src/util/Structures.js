'use strict';

/**
 * An extendable structure:
 * * **`GuildEmoji`**
 * * **`DMChannel`**
 * * **`TextChannel`**
 * * **`VoiceChannel`**
 * * **`CategoryChannel`**
 * * **`AnnouncementChannel`**
 * * **`StageChannel`**
 * * **`ThreadChannel`**
 * * **`GuildMember`**
 * * **`ThreadMember`**
 * * **`Guild`**
 * * **`Message`**
 * * **`MessageReaction`**
 * * **`Presence`**
 * * **`ClientPresence`**
 * * **`VoiceState`**
 * * **`Role`**
 * * **`User`**
 * * **`StageInstance`**
 * * **`ChatInputCommandInteraction`**
 * * **`ButtonInteraction`**
 * * **`ChannelSelectMenuInteraction`**
 * * **`MentionableSelectMenuInteraction`**
 * * **`RoleSelectMenuInteraction`**
 * * **`StringSelectMenuInteraction`**
 * * **`UserSelectMenuInteraction`**
 * * **`MessageContextMenuCommandInteraction`**
 * * **`PrimaryEntryPointCommandInteraction`**
 * * **`AutocompleteInteraction`**
 * * **`UserContextMenuCommandInteraction`**
 * * **`ModalSubmitInteraction`**
 * * **`DirectoryChannel`**
 * * **`PartialGroupDMChannel`**
 * * **`ThreadOnlyChannel`**
 * * **`ForumChannel`**
 * * **`MediaChannel`**
 * * **`ApplicationEmoji`**
 * @typedef {string} ExtendableStructure
 */

/**
 * Allows for the extension of built-in Discord.js structures that are instantiated by {@link BaseManager Managers}.
 */
class Structures extends null {
  /**
   * Retrieves a structure class.
   * @param {ExtendableStructure} structure Name of the structure to retrieve
   * @returns {Function}
   */
  static get(structure) {
    if (typeof structure !== 'string') {
      throw new TypeError(`"structure" argument must be a string (received ${typeof structure})`);
    }

    return structures[structure];
  }

  /**
   * Extends a structure.
   * <warn> Make sure to extend all structures before instantiating your client.
   * Extending after doing so may not work as expected. </warn>
   * @param {ExtendableStructure} structure Name of the structure class to extend
   * @param {Function} extender Function that takes the base class to extend as its only parameter and returns the
   * extended class/prototype
   * @returns {Function} Extended class/prototype returned from the extender
   * @example
   * const { Structures } = require('discord.js');
   *
   * Structures.extend('Guild', Guild => {
   *   class CoolGuild extends Guild {
   *     constructor(client, data) {
   *       super(client, data);
   *       this.cool = true;
   *     }
   *   }
   *
   *   return CoolGuild;
   * });
   */
  static extend(structure, extender) {
    if (structures[structure] === undefined) {
      throw new RangeError(`"${structure}" is not a valid extensible structure.`);
    }
    if (typeof extender !== 'function') {
      const received = `(received ${typeof extender})`;
      throw new TypeError(
        `"extender" argument must be a function that returns the extended structure class/prototype ${received}.`,
      );
    }

    const extended = extender(structures[structure]);
    if (typeof extended !== 'function') {
      const received = `(received ${typeof extended})`;
      throw new TypeError(`The extender function must return the extended structure class/prototype ${received}.`);
    }

    if (!(extended.prototype instanceof structures[structure])) {
      const prototype = Object.getPrototypeOf(extended);
      const received = `${extended.name ?? 'unnamed'}${prototype.name ? ` extends ${prototype.name}` : ''}`;
      throw new Error(
        'The class/prototype returned from the extender function must extend the existing structure class/prototype' +
          ` (received function ${received}; expected extension of ${structures[structure].name}).`,
      );
    }

    structures[structure] = extended;
    return extended;
  }
}

const structures = {
  GuildEmoji: require('../structures/GuildEmoji.js').GuildEmoji,
  DMChannel: require('../structures/DMChannel.js').DMChannel,
  TextChannel: require('../structures/TextChannel.js').TextChannel,
  VoiceChannel: require('../structures/VoiceChannel.js').VoiceChannel,
  CategoryChannel: require('../structures/CategoryChannel.js').CategoryChannel,
  AnnouncementChannel: require('../structures/AnnouncementChannel.js').AnnouncementChannel,
  StageChannel: require('../structures/StageChannel.js').StageChannel,
  ThreadChannel: require('../structures/ThreadChannel.js').ThreadChannel,
  GuildMember: require('../structures/GuildMember.js').GuildMember,
  ThreadMember: require('../structures/ThreadMember.js').ThreadMember,
  Guild: require('../structures/Guild.js').Guild,
  Message: require('../structures/Message.js').Message,
  MessageReaction: require('../structures/MessageReaction.js').MessageReaction,
  Presence: require('../structures/Presence.js').Presence,
  ClientPresence: require('../structures/ClientPresence.js').ClientPresence,
  VoiceState: require('../structures/VoiceState.js').VoiceState,
  Role: require('../structures/Role.js').Role,
  User: require('../structures/User.js').User,
  StageInstance: require('../structures/StageInstance.js').StageInstance,
  ChatInputCommandInteraction: require('../structures/ChatInputCommandInteraction.js').ChatInputCommandInteraction,
  ButtonInteraction: require('../structures/ButtonInteraction.js').ButtonInteraction,
  ChannelSelectMenuInteraction: require('../structures/ChannelSelectMenuInteraction.js').ChannelSelectMenuInteraction,
  MentionableSelectMenuInteraction: require('../structures/MentionableSelectMenuInteraction.js')
    .MentionableSelectMenuInteraction,
  RoleSelectMenuInteraction: require('../structures/RoleSelectMenuInteraction.js').RoleSelectMenuInteraction,
  StringSelectMenuInteraction: require('../structures/StringSelectMenuInteraction.js').StringSelectMenuInteraction,
  UserSelectMenuInteraction: require('../structures/UserSelectMenuInteraction.js').UserSelectMenuInteraction,
  MessageContextMenuCommandInteraction: require('../structures/MessageContextMenuCommandInteraction.js')
    .MessageContextMenuCommandInteraction,
  PrimaryEntryPointCommandInteraction: require('../structures/PrimaryEntryPointCommandInteraction.js')
    .PrimaryEntryPointCommandInteraction,
  AutocompleteInteraction: require('../structures/AutocompleteInteraction.js').AutocompleteInteraction,
  UserContextMenuCommandInteraction: require('../structures/UserContextMenuCommandInteraction.js')
    .UserContextMenuCommandInteraction,
  ModalSubmitInteraction: require('../structures/ModalSubmitInteraction.js').ModalSubmitInteraction,
  DirectoryChannel: require('../structures/DirectoryChannel.js').DirectoryChannel,
  PartialGroupDMChannel: require('../structures/PartialGroupDMChannel.js').PartialGroupDMChannel,
  ThreadOnlyChannel: require('../structures/ThreadOnlyChannel.js').ThreadOnlyChannel,
  ForumChannel: require('../structures/ForumChannel.js').ForumChannel,
  MediaChannel: require('../structures/MediaChannel.js').MediaChannel,
  ApplicationEmoji: require('../structures/ApplicationEmoji.js').ApplicationEmoji,
};

exports.Structures = Structures;
