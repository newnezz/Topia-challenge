export default function listUsersInView(
  users,
  positionX,
  positionY,
  screenWidth,
  screenHeight,
) {
  const usersInView = [];

  // WRITE SOLUTION BELOW. ADD USERNAME AND IS_BROADCASTER TO 'usersInView' IF USER FALLS INTO VISIBLE RANGE

  let viewportLeft = positionX - screenWidth / 2;
  let viewportRight = Number(positionX + screenWidth / 2);
  let viewportTop = positionY - screenHeight / 2;
  let viewportBottom = Number(positionY + screenHeight / 2);

  Object.values(users).forEach((user) => {
    // Calculate user's bounds based on their center point and dimensions
    let userLeft = user.x - 50 / 2;
    let userRight = user.x + 50 / 2;
    let userTop = user.y - 125 / 2;
    let userBottom = user.y + 125 / 2;

    // Check if user overlaps with viewport in both x and y dimensions
    if (
      userRight >= viewportLeft &&
      userLeft <= viewportRight &&
      userBottom >= viewportTop &&
      userTop <= viewportBottom
    ) {
      // Calculate distance from center, add to usersInView
      let distance = calculateDistance(user.x, user.y, positionX, positionY);
      usersInView.push({ user, distance });
    }
  });

  // Sort usersInView by distance
  usersInView.sort((a, b) => a.distance - b.distance);

  // END SOLUTION SECTION

  return usersInView;
}

function calculateDistance(x1, y1, x2, y2) {
  // Calculate the difference between the x coordinates and the y coordinates
  let xDifference = x2 - x1;
  let yDifference = y2 - y1;

  // Apply the Pythagorean theorem to get the distance
  let distance = Math.sqrt(
    xDifference * xDifference + yDifference * yDifference,
  );

  return distance;
}
