import './PostList.css';

import { Component } from 'react';

import { IconContext } from 'react-icons';

import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

import { FavouriteService } from '../services/FavouriteService';

class PostList extends Component {

    get hasPosts() {
        return this.props.posts && this.props.posts.length > 0;
    }

    toggleFavourite(post) {
        FavouriteService.toggleFavourite(post);

        this.forceUpdate();
    }

    render() {
        if(this.hasPosts) {
            const fav = FavouriteService.getFavourites();
            return (
                <div className="PostList-List">
                    {this.props.posts.map(post => (
                        <div className="PostList-Post" key={post.id}>

                            {post.thumbnail ?
                                <img src={post.thumbnail}
                                     alt=""
                                     onError={evt=>evt.target.style.display="none"}>
                                    
                                </img> : null}

                            <div className="PostList-PostBody">
                                <a href={post.url}>{post.title}</a>
                                <div className="PostList-Score">{post.score}</div>
                            </div>
                            <div>
                                <IconContext.Provider value={{ color: "inherit" }}>
                                    <div className="PostList-Favourite" onClick={() => this.toggleFavourite(post)}>
                                        {fav[post.id] ? <FaBookmark></FaBookmark> : <FaRegBookmark />}
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    ))}
                </div>
            );
        } else {
            return (<div className="PostList-Empty">{this.props.empty_message || "No posts loaded"}</div>);
        }
    }
}

export default PostList;
