export default class AnimationClock {
  // Zero to one number representing percentage of animation
  animationState: number = 0;

  isAnimating = false;

  // Is animatino being played in reverse
  reverse = false;

  // Previous frame time
  t1 = 0;

  animate(t: number) {
    const delta = t - this.t1;
    this.t1 = t;
    const newState = this.reverse ? this.animationState - delta : this.animationState + delta;
    if (newState > 1) { this.setAnimationState(newState); }
  }

  setAnimationState(animationState: number) {
    this.animationState = Math.min(Math.max(animationState, 0), 1);
  }

  setAnimationFunction(animate: (t: number) => number) {
    this.animate = (t) => {
      this.setAnimationState(animate(t));
    };
  }
}
