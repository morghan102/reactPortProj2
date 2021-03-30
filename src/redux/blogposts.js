import { BLOGPOSTS } from '../shared/blogposts';

export const Blogposts = (state = BLOGPOSTS, action) => {
    switch(action.type) {
        default:
            return state;
            // i think i delete that l8r
    }
};