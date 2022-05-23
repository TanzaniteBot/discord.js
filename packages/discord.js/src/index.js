'use strict';

const { __exportStar } = require('tslib');

// "Root" classes (starting points)
exports.BaseClient = require('./client/BaseClient');
exports.Client = require('./client/Client');
exports.Shard = require('./sharding/Shard');
exports.ShardClientUtil = require('./sharding/ShardClientUtil');
exports.ShardingManager = require('./sharding/ShardingManager');
exports.WebhookClient = require('./client/WebhookClient');

// Utilities
exports.ActivityFlagsBitField = require('./util/ActivityFlagsBitField');
exports.ApplicationFlagsBitField = require('./util/ApplicationFlagsBitField');
exports.BaseManager = require('./managers/BaseManager');
exports.BitField = require('./util/BitField');
exports.Collection = require('@discordjs/collection').Collection;
exports.Constants = require('./util/Constants');
exports.Colors = require('./util/Colors');
exports.DataResolver = require('./util/DataResolver');
exports.Events = require('./util/Events');
exports.Formatters = require('./util/Formatters');
exports.IntentsBitField = require('./util/IntentsBitField');
exports.LimitedCollection = require('./util/LimitedCollection');
exports.MessageFlagsBitField = require('./util/MessageFlagsBitField');
exports.Options = require('./util/Options');
exports.Partials = require('./util/Partials');
exports.PermissionsBitField = require('./util/PermissionsBitField');
exports.ShardEvents = require('./util/ShardEvents');
exports.Status = require('./util/Status');
exports.SnowflakeUtil = require('@sapphire/snowflake').DiscordSnowflake;
exports.Structures = require('./util/Structures');
exports.Sweepers = require('./util/Sweepers');
exports.SystemChannelFlagsBitField = require('./util/SystemChannelFlagsBitField');
exports.ThreadMemberFlagsBitField = require('./util/ThreadMemberFlagsBitField');
exports.UserFlagsBitField = require('./util/UserFlagsBitField');
exports.Util = require('./util/Util');
exports.version = require('../package.json').version;

// Managers
exports.ApplicationCommandManager = require('./managers/ApplicationCommandManager');
exports.ApplicationCommandPermissionsManager = require('./managers/ApplicationCommandPermissionsManager');
exports.BaseGuildEmojiManager = require('./managers/BaseGuildEmojiManager');
exports.CachedManager = require('./managers/CachedManager');
exports.ChannelManager = require('./managers/ChannelManager');
exports.ClientVoiceManager = require('./client/voice/ClientVoiceManager');
exports.DataManager = require('./managers/DataManager');
exports.GuildApplicationCommandManager = require('./managers/GuildApplicationCommandManager');
exports.GuildBanManager = require('./managers/GuildBanManager');
exports.GuildChannelManager = require('./managers/GuildChannelManager');
exports.GuildEmojiManager = require('./managers/GuildEmojiManager');
exports.GuildEmojiRoleManager = require('./managers/GuildEmojiRoleManager');
exports.GuildInviteManager = require('./managers/GuildInviteManager');
exports.GuildManager = require('./managers/GuildManager');
exports.GuildMemberManager = require('./managers/GuildMemberManager');
exports.GuildMemberRoleManager = require('./managers/GuildMemberRoleManager');
exports.GuildScheduledEventManager = require('./managers/GuildScheduledEventManager');
exports.GuildStickerManager = require('./managers/GuildStickerManager');
exports.MessageManager = require('./managers/MessageManager');
exports.PermissionOverwriteManager = require('./managers/PermissionOverwriteManager');
exports.PresenceManager = require('./managers/PresenceManager');
exports.ReactionManager = require('./managers/ReactionManager');
exports.ReactionUserManager = require('./managers/ReactionUserManager');
exports.RoleManager = require('./managers/RoleManager');
exports.StageInstanceManager = require('./managers/StageInstanceManager');
exports.ThreadManager = require('./managers/ThreadManager');
exports.ThreadMemberManager = require('./managers/ThreadMemberManager');
exports.UserManager = require('./managers/UserManager');
exports.VoiceStateManager = require('./managers/VoiceStateManager');
exports.WebSocketManager = require('./client/websocket/WebSocketManager');
exports.WebSocketShard = require('./client/websocket/WebSocketShard');

// Structures
exports.ActionRow = require('./structures/ActionRow');
exports.ActionRowBuilder = require('./structures/ActionRowBuilder');
exports.Activity = require('./structures/Presence').Activity;
exports.AnonymousGuild = require('./structures/AnonymousGuild');
exports.Application = require('./structures/interfaces/Application');
exports.ApplicationCommand = require('./structures/ApplicationCommand');
exports.AutocompleteInteraction = require('./structures/AutocompleteInteraction');
exports.Base = require('./structures/Base');
exports.BaseGuild = require('./structures/BaseGuild');
exports.BaseGuildEmoji = require('./structures/BaseGuildEmoji');
exports.BaseGuildTextChannel = require('./structures/BaseGuildTextChannel');
exports.BaseGuildVoiceChannel = require('./structures/BaseGuildVoiceChannel');
exports.ButtonBuilder = require('./structures/ButtonBuilder');
exports.ButtonComponent = require('./structures/ButtonComponent');
exports.ButtonInteraction = require('./structures/ButtonInteraction');
exports.CategoryChannel = require('./structures/CategoryChannel');
exports.Channel = require('./structures/Channel').Channel;
exports.ChatInputCommandInteraction = require('./structures/ChatInputCommandInteraction');
exports.ClientApplication = require('./structures/ClientApplication');
exports.ClientPresence = require('./structures/ClientPresence');
exports.ClientUser = require('./structures/ClientUser');
exports.CommandInteraction = require('./structures/CommandInteraction');
exports.Collector = require('./structures/interfaces/Collector');
exports.CommandInteractionOptionResolver = require('./structures/CommandInteractionOptionResolver');
exports.Component = require('./structures/Component');
exports.ContextMenuCommandInteraction = require('./structures/ContextMenuCommandInteraction');
exports.DMChannel = require('./structures/DMChannel');
exports.Embed = require('./structures/Embed');
exports.EmbedBuilder = require('./structures/EmbedBuilder');
exports.Emoji = require('./structures/Emoji').Emoji;
exports.Guild = require('./structures/Guild').Guild;
exports.GuildAuditLogs = require('./structures/GuildAuditLogs');
exports.GuildAuditLogsEntry = require('./structures/GuildAuditLogsEntry');
exports.GuildBan = require('./structures/GuildBan');
exports.GuildChannel = require('./structures/GuildChannel');
exports.GuildEmoji = require('./structures/GuildEmoji');
exports.GuildMember = require('./structures/GuildMember').GuildMember;
exports.GuildPreview = require('./structures/GuildPreview');
exports.GuildPreviewEmoji = require('./structures/GuildPreviewEmoji');
exports.GuildScheduledEvent = require('./structures/GuildScheduledEvent').GuildScheduledEvent;
exports.GuildTemplate = require('./structures/GuildTemplate');
exports.Integration = require('./structures/Integration');
exports.IntegrationApplication = require('./structures/IntegrationApplication');
exports.Interaction = require('./structures/Interaction');
exports.InteractionCollector = require('./structures/InteractionCollector');
exports.InteractionResponse = require('./structures/InteractionResponse');
exports.InteractionWebhook = require('./structures/InteractionWebhook');
exports.Invite = require('./structures/Invite');
exports.InviteStageInstance = require('./structures/InviteStageInstance');
exports.InviteGuild = require('./structures/InviteGuild');
exports.Message = require('./structures/Message').Message;
exports.Attachment = require('./structures/Attachment');
exports.ModalBuilder = require('./structures/ModalBuilder');
exports.MessageCollector = require('./structures/MessageCollector');
exports.MessageComponentInteraction = require('./structures/MessageComponentInteraction');
exports.MessageContextMenuCommandInteraction = require('./structures/MessageContextMenuCommandInteraction');
exports.MessageMentions = require('./structures/MessageMentions');
exports.MessagePayload = require('./structures/MessagePayload');
exports.MessageReaction = require('./structures/MessageReaction');
exports.ModalSubmitInteraction = require('./structures/ModalSubmitInteraction');
exports.ModalSubmitFieldsResolver = require('./structures/ModalSubmitFieldsResolver');
exports.NewsChannel = require('./structures/NewsChannel');
exports.OAuth2Guild = require('./structures/OAuth2Guild');
exports.PartialGroupDMChannel = require('./structures/PartialGroupDMChannel');
exports.PermissionOverwrites = require('./structures/PermissionOverwrites');
exports.Presence = require('./structures/Presence').Presence;
exports.ReactionCollector = require('./structures/ReactionCollector');
exports.ReactionEmoji = require('./structures/ReactionEmoji');
exports.RichPresenceAssets = require('./structures/Presence').RichPresenceAssets;
exports.Role = require('./structures/Role').Role;
exports.SelectMenuBuilder = require('./structures/SelectMenuBuilder');
exports.SelectMenuComponent = require('./structures/SelectMenuComponent');
exports.SelectMenuInteraction = require('./structures/SelectMenuInteraction');
exports.SelectMenuOptionBuilder = require('./structures/SelectMenuOptionBuilder');
exports.StageChannel = require('./structures/StageChannel');
exports.StageInstance = require('./structures/StageInstance').StageInstance;
exports.Sticker = require('./structures/Sticker').Sticker;
exports.StickerPack = require('./structures/StickerPack');
exports.Team = require('./structures/Team');
exports.TeamMember = require('./structures/TeamMember');
exports.TextChannel = require('./structures/TextChannel');
exports.TextInputBuilder = require('./structures/TextInputBuilder');
exports.TextInputComponent = require('./structures/TextInputComponent');
exports.ThreadChannel = require('./structures/ThreadChannel');
exports.ThreadMember = require('./structures/ThreadMember');
exports.Typing = require('./structures/Typing');
exports.User = require('./structures/User');
exports.UserContextMenuCommandInteraction = require('./structures/UserContextMenuCommandInteraction');
exports.VoiceChannel = require('./structures/VoiceChannel');
exports.VoiceRegion = require('./structures/VoiceRegion');
exports.VoiceState = require('./structures/VoiceState');
exports.Webhook = require('./structures/Webhook');
exports.Widget = require('./structures/Widget');
exports.WidgetMember = require('./structures/WidgetMember');
exports.WelcomeChannel = require('./structures/WelcomeChannel');
exports.WelcomeScreen = require('./structures/WelcomeScreen');

exports.WebSocket = require('./WebSocket');

// External
exports.ActivityType = require('discord-api-types/v10').ActivityType;
exports.ApplicationCommandType = require('discord-api-types/v10').ApplicationCommandType;
exports.ApplicationCommandOptionType = require('discord-api-types/v10').ApplicationCommandOptionType;
exports.ApplicationCommandPermissionType = require('discord-api-types/v10').ApplicationCommandPermissionType;
exports.AuditLogEvent = require('discord-api-types/v10').AuditLogEvent;
exports.ButtonStyle = require('discord-api-types/v10').ButtonStyle;
exports.ChannelType = require('discord-api-types/v10').ChannelType;
exports.ComponentType = require('discord-api-types/v10').ComponentType;
exports.GatewayCloseCodes = require('discord-api-types/v10').GatewayCloseCodes;
exports.GatewayDispatchEvents = require('discord-api-types/v10').GatewayDispatchEvents;
exports.GatewayIntentBits = require('discord-api-types/v10').GatewayIntentBits;
exports.GatewayOpcodes = require('discord-api-types/v10').GatewayOpcodes;
exports.GuildDefaultMessageNotifications = require('discord-api-types/v10').GuildDefaultMessageNotifications;
exports.GuildExplicitContentFilter = require('discord-api-types/v10').GuildExplicitContentFilter;
exports.GuildFeature = require('discord-api-types/v10').GuildFeature;
exports.GuildMFALevel = require('discord-api-types/v10').GuildMFALevel;
exports.GuildNSFWLevel = require('discord-api-types/v10').GuildNSFWLevel;
exports.GuildPremiumTier = require('discord-api-types/v10').GuildPremiumTier;
exports.GuildScheduledEventEntityType = require('discord-api-types/v10').GuildScheduledEventEntityType;
exports.GuildScheduledEventPrivacyLevel = require('discord-api-types/v10').GuildScheduledEventPrivacyLevel;
exports.GuildScheduledEventStatus = require('discord-api-types/v10').GuildScheduledEventStatus;
exports.GuildSystemChannelFlags = require('discord-api-types/v10').GuildSystemChannelFlags;
exports.GuildVerificationLevel = require('discord-api-types/v10').GuildVerificationLevel;
exports.IntegrationExpireBehavior = require('discord-api-types/v10').IntegrationExpireBehavior;
exports.InteractionType = require('discord-api-types/v10').InteractionType;
exports.InteractionResponseType = require('discord-api-types/v10').InteractionResponseType;
exports.InviteTargetType = require('discord-api-types/v10').InviteTargetType;
exports.Locale = require('discord-api-types/v10').Locale;
exports.MessageActivityType = require('discord-api-types/v10').MessageActivityType;
exports.MessageType = require('discord-api-types/v10').MessageType;
exports.MessageFlags = require('discord-api-types/v10').MessageFlags;
exports.OAuth2Scopes = require('discord-api-types/v10').OAuth2Scopes;
exports.PermissionFlagsBits = require('discord-api-types/v10').PermissionFlagsBits;
exports.RESTJSONErrorCodes = require('discord-api-types/v10').RESTJSONErrorCodes;
exports.StageInstancePrivacyLevel = require('discord-api-types/v10').StageInstancePrivacyLevel;
exports.StickerType = require('discord-api-types/v10').StickerType;
exports.StickerFormatType = require('discord-api-types/v10').StickerFormatType;
exports.TeamMemberMembershipState = require('discord-api-types/v10').TeamMemberMembershipState;
exports.TextInputStyle = require('discord-api-types/v10').TextInputStyle;
exports.UserFlags = require('discord-api-types/v10').UserFlags;
exports.VideoQualityMode = require('discord-api-types/v10').VideoQualityMode;
exports.WebhookType = require('discord-api-types/v10').WebhookType;
exports.DiscordAPIError = require('@discordjs/rest').DiscordAPIError;
exports.HTTPError = require('@discordjs/rest').HTTPError;
exports.RateLimitError = require('@discordjs/rest').RateLimitError;

__exportStar(require('@discordjs/builders'), exports);
