import housingResearch from "../assets/housing-research.png";
import smartParking from "../assets/smart-parking.png";

const posts = [
  {
    slug: "housing-affordability-research",
    title: "From Data to Research: My Experience with Housing Affordability",
    date: "June 2026",
    category: "Research & Data Analysis",
    image: housingResearch,
    imageAlt: "Preview of housing affordability research paper",
    excerpt:
      "My experience using Python, SQL, and AI-assisted tools as part of a housing affordability research project that eventually led to a research paper, poster, and presentation.",
    sections: [
      {
        paragraphs: [
          "During Summer 2026, I had the opportunity to work with another student on a research project focused on housing affordability in the United States. This was one of my first experiences working on a project where we took technical skills we were learning and used them to produce something that we would eventually present to other people.",
          "Before we started working on the research project, faculty at the CSUB Antelope Valley campus helped prepare us by having us work on our Python skills. After becoming more familiar with Python, we moved on to learning and practicing SQL. This gave us a better understanding of both tools before we started working with the housing data.",
        ],
      },
      {
        heading: "Working with the data",
        paragraphs: [
          "Once we were comfortable enough with Python and SQL, we began working with the data that would be used for our research. Python and SQL were used to help organize and work with the information, while Claude was also used as part of the process to help turn the data and our findings into a research paper and poster.",
          "One thing I found interesting about this project was seeing how different tools could work together. Instead of learning Python and SQL only through individual exercises, we were able to see how those skills could be applied to a larger project. We also got experience using AI as another tool in the process rather than treating it as something separate from the work we were already doing.",
        ],
      },
      {
        heading: "Presenting our research",
        paragraphs: [
          "After the research paper and poster were completed, we traveled to the main CSUB campus to participate in the Chevron Summer Undergraduate Research Experience (SURE). At the event, we were able to connect with other CSUB students, faculty, and other people attending the presentation.",
          "We also had the opportunity to talk about our findings and explain how we were able to put our research together. I enjoyed being able to see what other students had worked on and having the chance to present something that we had spent time developing ourselves.",
        ],
      },
      {
        heading: "What I took away from the experience",
        paragraphs: [
          "Overall, this project gave me experience with more than just Python, SQL, and working with data. I was able to see the process of taking skills we had been practicing, applying them to research, and eventually presenting the results to other people. It was a different experience from completing a regular class assignment because there was a final result that we were able to share outside of the classroom.",
        ],
      },
    ],
  },

  {
    slug: "ai-smart-parking-prototype",
    title: "Building a Smart Parking Prototype: My Experience as Team Lead",
    date: "July 2026",
    category: "AI & Hardware",
    image: smartParking,
    imageAlt:
      "Smart parking prototype classifying spaces as available, occupied, and uncertain",
    excerpt:
      "My experience leading a four-person team while working primarily on the Raspberry Pi and hardware side of an AI-powered smart parking prototype.",
    sections: [
      {
        paragraphs: [
          "In July 2026, I had another opportunity to work on a technical project, this time as the leader of a four-person team. This experience was not too different from the research project I worked on the month before, but instead of focusing on data and research, we spent more time learning about artificial intelligence and eventually combining AI with physical hardware.",
          "Before we started building anything, we spent about two to three weeks learning more about AI and understanding how AI agents work. We were able to test different things and become more familiar with how an agent could process information before we were tasked with using our Raspberry Pi 5 kits to build a working prototype.",
          "Our project was a smart parking prototype designed to use a camera and an AI agent to determine whether a parking space was available, occupied, or uncertain.",
        ],
      },
      {
        heading: "Working on the hardware",
        paragraphs: [
          "My main responsibility during the project was the hardware side. I connected the Raspberry Pi 5 to a breadboard using jumper cables and worked on connecting the different components we needed for the prototype. This included a button, a red light, and the camera connected to the Raspberry Pi.",
          "The button gave us a way to tell the Raspberry Pi to take a picture using the camera. The red light was also an important part of the setup because we used it as a visual indicator. When the light blinked, we knew that the camera had successfully taken a picture.",
          "I enjoyed working on this part of the project because it gave me an opportunity to work directly with the hardware and see how all of the individual components needed to connect and work together. Although I have experience working with software, this project helped reinforce that I enjoy working with the hardware side of technology and troubleshooting physical systems.",
        ],
      },
      {
        heading: "Leading the team",
        paragraphs: [
          "As team leader, I also had to make sure everyone had a role in testing our prototype and was contributing to the project. While I focused more on getting the hardware working correctly, the other members of the team were still involved in testing and helping us move through each stage of the project.",
          "Every time we reached another milestone, we were tasked with presenting our progress and explaining what we had accomplished. We continued doing this throughout the project until our final meeting for the summer. I think having to regularly present our progress was useful because we couldn't just focus on whether something worked. We also needed to be able to explain what we were doing and demonstrate the progress we had made.",
        ],
      },
      {
        heading: "Bringing everything together",
        paragraphs: [
          "By the end of the project, we were able to successfully get both the hardware and software sides of the prototype working together. We demonstrated how the AI agent could work with the Raspberry Pi and camera to take pictures and then provide information about the images it received.",
          "Overall, this project gave me experience with AI, Raspberry Pi hardware, breadboards, cameras, and connecting different electronic components together. It also gave me experience leading a team and making sure everyone contributed toward the same goal.",
        ],
      },
      {
        heading: "What I took away from the experience",
        paragraphs: [
          "The biggest thing I took away from the project was how much I enjoyed working directly with the hardware. I still value the software experience I have gained, but being able to physically connect components, test them, troubleshoot problems, and eventually see everything work together was one of the parts of the summer that interested me the most.",
        ],
      },
    ],
  },
];

export default posts;