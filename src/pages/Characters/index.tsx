import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCharacters } from '../../store/slices/characters';

const Characters: React.FC = () => {
  const dispatch = useAppDispatch();
  const characters = useAppSelector(
    (state) => state.characters.characters.data
  );

  useEffect(() => {
    dispatch(fetchCharacters());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="test">
      <h1>Heroes List</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Characters;
