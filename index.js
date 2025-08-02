import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabase = createClient(
  'https://dkixivngylkrisvcocvm.supabase.co',
  'sb_publishable_2umXzmNZxrlmiYeU9hmlcg_AawNApX0'
);

document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector(".hero");
  const typewriterTextElement = document.getElementById("typewriter-text");
  const getStartedButton = document.getElementById("getStartedButton");
  const avatar = document.getElementById("user-avatar");
  const extraBtnContainer = document.getElementById("extra-project-btn-container");
  

  // Typewriter in hero
  const phrases = [
    "Powered by cutting-edge AI.",
    "Making code accessible to everyone.",
    "Your ultimate code understanding companion.",
    "Efficient, accurate, and instant."
  ];
  let phraseIndex = 0, charIndex = 0, isDeleting = false;
  const typingSpeed = 100, deletingSpeed = 50, delayBetweenPhrases = 1500;

  function typeWriterEffect() {
    const currentPhrase = phrases[phraseIndex];
    typewriterTextElement.textContent = isDeleting
      ? currentPhrase.substring(0, charIndex--)
      : currentPhrase.substring(0, ++charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeWriterEffect, delayBetweenPhrases);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeWriterEffect, 500);
    } else {
      setTimeout(typeWriterEffect, isDeleting ? deletingSpeed : typingSpeed);
    }
  }

  if (typewriterTextElement) typeWriterEffect();  
});
