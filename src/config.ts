export const siteConfig = {
  name: "Kushal Chandar",
  title: " Embedded Systems Engineer and Full Stack Developer",
  description: "Kushal Chandar - Portfolio",
  accentColor: "#1B9AAA",
  social: {
    email: "kushalchandariit@gmail.com",
    linkedin: "https://linkedin.com/in/kushal-chandar",
    // twitter: "https://x.com/kushal-chandar",
    github: "https://github.com/kushal-chandar",
  },
  aboutMe:
    "I build performance-critical software that ships all the way from firmware to UI. I’ve worked across embedded systems (BLE, sensors, motor control on nRF52/STM32) and full-stack products (React + FastAPI + GCP), with a bias for low-latency, reliable systems. Strong at turning messy problems into shipped systems, collaborating across teams, and taking work from concept to deployment. C++ is my happy place, Rust is next, and I spend free time on open source, gaming, and obsessively tuning my system for performance.",
  skills: ["C", "C++", "Python", "Linux", "Git", "Shell", "VSCode", "CMake", "STM32", "nRF52", "Bluetooth", "React", "FastAPI", "GCP", "SQL", "Docker", "Embedded Systems"],
  samples: [
    {
      name: "VeraShield nRF52 Firmware",
      description:
        "Smart gas-spray device on Nordic nRF52: battery-powered design, configurable spray schedules, ADC-based sensing, and BLE remote control for setup and operation.",
      link: "https://github.com/Kushal-Chandar/VeraShield-Firmware",
      skills: ["C", "nRF52832", "Bluetooth", "SPI"],
      image: "mosquito.svg"
    },
    {
      name: "VeraShield Mobile App",
      description:
        "Mobile app for configuring and controlling the VeraShield smart spray dispenser over Bluetooth Low Energy (BLE).",
      link: "https://github.com/Kushal-Chandar/VeraShield-App",
      skills: ["React", "Typescript", "Capacitor", "TailwindCSS"],
      image: "vera_app.svg"
    },
    {
      name: "Scalp Cooling System",
      description:
        "A medical device used to maintain scalp temperature during chemotherapy to reduce hair loss.",
      link: "https://github.com/Kushal-Chandar/ScalpCoolingDevice",
      skills: ["STM32G030C8", "C", "Python", "ADC", "UART"],
      image: "cropped-cooling_cap.svg"
    },
    {
      name: "SmearBot",
      description:
        "Short, consistent smears with repeatable pressure and speed. Built on Arduino.",
      link: "https://github.com/Kushal-Chandar/Smear",
      skills: ["C", "Nema 17", "DRV8834", "Arduino"],
      image: "smear.svg"
    },
    {
      name: "Keto Breath Analyzer",
      description:
        "Breath analyzer to estimate Ketosis (body fat burn-rate) by measuring acetone levels in breath, Built on Arduino.",
      link: "https://github.com/Kushal-Chandar/Ketone-Breath-Analyzer-POC",
      skills: ["C", "ATMEGA328p", "VOC Sensors", "I2C"],
      image: "cropped-keto.svg"
    },
    {
      name: "Tracheostomy Device UI",
      description:
        "The Tracheostomy-Device-UI built with Kivy optimized for touch devices, runs on a Raspberry Pi.",
      link: "https://github.com/Kushal-Chandar/Tracheostomy-Device-UI",
      skills: ["Python", "Kivy", "Raspberry Pi"],
      image: "tracheo.svg"
    },
    {
      name: "IVD Laser Based - Strip Reader",
      description:
        "Motor Interfacing for IVD Laser Based - Strip Reader.",
      link: "https://github.com/Kushal-Chandar/IVD",
      skills: ["C", "Nema 17", "DRV8834", "Arduino"],
      image: "ivd.svg"
    },
    {
      name: "Pepallelebiologics",
      description:
        "Website for pepallelebiologics biotech.",
      link: "https://pepallelebiologics.com/",
      skills: ["React", "Vite", "Javascript", "TailwindCSS", "Google Sheets API"],
      image: "pepallele.svg"
    },
    {
      name: "",
      description:
        "Website for advionyx.",
      link: "https://advionyx.com/",
      skills: ["React", "Vite", "Javascript", "TailwindCSS"],
      image: "advionyx.svg"
    },
  ],
  projects: [
    {
      name: "Sign Language Translator",
      description: "An app that translates sign language gestures to text in real time.",
      link: "https://github.com/Kushal-Chandar/Sign-Language-Translator",
      skills: ["Next.js", "React", "PWA", "TailwindCSS", "Python", "Tensorflow"],
      image: "sign.svg"
    },
    {
      name: "FlappyBird++",
      description: "\"Physics Accurate\" flappy bird with powerups made in pygame.",
      link: "https://github.com/Kushal-Chandar/flappybird_plus_plus",
      skills: ["Python", "Pygame"],
      image: "flappy.svg"
    },
    {
      name: "FTXVibe",
      description:
        "A terminal audio visualizer written in C++, comes with a built-in noise + waveform generators.",
      link: "https://github.com/Kushal-Chandar/FTXVibe",
      skills: ["C++", "CMAKE", "Miniaudio", "ftxui", "kissfft", "SOLID Design"],
      // image: "cropped-spray.svg"
    },
    {
      name: "Minpass",
      description: "A self hosted password manager.",
      link: "https://github.com/Kushal-Chandar/minpass",
      skills: ["C++", "Docker", "CMAKE", "cryptopp"],
      // image: "cropped-spray.svg"
    },
    {
      name: "cmake-init",
      description:
        "A template that automates creation of a cpp project.",
      link: "https://github.com/Kushal-Chandar/cmake-init",
      skills: ["C++", "CMAKE", "cpp20", "git"],
      image: "cmake.svg"
    },
    {
      name: "Video-Captionator",
      description:
        "Make subtitles for your video and save the file as vtt or srt.",
      link: "https://github.com/Kushal-Chandar/Video-Captionator",
      skills: ["vue3", "typescript", "tailwindcss"],
      image: "vid_cap.svg"
    },
    {
      name: "Python Chess Move Validation",
      description:
        "An objected oriented implementation of move validation in python.",
      link: "https://github.com/Kushal-Chandar/python-chess-move-validation",
      skills: ["python", "Objective-Oriented Programming"],
      image: "chess.svg"
    },
    {
      name: "Covid Vaccination Booking",
      description:
        "A web application for covid vaccination booking written in Django.",
      link: "https://github.com/Kushal-Chandar/covid_vaccination_booking",
      skills: ["python", "Django"],
      image: "covid.svg"
    },
    {
      name: "Weather App",
      description: "Weather App fetches data from open-meteo and renders the data in a good looking react interface.",
      link: "https://github.com/Kushal-Chandar/Weather-App",
      skills: ["Next.js", "React", "PWA", "TailwindCSS"],
      image: "weather.svg"
    },
  ],
  experience: [
    {
      company: "IIT Bombay - BETIC Project",
      title: "Embedded Systems Engineer & Full Stack Developer",
      dateRange: "April 2025 - Present",
      bullets: [
        "Led 3 healthtech devices from concept to working prototypes, and supported 4 more owning software and firmware.",
        "Built VeraShield smart spray scheduler in 10 weeks, owning nRF52832 BLE firmware (SPI, ADC VBAT/slider, PWM motor control, I2C RTC + EEPROM for schedules and user stats) and BLE remote control via a Capacitor BLE app.",
        "Ketone Breath Analyzer built using Arduino, TGS1820 acetone sensor, and SSD1306 OLED UI got funding from TIH.",
        "Built Arduino stepper-motor control for SmearBot and IVD strip reader (DRV8834, NEMA17, optical-switch homing).",
        "Pushed the ScalpCooling device to internal-testing, fixed alarm sync, UART and compressor control in STM32 code.",
        "Built a Raspberry Pi Kivy touchscreen UI for Tracheostomy-Device-UI with demo vitals and buzzer alerts (2 weeks).",
        "Delivered website enhancements, led software support/debugging, and server setup, management and administration.",
        "Participated in DRM, MRM and internal audits to comply with medical device standards ISO 13485 and ISO 9001.",
      ],
    },
    {
      company: "Loop AI - Delivery Intelligence Platform",
      title: "Full Stack Engineer",
      dateRange: "August 2023 - April 2024",
      bullets: [
        "Worked on R365 accounting software integration which is used by 10% of clientele. Released product features that improved user experience. Fixed critical workflows that reduced customer onboardings failures from 70% to 30%.",
        "Built a system to generate dynamic notifications with yaml files, which is used by customer success team to prototype and create emails without taking up additional engineering bandwidth, offloading 0.5 - 1 day effort per notification.",
        "Improved deployment workflows, engineering on-call processes, and code quality by using github actions, advocating for SOPs and documentation, adding graphana alerts, and adding unit tests across the code base.",
        "Created new on-call processes and trained team members around them improving the overall on-call efficiency, which lead to an overall better on-call experience and created additional bandwidth.",
        "Built end to end products, overhauled existing product pages and rewritten core apis using both frontend libraries (React and MUI), as well as backend technologies (Python, FastAPI, dbt, and Google Cloud Platform).",
        "In summary, as a core team member, developed customer-facing solutions which lead to closure of sales and my problem-solving skills proved vital in resolving critical issues and client concerns significantly benefiting the overall product."
      ],
    },
    {
      company: "Astrome Technologies",
      title: "Embedded Systems Intern (PPO secured)",
      dateRange: "Jan 2023 - April 2023",
      bullets: [
        "Built a mechanical positioning control loop that aimed a device at a geostationary satellite using astronomical coordinate systems such as ECEF, LLA, and AER to translate the satellite’s position to azimuth and elevation.",
        "Worked on building numerous functionalities in the STM32 to control stepper motors, retrieving precise data from the IMU with Kalman filter, and fixing bugs in the overall code base and improving the build system.",
        "Performed data-analysis on IMU data with NumPy, Pandas, Matplotlib, PySerial to test for accuracy on a regular basis. In summary, implemented a design to 70% completion before tenure of 3 months came to an end.",
      ],
    }
  ],
  education: [
    {
      school: "Osmania University - Hyderabad",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2020 - 2023",
      achievements: ["Graduated with a CGPA of 8.74, and a 9 SGPA in finals"],
    },
    {
      school: "Jain Heritage A Cambridge School",
      degree: "12th Standard, C.B.S.E - PCM",
      dateRange: "2018 - 2020",
      achievements: [],
    },
    {
      school: "Mansukhbhai Kothari National School",
      degree: "10th Standard, C.B.S.E",
      dateRange: "2016 - 2018",
      achievements: [],
    },
  ],
};
