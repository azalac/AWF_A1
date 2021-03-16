import './TopList.css';

import SearchBox from '../SearchBox/SearchBox.js';
import PostList from '../PostList/PostList';
import { IconContext } from 'react-icons';
import { FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

import { RedditService } from '../services/RedditService';

function TopList() {
  
  const [subreddit, setSubreddit] = useState(null);
  const [posts, setPosts] = useState(null);

  function onSearch(newsub) {
    if(newsub !== subreddit) {
      setSubreddit(newsub);

      RedditService.getHotPosts(newsub).then(setPosts);
    }
  }
  
  return (
    <div className="App">
      <header className="App-Header">
        Top Posts
        <a className="App-Navigation" href="/favourites">
          Favourites
          <IconContext.Provider value={{ color: "inherit" }}>
            <FaChevronRight></FaChevronRight>
          </IconContext.Provider>
        </a>
        <SearchBox onSearch={onSearch} />
      </header>
      <div className="App-Content">
        <PostList posts={posts}></PostList>
      </div>
    </div>
  );
}

export default TopList;
