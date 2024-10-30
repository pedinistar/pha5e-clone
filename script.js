document.addEventListener("DOMContentLoaded", function () {
  var t1 = gsap.timeline();
  t1.to("#fs h1", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  })
    .to("#fs h1", {
      onStart: () => document.querySelector("#fs h1").classList.add("fill"),
      duration: 0.5,
      ease: "power2.out",
    })
    .to({}, { duration: 0.3 })
    .to("#fs h1", {
      opacity: 0,
      y: -30,
      duration: 0.8,
      ease: "power2.in",
    });
  t1.to(
    "#fs",
    {
      height: 0,
      duration: 1.2,
      ease: "expo.inOut",
    },
    "-=0.3"
  );
  t1.set("#fs, #elem", { display: "none" });
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker("h1", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    debugger: true,
  });

  Shery.makeMagnet(".image", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
});
