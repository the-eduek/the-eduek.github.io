import gsap from "gsap";

gsap.config({
	force3D: true,
});

// header animation
const headerElt: NodeListOf<HTMLParagraphElement> = document.querySelectorAll('[data-header]')!;

const headerTween: GSAPTween = gsap.fromTo(headerElt, {
    autoAlpha: 0,
    y: -5
  }, {
    autoAlpha: 1,
    ease: Linear.easeIn,
    duration: 0.25,
    stagger: 0.25,
    y: 0
  }
);

// header underline
const line: HTMLSpanElement = document.querySelector('[data-header-line]')!;

const lineTween: GSAPTween = gsap.to(line, {
  duration: 1.25,
  scaleX: 1,
});

// alphabets animation
const allAlphabets: NodeListOf<HTMLSpanElement> = document.querySelectorAll('[data-alphabet]');

const alphabetsTween: GSAPTween = gsap.fromTo([allAlphabets], {
    autoAlpha: 0,
    y: -20
  }, {
    autoAlpha: 1,
    duration: 0.75,
    ease: Power4.easeOut,
    stagger: 0.0375,
    y: 0,
  }
);

// article animation
const article: HTMLElement = document.querySelector('[data-about]')!;
const aricleContent: NodeListOf<HTMLParagraphElement> = article.querySelectorAll('p')!;

const aricleContentTween = gsap.fromTo(aricleContent, {
    autoAlpha: 0,
    y: 20
  }, {
    autoAlpha: 1,
    duration: 0.35,
    ease: Sine.easeOut,
    scrollTrigger: article,
    stagger: 0.15,
    y: 0
  }
);

// projects animation
const projectTitle: HTMLHeadingElement = document.querySelector('[data-project-title]')!;
const projects: NodeListOf<HTMLLIElement> = document.querySelectorAll('[data-project]');
const projectUnderline: NodeListOf<HTMLSpanElement> = document.querySelectorAll('[data-project-line]');

const projectTitleTween: GSAPTween = gsap.fromTo(projectTitle, {
    autoAlpha: 0,
    y: 20
  },
  {
    autoAlpha: 1,
    duration: 0.125,
    ease: Sine.easeOut,
    y: 0
  }
);

const projectsTween: GSAPTween = gsap.fromTo(projects, {
    autoAlpha: 0,
    y: 20
  }, {
    autoAlpha: 1,
    duration: 0.5,
    ease: Sine.easeOut,
    stagger: 0.15,
    y: 0
  }
);

const projectsUnderlineTween: GSAPTween = gsap.to(projectUnderline, {
  duration: 0.5,
  ease: Sine.easeInOut,
  scaleX: 1,
  stagger: 0.15
});

// projects animation
const contactTitle: HTMLHeadingElement = document.querySelector('[data-contact-title]')!;
const contacts: NodeListOf<HTMLLIElement> = document.querySelectorAll('[data-contact]');

const contactTitleTween: GSAPTween = gsap.fromTo(contactTitle, {
    autoAlpha: 0,
    y: 20
  },
  {
    autoAlpha: 1,
    duration: 0.125,
    ease: Sine.easeOut,
    y: 0
  }
);

const contactsTween: GSAPTween = gsap.to(contacts, {
  ease: Sine.easeOut,
  opacity: 1,
  stagger: 0.125
});

// animation timeline
const animationTl: GSAPTimeline = gsap.timeline({
  delay: 0.25,
  paused: true,
})

animationTl.add(headerTween);
animationTl.add(lineTween);
animationTl.add(alphabetsTween, '-=0.75');
animationTl.add(aricleContentTween, '<75%');
animationTl.add(projectTitleTween);
animationTl.add(projectsTween);
animationTl.add(projectsUnderlineTween, '<');
animationTl.add(contactTitleTween,);
animationTl.add(contactsTween);

export default animationTl;