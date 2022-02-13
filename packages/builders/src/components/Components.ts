import { APIMessageComponent, APIModalComponent, ComponentType } from 'discord-api-types/v9';
import { ActionRow, ButtonComponent, Component, SelectMenuComponent, TextInputComponent } from '../index';
import type { MessageComponent } from './ActionRow';

export interface MappedComponentTypes {
	[ComponentType.ActionRow]: ActionRow;
	[ComponentType.Button]: ButtonComponent;
	[ComponentType.SelectMenu]: SelectMenuComponent;
	[ComponentType.TextInput]: TextInputComponent;
}

/**
 * Factory for creating components from API data
 * @param data The api data to transform to a component class
 */
export function createComponent<T extends keyof MappedComponentTypes>(
	data: (APIMessageComponent | APIModalComponent) & { type: T },
): MappedComponentTypes[T];
export function createComponent<C extends MessageComponent | APIModalComponent>(data: C): C;
export function createComponent(data: APIMessageComponent | APIModalComponent): Component {
	switch (data.type) {
		case ComponentType.ActionRow:
			// @ts-expect-error
			return data instanceof ActionRow ? data : new ActionRow(data);
		case ComponentType.Button:
			return data instanceof ButtonComponent ? data : new ButtonComponent(data);
		case ComponentType.SelectMenu:
			return data instanceof SelectMenuComponent ? data : new SelectMenuComponent(data);
		case ComponentType.TextInput:
			return new TextInputComponent(data);
		default:
			// @ts-expect-error
			throw new Error(`Cannot serialize component type: ${data.type as number}`);
	}
}
