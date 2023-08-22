import React, { useState, useEffect } from "react";
import superPostImage from '../../images/SuperPostLogo.jpeg';
import { Post } from "../../components/Post";
import { CreateNewPost } from "../../components/CreateNewPost";
import { FilterChipsBar } from "../../components/FilterChipsBar";
import { FilterOptions } from "../../components/FilterOptions";
import { UserProfile } from "../../components/UserProfile";
import { LinearMapLocationMapPoint5 } from "../../icons/LinearMapLocationMapPoint5";
import "./style.css";

export const Homescreen = () => {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://localhost:7007/api/Posts", {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDoneClick = (newPost) => {
    fetch("https://localhost:7007/api/Posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
      .then(response => response.json())
      .then(data => {
        setPosts([...posts, data]);
        setFilteredPosts([...filteredPosts, data]);
      })
      .catch(error => {
        console.error("Error creating post:", error);
      });
  };

  const handleEditDone = (updatedPost) => {
    const postIndex = posts.findIndex(post => post.id === updatedPost.Id);
    const originalPost = posts[postIndex];
    
    if (postIndex !== -1) {
      const emptyFields = [];
      
      Object.keys(updatedPost).forEach(field => {
        if (updatedPost[field] === "") {
          emptyFields.push(field);
        }
      });

      const capitalizedOriginal = {};

      for (const key in originalPost) {
        if (originalPost.hasOwnProperty(key)) {
          const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
          capitalizedOriginal[capitalizedKey] = originalPost[key];
        }
      }
  
      Object.keys(capitalizedOriginal).forEach(property => {
      
      if (updatedPost.hasOwnProperty(property) && (updatedPost[property] === "" || updatedPost[property] === null)) {
      
      updatedPost[property] = capitalizedOriginal[property];
      }
      });
      
      fetch(`https://localhost:7007/api/Posts/${updatedPost.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPost),
      })
      .then(response => {
        if (response.status === 204) {
          fetch("https://localhost:7007/api/Posts", {
            method: 'GET',
          })
            .then(response => response.json())
            .then(data => {
              setPosts(data);
              setFilteredPosts(data);
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
        }
      })
      .catch(error => {
        console.error("Error updating post:", error);
      });
    }
  };

  const handleDelete = (postId) => {
    fetch(`https://localhost:7007/api/Posts/${postId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 204) {
          // Remove the deleted post from the state
          const updatedPosts = posts.filter(post => post.id !== postId);
          const updatedFilteredPosts = filteredPosts.filter(post => post.id !== postId);
          setPosts(updatedPosts);
          setFilteredPosts(updatedFilteredPosts);
        }
      })
      .catch(error => {
        console.error("Error deleting post:", error);
      });
  };
  
  // Function to filter posts based on location
  const handleLocationFilter = (location) => {
    if (location) {
      const filtered = posts.filter(post => post.location.toLowerCase() === location.toLowerCase());
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  };

  const groupedPosts = [];
  const postsToUse = filteredPosts.length > 0 ? filteredPosts : posts;

  for (let i = 0; i < postsToUse.length; i += 3) {
    groupedPosts.push(postsToUse.slice(i, i + 3));
  }

  return (
    <div className="homescreen">
      <div className="homescreen-v">
        <div className="overlap">
          <div className="banner" />
          <FilterOptions
            className="filter-options-instance"
            searchBarLine="https://generation-sessions.s3.amazonaws.com/22cd7392761006b09fe9c0427e90574f/img/line-2.svg"
            onLocationFilter={handleLocationFilter}
          />
          <img src={superPostImage} alt="logo" className="super-post-logo"/>
        </div>
        <div><UserProfile className="user-profile-instance" /></div>
        <div className="post-header">
          <div className="current-posts">
            <div className="title">
              <div className="text-wrapper-17">Current Posts</div>
            </div>
            <div className="current-location">
              <LinearMapLocationMapPoint5 className="linear-map-location-map-point-5" color="#A2A2A2" />
              <div className="text-wrapper-18">Ramat Gan</div>
            </div>
          </div>
        </div>
        <div className="centered-container">
          {groupedPosts.map((row, rowIndex) => (
            <div key={rowIndex} className="row-posts">
              {row.map((post, index) => (
                <div key={index} className="post-container">
                  <Post
                    avatarRoundedImage={post.avatarRoundedImage}
                    iconClock={post.iconClock}
                    title={post.title}
                    location={post.location}
                    category={post.category}
                    picture={post.picture}
                    description={post.description}
                    date={post.date}
                    onDelete={() => handleDelete(post.id)}
                    onEditDone={handleEditDone}
                    id={post.id}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="frame-6">
          <FilterChipsBar allPostsChipProperty1="hover" />
          <CreateNewPost onDoneClick={handleDoneClick} />
        </div>
      </div>
    </div>
  );
};