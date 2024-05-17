import React from "react";
import { AUTH_TOKEN } from "../constants";
import { timeDifferenceForDate } from '../utils';
import { useMutation, gql } from '@apollo/client';
import '../styles/links.css';

const VOTE_MUTATION = gql`
    mutation VoteMutation($albumCoverId: Int!) {
        createVote(AlbumCoverId: $albumCoverId) {
            user{            
            id
            username
            }
            albumCover{
                id
                coverUrl
            }
        }
    }
`;

const AlbumCover = ( props ) => {

    const {albumCover} = props;
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const [ vote ] = useMutation(VOTE_MUTATION, {
        variables: {
            albumCoverId: albumCover.id
        }
    });

    return (
        <div className="flex mt2 items-start">
            <div className="flex items-center">
                <span className="gray">{props.index + 1}.</span>
                {authToken && (
                    <div
                        className="ml1 gray f11"
                        style={{ cursor: 'pointer' }}
                        onClick={vote}
                        >
                        like
                    </div>

                )}
            </div>
            <div className="ml1">
                <div>
                    {albumCover.Artist} - {albumCover.albumName}
                    <img src={albumCover.coverUrl} className="cover-url"></img>
                </div>
                {(
                    <div className="f6 lh-copy gray">
                    {albumCover.votes.length} votes | by{''}
                    {albumCover.postedBy ? albumCover.postedBy.name : 'Unknown'}{' '}
                    {timeDifferenceForDate(albumCover.created_at)}

                    </div>
                )}
             </div>
            </div>
    );
};
export default AlbumCover;
