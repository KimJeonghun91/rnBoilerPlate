import { Observer } from './';

class Subject {
    private observers: { id: string; observer: Observer }[] = [];

    addObserver(id: string, observer: Observer) {
        this.observers.push({ id, observer });
    }

    removeObserver(id: string) {
        this.observers = this.observers.filter((obs) => obs.id !== id);
    }

    notifyObservers(id: string, data: any) {
        this.observers.forEach((observer) => {
            if (id === 'all') {
                observer.observer.notify(data);
            } else if (id === observer.id) {
                observer.observer.notify(data);
            };
        });
    }
}

export { Subject };