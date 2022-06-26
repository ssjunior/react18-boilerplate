import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Card, crud, Flex, Image, Spinner } from "tomato";

const Sprites = () => {
  const obj = useSelector((state) => state["sample"]).obj;

  if (!obj) return <Spinner />;

  return (
    <>
      {obj &&
        Object.values(obj.sprites.versions["generation-i"]["red-blue"]).map(
          (sprite, index) => (
            <Card key={index}>
              <Flex sx={{ alignItems: "center" }}>
                <Image
                  src={sprite}
                  sx={{
                    // maxWidth: "80px",
                    // width: "80px",
                    minHeight: "5rem",
                    mr: 3,
                  }}
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
  const loader = ({ response, state }) => {
    state.obj = response;
    return state;
  };

  useEffect(
    () =>
      crud.get({
        includeCredentials: false,
        slice: "sample",
        url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
        id: "bulbasaur",
        loader,
      }),
    []
  );

  return <Sprites />;
};
