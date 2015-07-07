#ADS RFQ Pool One Development
Prototype URL: [agilebpadevpool.forumone.com](http://agilebpadevpool.forumone.com).

Agile Management Tool: [Trello](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

This tool tracked progress on the prototype and includes a timestamped chronological listing of how the prototypes was designed and developed by out team. All documentation within Trello is also in the Documentation section in Github. 

## Description

The dCAREHx tool was created to enable physicians, pharmacists, nurses, patients, care providers, and general consumers to understand the adverse events related from taking a particular mental health drug, and the frequency on which cases were submitted. The dCAREHx tool is specifically designed to help those who are taking or prescribing pharmaceuticals for mental health issues to understand if there are potentially adverse side effects from a particular medication as well as the number of cases reported over a period of time. It is based on official FDA data, and reduces the research time substantially.

You can track our progress on our [trello board.](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

## Approach - Development Pool 
###Vision, Design and Preparation


###Agile Methdologies

###Iterations on Minimum Viable Product

###Usage of Open-source Technologies
A large component of our ability to stay lean and develop fast came from the use of [open-source technologies](https://playbook.cio.gov/#play8). Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. 


##Development Criteria - Pool 2
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories limited to the Development Pool labor categories to develop the prototype as quoted in Attachment C | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 3  | Used at least five modern and open-source technologies, regardless of architectural layer (frontend, backed, etc) | Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 4  | Deployed the prototypes on an Infrastructure as a Service (IaaS) or Platform as a Service (Paas) provider, and indicated which provider was used| The prototype was deployed on Amazon Web Services EC2 Linux Server. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 5  | Wrote unit tests for their code | Unit tests were written for the prototype tool. [link](https://trello.com/c/0cvYzUvz) |
| 6  | Set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider | We use Vagrant and Puppet for managing local virtual machines, Jenkins and GruntJS for continuous integration, and Capistrano for deployment.[link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 7  | Set up or used a configuration management | All configuration and source code is managed via Git using standard best practices. [link] (https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 8  | Deploy their software in a container (i.e., utilized operating-system level virualization) | '''docker run -it --rm --name 18f -v "$PWD":/server -w /server artificial/docker-sails npm install && sails lift''' |
| 9  | Used an iterative approach, where feedback informed subsequent work or versions of the prototype | Please see evidence within Trello board. We used an iterative approach and developed the prototype by iterating on an existing tool and making changes based on content, theme, color, and content. Iterations were made based on guidance from the Product Manager. [Trello Board] (https://trello.com/b/QIqBUToI/18f-agile-bpa-development) |
| 10 | Provided sufficient documentation to install and run their prototype on another machine | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-#web-starter-kit) |
| 11 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/LICENSE.md) |

## Team and Labor Categories - Development Pool
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Product Manager - Eric Davis | Eric Davis is a Project Director at Forum One, where he serves as Senior Advisor and Program Managemer on many of our web strategy and development projects. Eric has over twelve years of experience using technology in a health policy and programming setting, from hands-on web development, organizational web strategy and marketing, all using agile project methdologies. Some of Eric’s most recent clients at Forum One include the Centers for Disease Control and Prevention, the Patient-Centered Outcomes Research Institute (PCORI), and the National Cancer Institute. Prior to joining Forum One, Eric was Vice President of Digital Health at Edelman, and previously Vice President of Digital Strategies at IQ Solutions. He has a bachelor’s degree in Exercise Physiology from Ball State University, a master’s in Health Policy from American University, and an MBA from University of Maryland, College Park. Eric is Forum One's go-to expert when managing healthcare-related projects.| xx hours |
| Technical Architect - William Hurley | William Hurley is Manager, Technical Development for Forum One, where he is responsible for delivering smart technical solutions and managing a team of developers. His skills combine technical web development and knowledge of organizational system design, and he has been developing on the web since 1997 using PHP, Java, Adobe Flex, JavaScript, and ColdFusion. William also has extensive knowledge of XHTML/HTML, CSS and XML, and related technologies. Using Agile principles, William has led the technical development for the Educational Testing Services, EnergyStar, the Environmental Protection Agency, Robert Wood Johnson Foundation, and the World Bank. | xxx | xxx hours |
| Back-end Developer - Alex Ford | Alex Ford is a Developer at Forum One, where he is responsible for delivering smart solutions that satisfy our clients’ complex and varying business goals. Recent clients with whom Alex has worked include the U.S. Department of Agriculture, the U.S. Global Change Research Program, and the National Assessment of Educational Progress. Alex earned his B.A. in Mathematics at the University of North Carolina at Asheville and spent a year in San Antonio. He came to Forum One from NationalField, an enterprise social network, where he learned how to massage data into the proper format for web-based consumption. Alex is Forum One's data guru and is lead developer on many of the complex data or data visualization projects within the company. | xxxx | xxx |

## Web Starter Kit

This project has been setup to use a virtual machine for local development to closely mirror the production environment. To use the the virtual machine, follow these instructions.

## Preparing your local environment

  * Latest Virtualbox -- [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads). If you are running Win 7 install 4.2.x
  * Latest Virtualbox Extension Pack -- [https://www.virtualbox.org/wiki/Downloads]. Should match your Virtualbox version
  * Vagrant (currently tested with 1.3.5 and 1.6.2) -- [http://downloads.vagrantup.com](http://downloads.vagrantup.com)


## Getting Vagrant environment set up
Starting from within the root of your project (an existing project which already has a vagrant/puppet configured or starting a new project from the Drupal Starter Project), do the following:

1. Create VM by running "vagrant up" (This step will take long (might be 5+ minutes) as all necessary components are being downloaded and installed)
  * If you get an error re-provision the VM by running "vagrant provision" to see if this resolves the issue
2. SSH into VM by running "vagrant ssh"
3. Navigate to VM docroot by running "cd /vagrant/public"
4. Install Drupal using custom install profile by running "drush si [profile] -y" and following prompts. Alterntatively, use drush aliases to synch to a development instance of a site database. 

## Troubleshooting

Occasionally some issues may occur that prevent you from loading the virtual machine. Below are some common issues that others have experienced.

### General

If the virtual machine does not boot up and you get a message saying there was a timeout, try launching the VM through the Virtualbox interface to get more detailed information.


### Macintosh machines

* If you experience errors when sharing the folder over NFS you may need to enable File Sharing in System Preferences -> Sharing
* If you receive an error about an invalid export you may need to manually delete /etc/exports file
* If you've updated to Mavericks and Virtualbox is no longer working, try the following command: sudo /Library/StartupItems/VirtualBox/VirtualBox restart
* If you are prompted to enter your password when SSHing from the VM ensure your SSH private key is in the keychain by running "ssh-add -K ~/.ssh/id_rsa" from your machine

### Linux machines

* If you experience errors when sharing the folder over NFS you may need to install the appropriate NFS packages, on Ubuntu you will need to run "sudo apt-get install nfs-kernel-server"

### Windows machines

* Virtualbox requires the Intel Virtualization Technology for Directed I/O (VT-d) be enabled, if you receive a message saying that the VM requires a 64 bit processor and you only have an i686 processor this may be the cause
* Virtualbox may trigger a Windows Firewall popup to allow ports to be shared
* If the provisioning fails with errors on ports.conf or sites.xml this may be due to CRLF issues with the configuration files, to resolve this take the following actions:
  1. git config --global --edit
  2. Add line if missing: [core]
  3. Below that line add line: autocrlf = input
* if your ssh key information does not correctly forward, you can copy your ssh private key to ~/.ssh and chmod it 700
* if git says everything is changed, it's probably the line endings issues you've most likely seen before, doing "git add -u" should just remove them from the list (and not add them to be committed)


## Installing locally

In order to run the project locally you need NPM of 1.4 or higher as well as bower and sails packages installed globally. Run ```npm --version``` to check your version of NPM and then ```sudo npm update npm -g``` to upgrade as necessary. To install the packages run:

* ```sudo npm install bower -g``` to install bower
* ```sudo npm install sails -g``` to install sails

To start the site run ```sails lift``` within the root checkout. It will run the Grunt tasks and start Express so the site is available at http://localhost:1337.

