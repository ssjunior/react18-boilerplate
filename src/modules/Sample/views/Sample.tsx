import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Busy, Card, crud, Flex, Image, Spinner } from "tomato";

import { animated } from "tomato/css/app.css";

export const Edit = () => {
  return <div>Edit</div>;
};

const Sprites = () => {
  const obj = useSelector((state) => state["sample"]).obj;

  if (!obj) return null; // <Spinner />;

  return (
    <>
      <Busy />
      {obj &&
        Object.values(obj.sprites.versions["generation-i"]["red-blue"]).map(
          (sprite, index) => (
            <Card mt="1" key={index}>
              <Flex style={{ height: "fit-content", alignItems: "center" }}>
                <Image
                  className={animated}
                  src={sprite}
                  style={{ maxWidth: "80px", width: "80px", mr: 3 }}
                />
                <div>Name</div>
              </Flex>
            </Card>
          )
        )}
    </>
  );
};

export const List = () => {
  const loader = ({ response }) => {
    return response;
  };

  useEffect(
    () =>
      crud.getOne({
        slice: "sample",
        includeCredentials: false,
        url: "https://pokeapi.co/api/v2/pokemon",
        id: "bulbasaur",
        loader,
      }),
    []
  );

  return <Sprites />;
};
