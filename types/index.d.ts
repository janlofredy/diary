export { Book, BookStyle, ShelfStyle } 

declare global {
    interface Book {
        id: number | string;
        title: string;
        description: string;
        bookStyle: BookStyle
    }
    interface BookStyle {
        spineThickness: number;
        color: string;
    }
    interface ShelfStyle {
        type: 'wood' | 'metal' | 'glass';
    }
}