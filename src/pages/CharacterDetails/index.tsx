import React, { useEffect, useCallback } from 'react';
import { fetchComicsByCharacterId } from '../../store/slices/characters';
import { useAppDispatch } from '../../store/hooks';
import { useParams } from 'react-router-dom';

const CharacterDetails: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const dispatchFetchCharacters = useCallback(() => {
    dispatch(fetchComicsByCharacterId(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    dispatchFetchCharacters();
  }, [dispatchFetchCharacters]);

  return <div>Hello Character details</div>;
};

export default CharacterDetails;
