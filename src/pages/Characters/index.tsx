import React, { useEffect, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCharacters } from '../../store/slices/characters';
import { Link } from 'react-router-dom';

const limit = 20;
const offset = 0;

// TODO: add pagination
// TODO: handle limit and offset on dispatch
const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: characters } = useAppSelector((state) => state.characters);

  const dispatchFetchCharacters = useCallback(() => {
    dispatch(fetchCharacters({ limit, offset }));
  }, [dispatch]);

  useEffect(() => {
    dispatchFetchCharacters();
  }, [dispatchFetchCharacters]);

  return (
    <div className="test">
      <h1>Heroes List</h1>
      {characters.map((character) => (
        <Link key={character.id} to={`/characters/${character.id}`}>
          <div>{character.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Characters;
