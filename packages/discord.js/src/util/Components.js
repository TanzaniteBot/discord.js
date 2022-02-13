'use strict';

/**
 * @typedef {Object} BaseComponentData
 * @property {ComponentType} type
 */

/**
 * @typedef {BaseComponentData} ActionRowData
 * @property {ComponentData[]} components
 */

/**
 * @typedef {BaseComponentData} ButtonComponentData
 * @property {ButtonStyle} style
 * @property {?boolean} disabled
 * @property {string} label
 * @property {?APIComponentEmoji} emoji
 * @property {?string} customId
 * @property {?string} url
 */

/**
 * @typedef {object} SelectMenuComponentOptionData
 * @property {string} label
 * @property {string} value
 * @property {?string} description
 * @property {?APIComponentEmoji} emoji
 * @property {?boolean} default
 */

/**
 * @typedef {BaseComponentData} SelectMenuComponentData
 * @property {string} customId
 * @property {?boolean} disabled
 * @property {?number} maxValues
 * @property {?number} minValues
 * @property {?SelectMenuComponentOptionData[]} options
 * @property {?string} placeholder
 */

/**
 * @typedef {BaseComponentData} TextInputComponentData
 * @property {string} customId
 * @property {TextInputStyle} style
 * @property {string} label
 * @property {?number} minLength
 * @property {?number} maxLength
 * @property {?boolean} required
 * @property {?string} value
 * @property {?string} placeholder
 */

/**
 * @typedef {ActionRowData|ButtonComponentData|SelectMenuComponentData|TextInputComponentData} ComponentData
 */

class Components extends null {
  /**
   * Transforms json data into api-compatible json data.
   * @param {ComponentData|APIMessageComponent|TextInputComponentData} data The data to transform.
   * @returns {APIMessageComponent|APIModalComponent}
   */
  static transformJSON(data) {
    return {
      type: data?.type,
      custom_id: data?.customId ?? data?.custom_id,
      disabled: data?.disabled,
      style: data?.style,
      label: data?.label,
      emoji: data?.emoji,
      url: data?.url,
      options: data?.options,
      placeholder: data?.placeholder,
      min_values: data?.minValues ?? data?.min_values,
      max_values: data?.maxValues ?? data?.max_values,
      components: data?.components?.map(c => Components.transformJSON(c)),
      min_length: data?.minLength ?? data?.min_length,
      max_length: data?.maxLength ?? data?.max_length,
      value: data?.value,
    };
  }
}

module.exports = Components;
