import { APIActionRowComponent, APIMessageComponent, APIModalComponent, ComponentType } from 'discord-api-types/v9';
import type { ButtonComponent, SelectMenuComponent } from '..';
import { Component } from './Component';
import { createComponent } from './Components';
import type { TextInputComponent } from './InputText';

export type MessageComponent = ActionRowComponent | ActionRow;

export type ActionRowComponent = ButtonComponent | SelectMenuComponent;
export type ModalActionRowComponent = TextInputComponent;

// TODO: Add valid form component types
/**
 * Represents an action row component
 */
export class ActionRow<T extends ActionRowComponent = ActionRowComponent> extends Component<
	Omit<Partial<APIActionRowComponent<APIMessageComponent>> & { type: ComponentType.ActionRow }, 'components'>
> {
	public readonly components: T[];

	public constructor({ components, ...data }: Partial<APIActionRowComponent<APIMessageComponent>> = {}) {
		super({ type: ComponentType.ActionRow, ...data });
		this.components = (components?.map((c) => createComponent(c)) ?? []) as T[];
	}

	/**
	 * Adds components to this action row.
	 * @param components The components to add to this action row.
	 * @returns
	 */
	public addComponents(...components: T[]) {
		this.components.push(...components);
		return this;
	}

	/**
	 * Sets the components in this action row
	 * @param components The components to set this row to
	 */
	public setComponents(components: T[]) {
		this.components.splice(0, this.components.length, ...components);
		return this;
	}

	public toJSON(): APIActionRowComponent<APIMessageComponent> {
		return {
			...this.data,
			components: this.components.map((component) => component.toJSON()),
		};
	}
}
