import {Photo} from '../../../photo/photo.js';

export class Post_1Photo {
    constructor() {}

    render(container) {
        const photo = new Photo(container);
        photo.render('Фото поста №1', './photo_post_1.png');
    }
}
