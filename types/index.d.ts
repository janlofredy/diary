declare global {
    interface Book {
        id: string;
        title: string;
        description: string;
        bookStyle: BookStyle
    }
    interface BookStyle {
        spineThickness: number;
        color: string;
        height?: number;
        width?: number;
    }
    interface ShelfStyle {
        type: 'wood' | 'metal' | 'glass';
    }
}