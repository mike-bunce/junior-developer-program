import React, {useEffect, useState} from "react";

const Band = ({genre, favouriteAlbum, country, cool, name, studioAlbums, leadSinger, isMyFavouriteBand, bandName}) => {
  const [capitalizedName, setCapitalizedName] = useState();
  const [capitalizedWrongName, setCapitalizedWrongName] = useState();

  const capitalizeFirstLetter = (originalWord) => {
    return originalWord.replace(/^\w/, c => c.toUpperCase())
  }

  useEffect(() => {
    setCapitalizedName(capitalizeFirstLetter(name)) 
    setCapitalizedWrongName(capitalizeFirstLetter(bandName)) 
  }, [name, bandName])
  return (
    <div>
      {isMyFavouriteBand &&
        (<div>
          <img src="./radiohead.jpeg" alt="" className="my-favourite-band border-image" />
          <p>Yes, {capitalizedName} is my favourite band</p>
          <p>Could it be that {capitalizedName} are from {country} and that's why I like them so much?</p>
          <p>Or is it just that they are that good!</p>
          <p>Not to mention {leadSinger}'s amazing vocals</p>
          <p>They've had {studioAlbums} albums, with so many good songs. They've experimented radically,
          and changed their sound. They also have many good b-sides and lesser known tracks.</p>
          <p>Their sound is so diverse, its hard to categorize it, some call it {genre}, others Electronica, but it could also be rock</p>
          <p>{favouriteAlbum} is my favourite album of theirs (but I like them all).</p>
        {cool && (<p>Even when they're not cool, they're still cool</p>)}
        </div>)
      }
      {!isMyFavouriteBand && capitalizedWrongName === 'Journey' &&
        <div>
          <img src="./journey.jpg" className="not-my-favourite-band border-image" alt="" />
          <p>Ewww. No way. {capitalizedWrongName} are definitely not my favourite band.</p>
        </div>
      }
      {!isMyFavouriteBand && bandName !== name && capitalizedWrongName !== 'Journey' &&
        <div>
          <img src="./thumbs-down.png" className="not-my-favourite-band border-image" alt="" />
          <p>{capitalizedWrongName} are not my favourite band! Keep guessing!</p>
        </div>
      }
    </div>
  );
};

export default Band;
