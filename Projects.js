import ESP32 from "../assets/ESP32.jpg";
import Piano from "../assets/piano.jpg";
import Clock from "../assets/esp32clock.jpg";
import Ants from "../assets/ants.jpg";

export const projects = [
  {
    slug: "iot-project",
    title: "Vulnerable Animal Protection System",
    description: "An embedded system project aimed at protecting vulnerable animals from predators",
    image: ESP32,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
    github: "https://github.com/jebentley90-tech/esp32_security_system_iotproject"
  },

  {
    slug: "iot-project2",
    title: "IoT Piano Implementation",
    description: "An embedded system project to display how IoT helps industries but can also help musically too.",
    image: Piano,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
  },

    {
    slug: "iot-project3",
    title: "IoT Smart Clock",
    description: "An embedded system project meant to showcase the capabilities of an ESP32 board as a smart clock.",
    image: Clock,
    tech: ["Arduino IDE", "Wokwi", "ESP32"],
  },

    {
    slug: "AI-Project",
    title: "Ant Colony Optimization",
    description: "Real world examples of ant colony optimization presented through an AI Project.",
    image: Ants,
    tech: ["Colab"],
  }
];
