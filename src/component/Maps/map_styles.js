//Varun Gopalakrishnan, B00823111
const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially the map object defaults to left top corner as coordinates.
  // set object origin to 0,0 coordinates.
  position: "absolute",
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: "5px solid #f44336",
  borderRadius: K_HEIGHT,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 16,
  fontWeight: "bold",
  padding: 4
};

export { greatPlaceStyle };
