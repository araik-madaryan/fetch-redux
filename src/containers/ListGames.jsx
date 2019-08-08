import React from 'react';

function ListGames(props) {
  const { name } = props;
  return (
    <div className="ListGames">
      <p>{name}</p>
    </div>
  );
}

export default ListGames;
