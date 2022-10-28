export interface NewType {
    value: string;
    click: {
        (data: string): void;
        (): void;
    };
}
