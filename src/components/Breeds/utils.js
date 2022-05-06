function transformDogList(dogObject) {
  const transformedList = Object.entries(dogObject).map(
    ([breed, subBreed]) => ({
      breed: breed,
      subBreed: subBreed
    })
  );
  return transformedList;
}

const utilities = {
  transformDogList
};

export default utilities;
