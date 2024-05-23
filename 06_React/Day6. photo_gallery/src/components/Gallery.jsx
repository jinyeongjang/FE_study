import { useState } from 'react';
import styled from "styled-components";


function Gallery() {
    const [search, setSearch] = useState('');
    const [photos, setPhotos] = useState([]);

    const fetchPhotos = async (query) => {
        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
        const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();
           
            setPhotos(data.results);
           
        } catch (error) {
            console.error('Error fetching photos:', error);
            setPhotos([]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search) fetchPhotos(search);
    };

    return (
        <GalleryWarp>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search for images..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">검색</button>
            </form>
            <PhotoGrid>
                {photos.map(photo => (
                    <Photo key={photo.id} >
                        <img src={photo.urls.small} alt={photo.alt_description} />
                    </Photo>
                ))}
            </PhotoGrid>
        </GalleryWarp>
    );
}

export default Gallery;

const PhotoGrid = styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
    padding: 10px;
`

const Photo = styled.div`
img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
`

const GalleryWarp = styled.div`
input{
    height: 27px;
    margin: 0 5px;
}    
`
