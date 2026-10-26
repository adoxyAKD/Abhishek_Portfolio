// Abhishek Kumar - Resume (converted from PDF to JavaScript object)

const resume = {
  name: "Abhishek Kumar",
  title: ["Android Developer", "Flutter Developer"],
  contact: {
    email: "abhishek.kmr.akd@gmail.com",
    phone: "+91 8933854370",
    location: "Gurgaon, India",
    linkedin: "linkedin.com/in/abhishekkumar1205",
    github: "github.com/adoxyAKD",
    portfolio: "abhishekportfolio-psi-black.vercel.app",
  },

  summary: [
    "Android developer with 4.5+ years shipping production apps across social, fintech, ride-hailing, and service booking.",
    "Native Android specialist (Kotlin, Compose, MVVM, Hilt, Coroutines/Flow) who also ships Flutter apps to both stores.",
    "Independently migrated a Kotlin app to Flutter; shipped apps up to 5,000+ downloads; mentored 2 junior developers.",
  ],

  skills: {
    "Languages & CS": ["Kotlin", "Java", "Dart", "Data Structures", "OOP"],
    "Android Development": ["Android SDK", "Jetpack Compose", "XML/ViewBinding", "Navigation", "Paging 3"],
    "Android Components": ["ExoPlayer", "Glide", "WebView", "Deep Linking", "Push Notifications (FCM)"],
    "Architecture & Concurrency": ["MVVM", "Clean Architecture", "Modularization", "Coroutines", "Flow/StateFlow", "DI (Hilt, GetIt)"],
    "Networking & Integrations": ["REST APIs", "Retrofit/OkHttp", "WebSockets", "Firebase", "Google Sign-In", "Google Maps", "Stripe"],
    "Testing & Debugging": ["JUnit", "Espresso", "Flutter Test", "Mocktail", "Firebase Crashlytics", "Firebase Analytics"],
    "Flutter / Cross-Platform": ["Flutter", "Kotlin-to-Flutter migration", "Android and iOS publishing"],
    "Tools & Release": ["Git", "GitHub Actions CI/CD", "Gradle", "ProGuard/R8", "Play Console", "App Store Connect", "JIRA", "Agile"],
  },

  experience: [
    {
      role: "Android Developer",
      company: "Ahead Websoft Technologies Pvt. Ltd.",
      period: "Jul 2025 – Sep 2026",
      location: "Gurgaon, India",
      projects: [
        {
          name: "ClubDunes",
          type: "Social Community App",
          tech: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Firebase", "ExoPlayer"],
          links: ["Google Play"],
          highlights: [
            "Built a Kotlin and Jetpack Compose app for a Dubai-based community using MVVM, Hilt, Coroutines/Flow, and Retrofit for feeds, events, comments, and member profiles; live on Google Play with 100+ downloads and a 5.0-star rating.",
            "Optimized feeds with Paging 3 and Glide; built backend JSON-driven forms; integrated Infomaniak rich HTML editor.",
            "Integrated Google Sign-In, FCM, deep links, Stripe; handled signing, ProGuard/R8, Play Console, GitHub Actions CI/CD.",
          ],
        },
        {
          name: "SocialEngine Mobile App",
          framework: "Flutter",
          type: "Social Networking Platform",
          tech: ["Flutter", "Dart", "REST APIs", "Firebase"],
          links: ["Google Play", "App Store"],
          highlights: [
            "Independently migrated the native Android (Kotlin) app to Flutter, rebuilding UI, navigation, and state management with full feature parity; live on both stores (1,000+ downloads, 4.3-star rating, 54 reviews).",
            "Built the TikTok-style short-video (clips) feature and REST-driven activity feeds with Firebase Auth and FCM; wrote unit and widget tests (Flutter Test, Mocktail) to reduce regression risk.",
          ],
        },
        {
          name: "SocialEngine Chat",
          framework: "Flutter",
          type: "Real-Time Messaging",
          tech: ["Flutter", "Dart", "Firebase", "GetIt", "MVVM"],
          links: ["Google Play", "App Store"],
          highlights: [
            "Built a real-time chat app (MVVM, GetIt DI) with 1:1 and group messaging, 5 content types, and paginated history.",
            "Implemented read receipts, typing indicators, FCM push, and deep links with automatic login from the SocialEngine app.",
            "Mentored 2 junior developers through code reviews and onboarding.",
          ],
        },
      ],
    },
    {
      role: "Android Developer",
      company: "I-Next Web Technologies Pvt. Ltd.",
      period: "May 2024 – Jul 2025",
      location: "Chandigarh, India",
      projects: [
        {
          name: "HappyTask",
          type: "Service Booking Platform",
          tech: ["Kotlin", "Jetpack Compose", "WebSockets", "REST APIs"],
          links: ["Google Play"],
          highlights: [
            "Built and shipped the service-booking app in Kotlin and Jetpack Compose across 15+ service categories; redesigned the booking UI flow and integrated booking and service data through REST APIs.",
            "Replaced periodic polling with a WebSocket connection for real-time notifications without redundant polling requests; added deep linking to open service screens from links; fixed production crashes using Firebase Crashlytics reports.",
          ],
        },
        {
          name: "GreenRide Africa",
          framework: "Flutter",
          type: "Ride-Hailing & Mobility App",
          tech: ["Flutter", "Dart", "REST APIs", "Google Maps"],
          links: ["Google Play", "App Store"],
          highlights: [
            "Built live driver tracking, upfront fare estimates, and Google Maps-based ETA monitoring for the rider experience.",
            "Implemented REST-driven booking, trip management, and Stripe payment integration; app has 5,000+ downloads.",
          ],
        },
      ],
    },
    {
      role: "Freelance Android & Flutter Developer",
      company: "Freelance",
      period: "Feb 2024 – Apr 2024",
      location: null,
      projects: [
        {
          name: "Client Apps",
          highlights: [
            "Shipped 4-5 client apps to Google Play, incl. Trixie Pics (surveillance) and Funzo (book reading), plus bug fixes and support.",
          ],
        },
      ],
    },
    {
      role: "Android Developer",
      company: "I-Exceed Technology Solutions Pvt. Ltd.",
      period: "Feb 2022 – Jan 2024",
      location: "Bengaluru, India",
      projects: [
        {
          name: "Appzillon",
          type: "Digital Banking / Low-Code Platform",
          tech: ["Kotlin", "Java", "Firebase", "Espresso", "JUnit"],
          highlights: [
            "Delivered Android 14 compatibility updates for the Appzillon IDE's Camera and File Operations modules; built Photo Picker, barcode scanning, SIM binding, SMS, and universal deep linking features in Kotlin and Java.",
            "Implemented Network, SMS, and GPS listeners; wrote Espresso and JUnit tests and resolved 30+ UAT and production defects across Local, UAT, and Production builds delivered via GitHub Actions CI/CD pipelines.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech, Information Technology",
      institution: "Ajay Kumar Garg Engineering College, Ghaziabad",
      period: "Aug 2017 – Sep 2021",
    },
  ],

  certifications: [
    { name: "Kotlin Masterclass 2023", provider: "Udemy" },
    { name: "Android Dev Masterclass – Java", provider: "Udemy" },
    { name: "Introduction to Flutter", provider: "Simplilearn" },
  ],
};

// Works in Node.js (CommonJS) and in the browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = resume;
}
if (typeof window !== "undefined") {
  window.resume = resume;
}
