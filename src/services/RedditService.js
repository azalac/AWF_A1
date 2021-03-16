
import { default as fetchJsonp } from 'fetch-jsonp';

export class RedditService {
    static async getHotPosts(subreddit, limit=10) {
        var data = await fetchJsonp(`https://reddit.com/r/${subreddit}/hot.json`, {
            jsonpCallback: "jsonp"
        }).then(function(response) { return response.json(); });

        var posts = [];
        
        data.data.children.forEach(post => {
            if(post.kind === "t3" && posts.length < limit) {
                posts.push({
                    id: post.data.permalink,
                    url: "https://reddit.com" + post.data.permalink,
                    title: post.data.title,
                    thumbnail: post.data.thumbnail,
                    score: post.data.score
                });
            }
        });

        return posts;
    }
}
