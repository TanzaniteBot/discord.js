import type {
	APIActionRowComponent,
	APIMessageComponent,
	APIModalComponent,
	ComponentType,
} from 'discord-api-types/v9';
import type { JSONEncodable } from '../util/jsonEncodable';
import type { APIBaseComponent, APIMessageComponent, ComponentType } from 'discord-api-types/v9';

/**
 * Represents a discord component
 */
export interface Component extends JSONEncodable<APIMessageComponent | APIActionRowComponent<APIModalComponent>> {
	/**
	 * The type of this component
	 */
	public get type(): DataType['type'] {
		return this.data.type;
	}
}
