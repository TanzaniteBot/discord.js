import { APIActionRowComponentTypes, APIMessageComponent, ComponentType } from 'discord-api-types/v9';
import { ActionRow, ButtonComponent, Component, SelectMenuComponent, TextInputComponent } from '../index';

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
	data: APIMessageComponent & { type: T },
): MappedComponentTypes[T];
export function createComponent<C extends APIActionRowComponentTypes>(data: C): C;
export function createComponent(data: APIActionRowComponentTypes): Component {
	switch (data.type) {
		case ComponentType.ActionRow:
			// @ts-expect-error
			return data instanceof ActionRow ? data : new ActionRow(data);
		case ComponentType.Button:
			return (data instanceof ButtonComponent ? data : new ButtonComponent(data)) as Component;
		case ComponentType.SelectMenu:
			return data instanceof SelectMenuComponent ? data : new SelectMenuComponent(data);
		case ComponentType.TextInput:
			// @ts-expect-error
			return new TextInputComponent(data);
		default:
			// @ts-expect-error
			throw new Error(`Cannot serialize component type: ${data.type as number}`);
	}
}
