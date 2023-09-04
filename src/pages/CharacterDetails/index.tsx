/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useCallback } from 'react';
import { fetchComicsByCharacterId } from '../../store/slices/characters';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useParams } from 'react-router-dom';

const CharacterDetails: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { loading, data: characters } = useAppSelector(
    (state) => state.characters
  );

  const dispatchFetchCharacters = useCallback(() => {
    dispatch(fetchComicsByCharacterId(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    // TODO: verify if characters is empty and fetch characters by id
    // (fot hose cases when user access the page directly by url)
    // console.log('characters', characters);
    // if (!characters.length) {
    //   console.log('');
    // }
    dispatchFetchCharacters();
  }, [dispatchFetchCharacters]);

  const selectedCharacter = characters.find(
    (character) => character.id === Number(id)
  );
  const { comics } = selectedCharacter;

  return loading ? (
    <div className="test">loading</div>
  ) : (
    <div>
      <h1>Hello Character details</h1>
      {comics.map((item: any) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterDetails;
