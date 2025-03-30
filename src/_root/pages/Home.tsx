import { Models } from "appwrite";
import { Loader, PostCard } from "@/components/shared";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Link, useParams } from "react-router-dom";
import { multiFormatDateString } from "@/lib/utils";
import { useState } from "react";

const Home = () => {
  const { location } = useParams();
  const {
    data: posts,
    isLoading: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  // Get unique locations from posts
  const locations = posts?.documents
    .reduce((acc: string[], post) => {
      if (post.location && !acc.includes(post.location)) {
        acc.push(post.location);
      }
      return acc;
    }, []) || [];

  if (isErrorPosts) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-[#1A1A1A]">Something bad happened</p>
        </div>
      </div>
    );
  }

  // Filter posts by location if location param exists
  const filteredPosts = location 
    ? posts?.documents.filter(post => post.location === decodeURIComponent(location))
    : posts?.documents;

  // Get the first post as featured post
  const featuredPost = filteredPosts?.[0];
  const secondaryPosts = filteredPosts?.slice(1) || [];

  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <div className="w-full mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mb-4 gap-4">
              <h2 className="h3-bold md:h2-bold text-[#1A1A1A]">Noticias</h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link 
                  to="/" 
                  className={`px-3 sm:px-4 py-2 rounded-xl bg-[#F8F8F8] text-[#1A1A1A] border border-[#E5E5E5] hover:bg-[#F0F0F0] transition-colors duration-200 small-medium md:base-medium ${!location ? 'bg-[#F0F0F0]' : ''}`}
                >
                  Todas
                </Link>
                {locations.map((loc) => (
                  <Link
                    key={loc}
                    to={`/${loc}`}
                    className={`px-3 sm:px-4 py-2 rounded-xl bg-[#F8F8F8] text-[#1A1A1A] border border-[#E5E5E5] hover:bg-[#F0F0F0] transition-colors duration-200 small-medium md:base-medium ${location === loc ? 'bg-[#F0F0F0]' : ''}`}
                  >
                    {loc}
                  </Link>
                ))}
              </div>
            </div>
            <div className="h-1 w-20 bg-[#BB1919] rounded-full"></div>
          </div>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <div className="flex flex-col gap-8 w-full">
              {/* Featured Post */}
              {featuredPost && (
                <div className="featured-post w-full">
                  <Link to={`/posts/${featuredPost.$id}`} className="block">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
                      <img
                        src={featuredPost.imageUrl || "/assets/icons/profile-placeholder.svg"}
                        alt={featuredPost.caption}
                        className="object-cover w-full h-full"
                      />
                      <div className="bbc-gradient-overlay" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <img
                            src={featuredPost.creator?.imageUrl || "/assets/icons/profile-placeholder.svg"}
                            alt="creator"
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-[#BB1919]"
                          />
                          <span className="text-white text-xs sm:text-sm font-medium">
                            {featuredPost.creator?.name}
                          </span>
                        </div>
                        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-2 line-clamp-2">
                          {featuredPost.caption}
                        </h3>
                        <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                          <span>{multiFormatDateString(featuredPost.$createdAt)}</span>
                          <span>•</span>
                          <span>{featuredPost.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}

              {/* Secondary Posts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
                {secondaryPosts.map((post: Models.Document) => (
                  <div key={post.$id} className="w-full">
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
