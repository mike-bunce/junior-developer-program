import React, {useEffect, useState} from "react";

const Child = ({name, eyeColour, middleName, hairColour, cute, gender, isMyBaby, babyName}) => {
  const [capitalizedName, setCapitalizedName] = useState();
  const [capitalizedMiddleName, setCapitalizedMiddleName] = useState();
  const [capitalizedWrongName, setCapitalizedWrongName] = useState();

  const capitalizeFirstLetter = (originalWord) => {
    return originalWord.replace(/^\w/, c => c.toUpperCase())
  }

  useEffect(() => {
    setCapitalizedName(capitalizeFirstLetter(name)) 
    setCapitalizedMiddleName(capitalizeFirstLetter(middleName)) 
    setCapitalizedWrongName(capitalizeFirstLetter(babyName)) 
  }, [name, middleName, babyName])
  return (
    <div>
      {isMyBaby &&
        (<div>
          <img src="./Alfie.jpeg" alt="" className="my-baby border-image" />
          <p>Yes, {capitalizedName} is my baby</p>
          <p>{capitalizedName}'s middle name is {capitalizedMiddleName}</p>
          <p>{gender === 'boy' ? 'He' : 'She'} has {eyeColour} eyes and {hairColour} hair,</p>
        {cute && (<p>and is a super cute little {gender}</p>)}
        </div>)
      }
      {!isMyBaby && babyName !== name && babyName !== middleName &&
        <div>
          <img src="./gremlin.jpeg" className="not-my-baby border-image" alt="" />
          <p>That's not my baby! My baby is not called {capitalizedWrongName}</p>
        </div>
      }
    </div>
  );
};

export default Child;
