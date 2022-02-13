import type { JSONEncodable } from '../util/jsonEncodable';
import type {
	APIActionRowComponent,
	APIActionRowComponentTypes,
	APIBaseComponent,
	APIMessageActionRowComponent,
	APIModalActionRowComponent,
	ComponentType,
} from 'discord-api-types/v9';

/**
 * Represents a discord component
 */
export abstract class Component<
	DataType extends Partial<APIBaseComponent<ComponentType>> & {
		type: ComponentType;
	} = APIBaseComponent<ComponentType>,
> implements
		JSONEncodable<
			APIActionRowComponentTypes | APIActionRowComponent<APIModalActionRowComponent | APIMessageActionRowComponent>
		>
{
	/**
	 * The API data associated with this component
	 */
	protected readonly data: DataType;

	/**
	 * Converts this component to an API-compatible JSON object
	 */
	public abstract toJSON():
		| APIActionRowComponentTypes
		| APIActionRowComponent<APIModalActionRowComponent | APIMessageActionRowComponent>;

	public constructor(data: DataType) {
		this.data = data;
	}

	/**
	 * The type of this component
	 */
	public get type(): DataType['type'] {
		return this.data.type;
	}
}
