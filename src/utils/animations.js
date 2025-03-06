import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

/**
 * Animates a target element using GSAP with optional scroll-based properties.
 *
 * @param {string|Element} target - The target element to animate.
 * @param {Object} animationProps - The GSAP animation properties.
 * @param {Object} [scrollProps] - Optional ScrollTrigger properties for triggering animations on scroll.
 */
export const animateWithGsap = (target, animationProps, scrollProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};

/**
 * Animates elements using a GSAP timeline, rotating an object and applying animations to multiple targets.
 *
 * @param {gsap.core.Timeline} timeline - GSAP timeline instance for sequencing animations.
 * @param {React.MutableRefObject} rotationRef - Reference to the rotating object.
 * @param {number} rotationState - The rotation angle for the object.
 * @param {string|Element} firstTarget - The first target element for animation.
 * @param {string|Element} secondTarget - The second target element for animation.
 * @param {Object} animationProps - The GSAP animation properties.
 */
export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: " power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: " power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: " power2.inOut",
    },
    "<"
  );
};
