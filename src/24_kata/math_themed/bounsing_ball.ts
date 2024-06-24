/**
 * 6 kyu Bouncing Balls
 * 
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
Three conditions must be met for a valid experiment:

    Float parameter "h" in meters must be greater than 0
    Float parameter "bounce" must be greater than 0 and less than 1
    Float parameter "window" must be less than h.

If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
Note:

The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
Examples:

- h = 3, bounce = 0.66, window = 1.5, result is 3

- h = 3, bounce = 1, window = 1.5, result is 

(Condition 2) not fulfilled).

  it("Basic tests", function() {
    assert.strictEqual(bouncingBall(3.0, 0.66, 1.5), 3);
    assert.strictEqual(bouncingBall(30.0, 0.66, 1.5), 15);
    assert.strictEqual(bouncingBall(30, 0.75, 1.5), 21);
    assert.strictEqual(bouncingBall(30, 0.4, 10), 3);


 */

export function bouncingBall(h: number, bounce: number, window: number): number {
  let rebounds = -1;
  if (bounce > 0 && bounce < 1 && h > window) {
    while (h > window) {
      rebounds += 2;
      h *= bounce;
    }
  }
  return rebounds;
}

console.log(bouncingBall(30, 0.4, 10), '3');
console.log(bouncingBall(30.0, 0.66, 1.5), '15');
