#ADS RFQ Pool One Development
Prototype URL: [agilebpadevpool.forumone.com](http://agilebpadevpool.forumone.com).

Agile Management Tool: [Trello](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

This tool tracked progress on the prototype and includes a timestamped chronological listing of how the prototypes was designed and developed by out team. All documentation within Trello is also in the Documentation section in GitHub. 

## Description

The dCAREHx tool was created to enable physicians, pharmacists, nurses, patients, care providers, and general consumers to understand the adverse events related from taking a particular mental health drug, and the frequency on which cases were submitted. The dCAREHx tool is specifically designed to help those who are taking or prescribing pharmaceuticals for mental health issues to understand if there are potentially adverse side effects from a particular medication as well as the number of cases reported over a period of time. It is based on official FDA data, and reduces the research time substantially.

You can track our progress on our [Trello board.](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

## Approach - Development Pool 
####Vision, Design and Preparation
Before starting, Forum One designated a Product Owner (William Hurley) to lead the project and be liable for its success, while a development team met to internally kick off the project. During the formal kick off meeting with the Product Owner, we developed a vision for the prototype and sketched out what the prototype could look like. The Product Owner / Manager was held accountable for the tools success and was assisted by the Scrum Master who assisted with ticket assignments and providing documentation support to the team. 

####Simple and Intuitive
In the spirit of [Play 3 for the U.S. Digital Services Playbook] (https://playbook.cio.gov/#play30), the Product Owner and team decided to extend the component of an existing tool instead of re-making and new tool from scratch. This allowed the team to keep the tool simple and make changes in order to meet the Product Owner’s requirements and within the timeline requested. 

####Iterations on Minimum Viable Product
Because we were starting from an existing tool, launching a minimum viable product was simple and we were able to launch in Sprint 1. Based on this launched MVP, the Product Owner was able to craft additional stories, provide minor design enhancements and worked with designers to prepare a sketch of required changes to the MVP. During this initial period, the Product Owner sought informal feedback from additional staff members on the tool and garnered feedback on key elements which were captured in additional stories in Sprint 3. 

####Agile Methodologies
The Product Manager for the prototype relied on a small, intense team who are experts at using agile methodologies to build tools. The team (Technical Architect, Backend Developer, DevOps Engineer,) met during daily standups, held Sprint Planning and Review meetings, and participated actively in our Agile project management system, [Trello] (https://trello.com/b/QIqBUToI/18f-agile-bpa-development). All members of the team were given access to both the Git code repository but also to the Trello system, which allowed a virtual team to stay in close collaboration. 

####Experienced Teams
We relied on Forum One’s best and brightest to build the prototype. The delivery team, Eric Davis, William Hurley, and Alex Ford have all worked on the same delivery team for several years and on several projects. William is Forum One’s go-to expert developer and is the most senior-level developer in the company. Alex is Forum One’s data visualization expert and is well-versed in API structures and has worked closely with William on several projects. 

####Usage of Open-source Technologies
A large component of our ability to stay lean and develop fast came from the use of open-source technologies. Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. In addition, our team went so far to even use open source design principles by leveraging [Google Material Design Principles] (https://www.google.com/design/spec/material-design/introduction.html#). This also sped up the prototype design process by re-using work to quickly get to the design of the prototype. Clear instructions for setting up and running the system are also provided later in this README file. 

####Automated Testing and Deployments
After the MVP had launched and additional tickets were logged for changes to the prototypes, the Backend Developer wrote a series of unit tests and allowed us to identify and few bugs which were then logged into the Trello board. The team automated any deployments use Git. 

####Security and Privacy
The Amazon EC2 hosting solution is one of the most secure IaaS solutions on the market and is used throughout the government - including on FISMA-approved websites hosted by Forum One. Security is important and our team is well-versed in all NIST, FISMA and FEDRamp security requirements. To monitor the server and application and to maintain its security and privacy, the prototype is being monitored by Monitis which is an all-in-one application monitoring platform used to monitor the website and the server. 
####Data-driven Decisions
Because these are prototypes, we don’t yet have a lot of data to support the success or failure of the prototype. Based on Forum One’s prior knowledge in this space, we used existing data and empirical research from other projects to drive our decisions on the tool to choose. Detailed tracking via Google Analytics or a similar analytics tool would be required over a period of time to judge the success of failure of the tool. 


##Development Criteria - Pool 2
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories limited to the Development Pool labor categories to develop the prototype as quoted in Attachment C | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 3  | Used at least five modern and open-source technologies, regardless of architectural layer (frontend, backed, etc) | Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 4  | Deployed the prototypes on an Infrastructure as a Service (IaaS) or Platform as a Service (Paas) provider, and indicated which provider was used| The prototype was deployed on Amazon Web Services EC2 Linux Server. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 5  | Wrote unit tests for their code | Unit tests were written for the prototype tool. [Trello Card](https://trello.com/c/0cvYzUvz), [Unit Tests](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/tree/master/test)  |
| 6  | Set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider | We use Vagrant and Puppet for managing local virtual machines, Jenkins and GruntJS for continuous integration, and Capistrano for deployment.[link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 7  | Set up or used a configuration management | All configuration and source code is managed via Git using standard best practices. [link] (https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 8  | Set up or used continuous monitoring | Continuous monitoring is currently deployed and tracking the health of both the application and server. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md#continuous-monitoring) |
| 9  | Deploy their software in a container (i.e., utilized operating-system level virualization) |The project can be run and installed via Docker. [link] (https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-#installing-project) ```docker run -it -d --name 18f -p 1337:1337 -v "$PWD":/server -w /server forumone/sails /bin/sh -c "npm install && bundle install && sails lift"``` |
| 10  | Used an iterative approach, where feedback informed subsequent work or versions of the prototype | Please see evidence within Trello board. We used an iterative approach and developed the prototype by iterating on an existing tool and making changes based on content, theme, color, and content. Iterations were made based on guidance from the Product Manager. [Trello Board] (https://trello.com/b/QIqBUToI/18f-agile-bpa-development) |
| 11 | Provided sufficient documentation to install and run their prototype on another machine | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#installing-project) |
| 12 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/LICENSE.md) |

## Team and Labor Categories - Development Pool
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Technical Architect - William Hurley | William Hurley is Manager, Technical Development for Forum One, where he is responsible for delivering smart technical solutions and managing a team of developers. His skills combine technical web development and knowledge of organizational system design, and he has been developing on the web since 1997 using PHP, Java, Adobe Flex, JavaScript, and ColdFusion. William also has extensive knowledge of XHTML/HTML, CSS and XML, and related technologies. Using Agile principles, William has led the technical development for the Educational Testing Services, EnergyStar, the Environmental Protection Agency, Robert Wood Johnson Foundation, and the World Bank. | William Hurley is responsible for the overall technica infrastructure, defining the technical solution and providing a roadmap for the backend developer and assigning tasks. He is also repsonsible for conducting code reviews and leading Sprint Review meetings. | 24 hours |
| Back-end Developer - Alex Ford | Alex Ford is a Developer at Forum One, where he is responsible for delivering smart solutions that satisfy our clients’ complex and varying business goals. Recent clients with whom Alex has worked include the U.S. Department of Agriculture, the U.S. Global Change Research Program, and the National Assessment of Educational Progress. Alex earned his B.A. in Mathematics at the University of North Carolina at Asheville and spent a year in San Antonio. He came to Forum One from NationalField, an enterprise social network, where he learned how to massage data into the proper format for web-based consumption. Alex is Forum One's data guru and is lead developer on many of the complex data or data visualization projects within the company. | Alex supports the Technical Architect and completes development tasks as assigned. Alex is also responsible for the quality of the system and writing unit tests to ensure code quality. | 8 hours |
| DevOps Engineer - Mike Shade| Mike Shade is a Senior Systems Administrator at Forum One, where he is responsible for hosting operations and infrastructure planning for our clients' sites. He has been with Forum One for 7 years and has expertise with a wide variety of platforms and technologies. His expertise with high performance and high availability scaling techniques enables Forum One to successfully launch and maintain client sites of any size with confidence. Mike is a Red Hat Certified Engineer (2008). | Mike is responsible for provisioning the environment for the prototype and also ensuring the server infrastructure meets project's needs. He also implemented any continuous monitoring solutions required. | 2 hours |

## Installing project

The dCAREHx project is built using SailsJS, a real-time NodeJS framework. You can run this locally or through a Docker container.

### Running locally

In order to run the project locally you need NPM of 1.4 or higher as well as bower and sails packages installed globally. Run ```npm --version``` to check your version of NPM and then ```sudo npm update npm -g``` to upgrade as necessary. To install the packages run:

* ```sudo npm install bower -g``` to install bower
* ```sudo npm install sails -g``` to install sails

To start the site run ```sails lift``` within the root checkout. It will run the Grunt tasks and start Express so the site is available at http://localhost:1337.

To run unit tests run ```grunt test```

### Running using Docker

In order to run the project with Docker you need to install Docker for your operating system or using boot2docker for OSX or Windows. Once the project is cloned you can launch it in Docker by running: ```docker run -it -d --name 18f -p 1337:1337 -v "$PWD":/server -w /server forumone/sails /bin/sh -c "npm install && bundle install && sails lift"```

If running boot2docker run ```boot2docker ip``` to get the IP address and access it on that IP address at port 1337.

To run unit tests run ```docker run -it -d --name 18f -p 1337:1337 -v "$PWD":/server -w /server forumone/sails /bin/sh -c "npm install && bundle install && grunt test"``` and then to view the running tests you can run ```docker attach 18f```

