function updateContent(translations) {
  translations.forEach(translation => {
    document.getElementById(translation).innerHTML = i18next.t(translation)
  });
}

function changeLng(lng) {
  i18next.changeLanguage(lng);
}

i18next.on('languageChanged', () => {
  updateContent(["intro_title",
    "intro_text",
    "learn_more",
    "early_access",
    "features_title",
    "feature_1_title",
    "feature_1_text",
    "feature_2_title",
    "feature_2_text",
    "feature_3_title",
    "feature_3_text",
    "feature_4_title",
    "feature_4_text",
    "feature_5_title",
    "feature_5_text",
    "feature_6_title",
    "feature_6_text",
    "meet",
    "meet_text",
    "cta_title",
    "cta_text",
    "sign_up",
    "footer_copyright"
  ]);
});

i18next.init({
    lng: "en",
    resources: {
      en: {
        translation: {
          "intro_title": "Marketplace for the 21st century",
          "intro_text": "We are the newest, friendliest and easiest to use local market app, currently in development. Sign up to receive early access.",
          "learn_more": "Learn more",
          "early_access": "Early access",
          "features_title": "Exciting features",
          "feature_1_title": "Starter kit for going online",
          "feature_1_text": "Takes 1 minute to sign up..",
          "feature_2_title": "Handling of paperwork",
          "feature_2_text": "We handle all the paperwork so you don't have to, including privacy policy and terms of use.",
          "feature_3_title": "Add listings and manage stock",
          "feature_3_text": "Easily add listings in the app with your phone's camera",
          "feature_4_title": "Attract new customers",
          "feature_4_text": "Visitors can browse all the listings .. ",
          "feature_5_title": "In-app payments",
          "feature_5_text": "We handle the payment processors so visitors can purchase directly in app ...",
          "feature_6_title": "Help for local businesses",
          "feature_6_text": "Buy from vendors nearest to you ...",
          "meet": "Meet",
          "meet_text": "Learn more about our app in the video .... ",
          "cta_title": "Sign up for early access",
          "cta_text": "Sign up for our mailing list and receive access to the app.",
          "sign_up": "Sign up",
          "footer_copyright": "&copy; 2020 pard"
        }
      },
      lv: {
        translation: {
          "intro_title": "Marketplace for the 21st century",
          "intro_text": "We are the newest, friendliest and easiest to use local market app, currently in development. Sign up to receive early access.",
          "learn_more": "Learn more",
          "early_access": "Early access",
          "features_title": "Exciting features",
          "feature_1_title": "Starter kit for going online",
          "feature_1_text": "Takes 1 minute to sign up..",
          "feature_2_title": "Handling of paperwork",
          "feature_2_text": "We handle all the paperwork so you don't have to, including privacy policy and terms of use.",
          "feature_3_title": "Add listings and manage stock",
          "feature_3_text": "Easily add listings in the app with your phone's camera",
          "feature_4_title": "Attract new customers",
          "feature_4_text": "Visitors can browse all the listings .. ",
          "feature_5_title": "In-app payments",
          "feature_5_text": "We handle the payment processors so visitors can purchase directly in app ...",
          "feature_6_title": "Help for local businesses",
          "feature_6_text": "Buy from vendors nearest to you ...",
          "meet": "Meet",
          "meet_text": "Learn more about our app in the video .... ",
          "cta_title": "Sign up for early access",
          "cta_text": "Enter your e-mail to sign up for our mailing list and receive access to the app.",
          "sign_up": "Sign up",
          "footer_copyright": "&copy; 2020 pard"
        }
      },
      lt: {
        translation: {
          "intro_title": "Marketplace for the 21st century",
          "intro_text": "We are the newest, friendliest and easiest to use local market app, currently in development. Sign up to receive early access.",
          "learn_more": "Learn more",
          "early_access": "Early access",
          "features_title": "Exciting features",
          "feature_1_title": "Starter kit for going online",
          "feature_1_text": "Takes 1 minute to sign up..",
          "feature_2_title": "Handling of paperwork",
          "feature_2_text": "We handle all the paperwork so you don't have to, including privacy policy and terms of use.",
          "feature_3_title": "Add listings and manage stock",
          "feature_3_text": "Easily add listings in the app with your phone's camera",
          "feature_4_title": "Attract new customers",
          "feature_4_text": "Visitors can browse all the listings .. ",
          "feature_5_title": "In-app payments",
          "feature_5_text": "We handle the payment processors so visitors can purchase directly in app ...",
          "feature_6_title": "Help for local businesses",
          "feature_6_text": "Buy from vendors nearest to you ...",
          "meet": "Meet",
          "meet_text": "Learn more about our app in the video .... ",
          "cta_title": "Sign up for early access",
          "cta_text": "Enter your e-mail to sign up for our mailing list and receive access to the app.",
          "sign_up": "Sign up",
          "footer_copyright": "&copy; 2020 pard"
        }
      }
    }
  },
  function (err, t) {
    // initialized and ready to go!
    updateContent(["intro_title",
      "intro_text",
      "learn_more",
      "early_access",
      "features_title",
      "feature_1_title",
      "feature_1_text",
      "feature_2_title",
      "feature_2_text",
      "feature_3_title",
      "feature_3_text",
      "feature_4_title",
      "feature_4_text",
      "feature_5_title",
      "feature_5_text",
      "feature_6_title",
      "feature_6_text",
      "meet",
      "meet_text",
      "cta_title",
      "cta_text",
      "sign_up",
      "footer_copyright"
    ]);
  }
);

(function () {
  const win = window;
  const doc = document.documentElement;

  doc.classList.remove("no-js");
  doc.classList.add("js");

  // Reveal animations
  if (document.body.classList.contains("has-animations")) {
    /* global ScrollReveal */
    const sr = (window.sr = ScrollReveal());

    sr.reveal(".feature", {
      duration: 600,
      distance: "20px",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      origin: "right",
      interval: 100
    });

    sr.reveal(".media-canvas", {
      duration: 600,
      scale: ".95",
      easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
      viewFactor: 0.5
    });
  }

  // Wait that device mockup has loaded before displaying
  const deviceMockup = document.querySelector(".device-mockup");

  function deviceMockupLoaded() {
    deviceMockup.classList.add("has-loaded");
  }

  if (deviceMockup.complete) {
    deviceMockupLoaded();
  } else {
    deviceMockup.addEventListener("load", deviceMockupLoaded);
  }

  // Features title adjustment
  const featuresSection = document.querySelector(".features");
  const featuresTitle = featuresSection.querySelector(".section-title");
  const firstFeature = document.querySelector(".feature-inner");

  featuresTitlePos();
  win.addEventListener("resize", featuresTitlePos);

  function featuresTitlePos() {
    let featuresSectionLeft = featuresSection
      .querySelector(".features-inner")
      .getBoundingClientRect().left;
    let firstFeatureLeft = firstFeature.getBoundingClientRect().left;
    let featuresTitleOffset = parseInt(firstFeatureLeft - featuresSectionLeft);
    if (firstFeatureLeft > featuresSectionLeft) {
      featuresTitle.style.marginLeft = `${featuresTitleOffset}px`;
    } else {
      featuresTitle.style.marginLeft = 0;
    }
  }

  // Moving objects
  const movingObjects = document.querySelectorAll(".is-moving-object");

  // Throttling
  function throttle(func, milliseconds) {
    let lastEventTimestamp = null;
    let limit = milliseconds;

    return (...args) => {
      let now = Date.now();

      if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
        lastEventTimestamp = now;
        func.apply(this, args);
      }
    };
  }

  // Init vars
  let mouseX = 0;
  let mouseY = 0;
  let scrollY = 0;
  let coordinateX = 0;
  let coordinateY = 0;
  let winW = doc.clientWidth;
  let winH = doc.clientHeight;

  // Move Objects
  function moveObjects(e, object) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    scrollY = win.scrollY;
    coordinateX = winW / 2 - mouseX;
    coordinateY = winH / 2 - (mouseY - scrollY);

    for (let i = 0; i < object.length; i++) {
      const translatingFactor =
        object[i].getAttribute("data-translating-factor") || 20;
      const rotatingFactor =
        object[i].getAttribute("data-rotating-factor") || 20;
      const perspective = object[i].getAttribute("data-perspective") || 500;
      let tranformProperty = [];

      if (object[i].classList.contains("is-translating")) {
        tranformProperty.push(
          "translate(" +
          coordinateX / translatingFactor +
          "px, " +
          coordinateY / translatingFactor +
          "px)"
        );
      }

      if (object[i].classList.contains("is-rotating")) {
        tranformProperty.push(
          "perspective(" +
          perspective +
          "px) rotateY(" +
          -coordinateX / rotatingFactor +
          "deg) rotateX(" +
          coordinateY / rotatingFactor +
          "deg)"
        );
      }

      if (
        object[i].classList.contains("is-translating") ||
        object[i].classList.contains("is-rotating")
      ) {
        tranformProperty = tranformProperty.join(" ");

        object[i].style.transform = tranformProperty;
        object[i].style.transition = "transform 1s ease-out";
        object[i].style.transformStyle = "preserve-3d";
        object[i].style.backfaceVisibility = "hidden";
      }
    }
  }

  // Call function with throttling
  if (movingObjects) {
    win.addEventListener(
      "mousemove",
      throttle(function (e) {
        moveObjects(e, movingObjects);
      }, 150)
    );
  }
})();
