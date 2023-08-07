export interface Observer {
    id: 'all' | string;
    notify: (data: any) => void;
}