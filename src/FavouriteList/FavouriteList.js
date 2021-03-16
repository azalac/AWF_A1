import { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa';
import PostList from '../PostList/PostList';
import { FavouriteService } from '../services/FavouriteService';
import './FavouriteList.css';

function FavouriteList() {

  const [posts, setPosts] = useState(() => {
    return Object.values(FavouriteService.getFavourites());
  });

  return (
    <div className="Favourite">
      <div className="Favourite-Header">
        Favourites
        <a className="Favourite-Navigation" href="#/">
          <IconContext.Provider value={{ color: "inherit" }}>
            <FaChevronLeft></FaChevronLeft>
          </IconContext.Provider>
          Top
        </a>
      </div>
      <div className="Favourite-Content">
        <PostList posts={posts} empty_message="No favourites"></PostList>
      </div>
    </div>
  );
}

export default FavouriteList;
