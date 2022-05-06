import axios from "axios";
import { useEffect, useState } from "react";
import utils from "./utils";

export default function Breeds() {
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/list/all").then(({ data }) => {
      setDogList(utils.transformDogList(data.message));
    });
  }, []);
  const [dogList, setDogList] = useState([]);

  return dogList.length !== 0 ? (
    <div>
      <ol>
        {dogList.map((dogConfig) => {
          // early return
          if (dogConfig.subBreed.length === 0) {
            return <li>{dogConfig.breed}</li>;
          }

          return (
            <li>
              {dogConfig.breed}
              <ol>
                {dogConfig.subBreed.map((subBreed) => {
                  return <li>{subBreed}</li>;
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </div>
  ) : (
    <div>Loading ...</div>
  );
}
