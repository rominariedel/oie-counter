import React from "react";

const OieCounter = ({ matrix }) => {
  const word = "OIE";

  const oiesCount = () => {
    let count = 0;
    const characters = word.split("");

    matrix.forEach((row, rowIndex) => {
      row.forEach((letter, letterIndex) => {
        positionTransformers.forEach(func => {
          count += scan(
            func,
            Object.assign([], characters),
            matrix,
            rowIndex,
            letterIndex
          );
        });
      });
    });

    return count;
  };

  const scan = (transformer, charArr, matrix, x, y) => {
    if (charArr.length === 0) {
      return 1;
    }

    if (matrix[x] && matrix[x][y] === charArr[0]) {
      const [nextX, nextY] = transformer(x, y);
      return scan(transformer, charArr.slice(1), matrix, nextX, nextY);
    }

    return 0;
  };

  const positionTransformers = [
    (x, y) => [x, y + 1],
    (x, y) => [x, y - 1],
    (x, y) => [x - 1, y],
    (x, y) => [x + 1, y],
    (x, y) => [x - 1, y - 1],
    (x, y) => [x - 1, y + 1],
    (x, y) => [x + 1, y - 1],
    (x, y) => [x + 1, y + 1]
  ];

  return <div>{oiesCount()} Oies found!</div>;
};

export default OieCounter;
