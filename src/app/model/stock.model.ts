import { Timestamp } from 'rxjs';
import { Deserializable } from './deserializable.model';

export class Stock implements Deserializable {
    public symbol: string;
    public price: string;
    public size: string;
    public time: any;

    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}
