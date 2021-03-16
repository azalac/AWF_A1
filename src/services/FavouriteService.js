
export class FavouriteService {
    
    static getFavourites() {
        var favs = JSON.parse(window.localStorage.getItem("favourites")) || {};

        var favs_out = {};

        var any_removed = false;

        for(var k in favs) {
            var v = favs[k];

            if(typeof(k) === "string" && v && v.id && v.url && v.title) {
                favs_out[k] = v;
            } else {
                any_removed = true;
            }
        }

        if(any_removed) {
            this.setFavourites(favs_out);
        }

        return favs_out;
    }

    static setFavourites(data) {
        window.localStorage.setItem("favourites", JSON.stringify(data));
    }
    
    static toggleFavourite(post) {
        var favs = FavouriteService.getFavourites();

        if(favs[post.id]) {
            favs[post.id] = null;
        } else {
            favs[post.id] = post;
        }

        FavouriteService.setFavourites(favs);
    }

}
