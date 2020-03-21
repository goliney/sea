import TWEEN from "@tweenjs/tween.js";

const loader = document.body.querySelector(".loader");
const canvas = document.body.querySelector(".canvas");

window.addEventListener(
  "load",
  () => {
    loader.classList.add("hidden");
    canvas.classList.remove("hidden");
  },
  false
);

const layer_list = [
  {
    image: document.body.querySelector(".background"),
    x_index: 0,
    y_index: 0,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".seagull-1"),
    x_index: -0.4,
    y_index: -0.2,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".seagull-2"),
    x_index: -0.4,
    y_index: -0.15,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".seagull-3"),
    x_index: -0.4,
    y_index: -0.15,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".seagull-4"),
    x_index: -0.3,
    y_index: -0.1,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".seagull-5"),
    x_index: -0.3,
    y_index: -0.1,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 0 }
  },
  {
    image: document.body.querySelector(".guy"),
    x_index: -0.5,
    y_index: -0.25,
    position: { x: 0, y: 0 },
    base_offset: { x: 0, y: 20 }
  }
];

const touch_multiplier = 0.3;
const motion_multiplier = 1.5;

// This is optional, but prevents things from moving too far (because these are 2d images it can look broken)
const max_offset = 23;

// Initialize variables for touch and mouse-based parallax

// This is a variable we're using to only move things when you're touching the screen, or holding the mouse button down.
let moving = false;

// Initialize touch and mouse position
const pointer_initial = {
  x: 0,
  y: 0
};
const pointer = {
  x: 0,
  y: 0
};

// Initialize variables for motion-based parallax
const motion_initial = {
  x: null,
  y: null
};
const motion = {
  x: 0,
  y: 0
};

requestAnimationFrame(drawCanvas);

// Draw layers in Canvas
function drawCanvas() {
  // This is needed for the animation to snap back to center when you release mouse or touch
  TWEEN.update();

  // Calculate how much the canvas should be rotated
  const rotate_x = pointer.y * -0.15 + motion.y * -1.2;
  const rotate_y = pointer.x * 0.15 + motion.x * 1.2;

  // Actually rotate the canvas
  canvas.style.transform =
    "rotateX(" + rotate_x + "deg) rotateY(" + rotate_y + "deg)";

  // // Loop through each layer in the list and draw it to the canvas
  layer_list.forEach(function(layer, index) {
    // Calculate what the position of the layer should be (getOffset function is below)
    layer.position = getOffset(layer);

    // Draw the layer into the canvas context
    layer.image.style.transform = `translateX(${layer.position.x}px) translateY(${layer.position.y}px)`;
  });

  // Loop this function! requestAnimationFrame is a special built in function that can draw to the canvas at 60 frames per second
  // NOTE: do not call drawCanvas() without using requestAnimationFrame here—things will crash!
  requestAnimationFrame(drawCanvas);
}

// Function to calculate layer offset
function getOffset(layer) {
  // Calculate the amount you want the layers to move based on touch or mouse input.
  // You can play with the touch_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.
  const touch_offset_x = pointer.x * layer.x_index * touch_multiplier;
  const touch_offset_y = pointer.y * layer.y_index * touch_multiplier;

  // Calculate the amount you want the layers to move based on the gyroscope
  // You can play with the motion_multiplier variable here. Depending on the size of your canvas you may want to turn it up or down.

  const motion_offset_x = motion.x * layer.x_index * motion_multiplier;
  const motion_offset_y = motion.y * layer.y_index * motion_multiplier;

  // Calculate the total offset for both X and Y
  // Total offset is a combination of touch and motion
  const offset = {
    x: layer.base_offset.x + touch_offset_x + motion_offset_x,
    y: layer.base_offset.y + touch_offset_y + motion_offset_y
  };

  // Return the calculated offset to whatever requested it.
  return offset;
}

//// TOUCH AND MOUSE CONTROLS ////

// This one listens for when you start touching the canvas element
window.addEventListener("touchstart", pointerStart);
// This one listens for when you start clicking on the canvas (when you press the mouse button down)
window.addEventListener("mousedown", pointerStart);

// Runs when touch or mouse click starts
function pointerStart(event) {
  // Ok, you touched the screen or clicked, now things can move until you stop doing that
  moving = true;
  // Check if this is a touch event
  if (event.type === "touchstart") {
    // set initial touch position to the coordinates where you first touched the screen
    pointer_initial.x = event.touches[0].clientX;
    pointer_initial.y = event.touches[0].clientY;
    // Check if this is a mouse click event
  } else if (event.type === "mousedown") {
    // set initial mouse position to the coordinates where you first clicked
    pointer_initial.x = event.clientX;
    pointer_initial.y = event.clientY;
  }
}

// This runs whenever your finger moves anywhere in the browser window
window.addEventListener("mousemove", pointerMove);
// This runs whenever your mouse moves anywhere in the browser window
window.addEventListener("touchmove", pointerMove);

// Runs when touch or mouse is moved
function pointerMove(event) {
  // This is important to prevent scrolling the page instead of moving layers around
  event.preventDefault();
  // Only run this if touch or mouse click has started
  if (moving === true) {
    let current_x = 0;
    let current_y = 0;
    // Check if this is a touch event
    if (event.type === "touchmove") {
      // Current position of touch
      current_x = event.touches[0].clientX;
      current_y = event.touches[0].clientY;
      // Check if this is a mouse event
    } else if (event.type === "mousemove") {
      // Current position of mouse cursor
      current_x = event.clientX;
      current_y = event.clientY;
    }
    // Set pointer position to the difference between current position and initial position
    pointer.x = current_x - pointer_initial.x;
    pointer.y = current_y - pointer_initial.y;
  }
}

// Listen for when you stop touching the screen
window.addEventListener("touchend", function(event) {
  // Run the endGesture function (below)
  endGesture();
});
// Listen for when you release the mouse button anywhere on the screen
window.addEventListener("mouseup", function(event) {
  // Run the endGesture function (below)
  endGesture();
});

function endGesture() {
  // You aren't touching or clicking anymore, so set this back to false
  moving = false;

  // This removes any in progress tweens
  TWEEN.removeAll();
  // This starts the animation to reset the position of all layers when you stop moving them
  new TWEEN.Tween(pointer)
    .to({ x: 0, y: 0 }, 300)
    .easing(TWEEN.Easing.Back.Out)
    .start();
}

//// MOTION CONTROLS ////

// This is where we listen to the gyroscope position
window.addEventListener("deviceorientation", function(event) {
  // If this is the first run through here, set the initial position of the gyroscope
  if (!motion_initial.x && !motion_initial.y) {
    motion_initial.x = event.beta;
    motion_initial.y = event.gamma;
  }

  // Depending on what orientation the device is in, you need to adjust what each gyroscope axis means
  // This can be a bit tricky
  if (window.orientation === 0) {
    // The device is right-side up in portrait orientation
    motion.x = event.gamma - motion_initial.y;
    motion.y = event.beta - motion_initial.x;
  } else if (window.orientation === 90) {
    // The device is in landscape laying on its left side
    motion.x = event.beta - motion_initial.x;
    motion.y = -event.gamma + motion_initial.y;
  } else if (window.orientation === -90) {
    // The device is in landscape laying on its right side
    motion.x = -event.beta + motion_initial.x;
    motion.y = event.gamma - motion_initial.y;
  } else {
    // The device is upside-down in portrait orientation
    motion.x = -event.gamma + motion_initial.y;
    motion.y = -event.beta + motion_initial.x;
  }

  // Check if magnitude of motion offset along X axis is greater than your max setting
  if (Math.abs(motion.x) > max_offset) {
    // Check whether offset is positive or negative, and make sure to keep it that way
    if (motion.x < 0) {
      motion.x = -max_offset;
    } else {
      motion.x = max_offset;
    }
  }
  // Check if magnitude of motion offset along Y axis is greater than your max setting
  if (Math.abs(motion.y) > max_offset) {
    // Check whether offset is positive or negative, and make sure to keep it that way
    if (motion.y < 0) {
      motion.y = -max_offset;
    } else {
      motion.y = max_offset;
    }
  }
});

// Reset the position of motion controls when device changes between portrait and landscape, etc.
window.addEventListener("orientationchange", function(event) {
  motion_initial.x = 0;
  motion_initial.y = 0;
});

window.addEventListener("touchend", function() {
  enableMotion();
});

function enableMotion() {
  if (
    window.DeviceOrientationEvent &&
    DeviceOrientationEvent.requestPermission
  ) {
    DeviceOrientationEvent.requestPermission();
  }
}
