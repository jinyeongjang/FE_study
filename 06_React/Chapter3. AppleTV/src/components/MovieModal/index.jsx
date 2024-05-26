/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { imageBasePath } from '../../constant';
import './MovieModal.css';
import useOnClickOutside from '../../hooks/useOnClickOutsite';

const MovieModal = ({ backdrop_path, title, overview, name, release_date, first_air_date, vote_average, setModalOpen }) => {
    const ref = useRef(null);

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    });

    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal" ref={ref}>
                    <span onClick={() => setModalOpen(false)} className="modal-close">
                        X
                    </span>

                    <img className="modal__poster-img" src={`${imageBasePath}${backdrop_path}`} alt="modal_poster-img" />

                    <div className="modal__content">
                        <p className="modal__details">
                            <span>100% for you</span> {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modal__title">{title ? title : name}</h2>
                        <p className="modal__overview">평점: {vote_average}</p>
                        <p className="modal__overview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieModal;
