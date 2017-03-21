import leap from 'leapjs';

// leap.loop(() => {});

leap.loop(({hands}) => {
  const fingers = hands.map((elem) => elem.indexFinger.positions[0]);

  console.log(fingers);
});
