import React , {useState} from "react";
import {useMutation, gql} from "@apollo/client"
import { useNavigate } from "react-router-dom";

const CREATE_ALBUM_COVER = gql`
    mutation PostMutation(
        $Artist: String!
        $albumName: String!  
    ){
    createAlbumCover(Artist: $Artist, albumName: $albumName){
         id
         Artist
         albumName
        }
    }
`;

const CreateAlbumCovers = () => {
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        Artist: '',
        albumName: ''

    });

    const [createAlbumCover] = useMutation(CREATE_ALBUM_COVER, {
        variables: {
            Artist: formState.Artist,
            albumName: formState.albumName,
        },
        onCompleted: () => navigate('/')

    });

    return (
        <div>
            <form 
            onSubmit={(e)=>{
                e.preventDefault();
                createAlbumCover();
            }}
         >   
            <div className="flex flex-column mdt3">
                <input className="mb2" 
                values={formState.Artist}
                onChange={(e)=>
                    setFormState({...formState, 
                        Artist: e.target.value
                    })
                }
                type="text"
                placeholder="Artist"
                />
                <input className="mb2"
                    values={formState.albumName}
                    onChange={(e)=>
                        setFormState({
                            ...formState, 
                            albumName: e.target.value
                        })
                    }
                    type="text"
                    placeholder="album Name"
                />

            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};

export default CreateAlbumCovers;
