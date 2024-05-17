import React from "react";
import AlbumCover from "./albumCover";
import { gql, useQuery } from "@apollo/client";

const FEED_QUERY = gql`
   query{
  albumCovers{
    id
    Artist
    albumName
    coverUrl
    	postedBy{
        username
      }
        votes{
         id
        }
    }   
    } 
`;

const AlbumCoverList = () => {

    const {  data } = useQuery(FEED_QUERY);

    return (
        <div>

        {data && (
             <>
                {data.albumCovers.map((albumCover, index) => (
                    <AlbumCover key = {albumCover.id} albumCover={albumCover} index = {index} />
                ))}
                </>
        )}
        </div>
    );

};

export default AlbumCoverList;
 