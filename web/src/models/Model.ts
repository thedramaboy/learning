import type { AxiosResponse, AxiosPromise } from "axios";

interface ModelAttributes<T> {
    set(update: T): void;
    getAll(): T;
    get <K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export interface HasId {
    id?: number;
}

export class Model<T extends HasId> {

    private attributes: ModelAttributes<T>;
    private sync: Sync<T>;
    private events: Events; 

    constructor(attributes: ModelAttributes<T>, sync: Sync<T>, events: Events) {
        this.attributes = attributes;
        this.sync = sync;
        this.events = events;
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set (update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    fetch(): void {
        const id = this.attributes.get('id');

        if (typeof id !== 'number') {
            throw new Error ('Cannot fetch without an id');
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        });
    }

    save(): void {
        this.sync.save(this.attributes.getAll())
            .then((response: AxiosResponse) => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            })
    }
}