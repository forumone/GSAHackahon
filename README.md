#ADS RFQ Pool One Development
Prototype URL: [http://agilebpadevpool.forumone.com](http://agilebpadevpool.forumone.com).

## Description

dCARE is a tool that enables physicians, pharmacists, nurses, patients and care providers to understand the types of contraindications from taking two or more mental health drugs at the same time. The dCARE tool is specifically design to help those who are taking or prescribing pharmaceuticals for mental health issues (antidepressants and psychostimulants/nootropics) to understand if there are potentially adverse side effects from specific combinations of medicines.

dCare includes the ability to show contradictors for several medications at the same time. It is based on official FDA data, and reduces the research time substantially. You can track our progress on our [trello board.](https://trello.com/b/nCt1b9Fg/18f-agile-bpa)

## Approach - Development Pool 


###Using Open-source Technologies
A large component of our ability to stay lean and develop fast came from the use of [open-soruce technologies](https://playbook.cio.gov/#play8). Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. 


##Development Criteria - Pool 2
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted | [link](https://github.com/forumone/18F#team-and-labor-categories---design-pool) |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories limited to the Design Pool labor categories to develop the prototype as quoted in Attachment C | [link](https://github.com/forumone/18F#team-and-labor-categories---design-pool) |
| 3  | Understand what people need, by including people in the prototype design process | [link](https://docs.google.com/document/d/11pnSJxqw-JNx2jYmWZJdVtUb0cXUE3tsB6qXkKOH60k/edit#) |
| 4  | Used at least three “human-centered design” techniques or tools | [link](https://docs.google.com/document/d/11pnSJxqw-JNx2jYmWZJdVtUb0cXUE3tsB6qXkKOH60k/edit#) |
| 5  | Created or used a design style guide and/or a pattern library |          |
| 6  | Wsed at least three modern and open source frontend or client side web technologies | [link](http://agilebpa.forumone.com/about/#/) Among others, client side technologies include: D3, Angular, SASS, jQuerey |
| 7  | Performed usability tests with people | [trello link](https://trello.com/c/P3M8k6Ag/29-user-research-usability-testing-wireframes), [survey link](https://www.surveymonkey.com/r/3MTG8JK)         |
| 8  | Used an interactive approach, where feedback informed subsequent work or versions of the prototype | [Trello Board](https://trello.com/b/nCt1b9Fg/18f-agile-bpa), [Sprint Reviews/Retrospectives] (https://docs.google.com/document/d/160VHp6qdKdgGAMgxQbAn5HhGSLXCIvcWZYdnE2SK8mM/edit?usp=sharing) |
| 9  | Created a prototype that works on multiple devices and presents a responsive design |         |
| 10 | Provided sufficient documentation to install and run their prototype on another machine | [link](https://github.com/forumone/18F#web-starter-kit) |
| 11 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge | [link](https://github.com/forumone/18F/blob/master/LICENSE.md) |

## Team and Labor Categories - Development Pool
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Product Manager - Eric Davis | xxxxx | Eric Davis has authority and responsibility over the quality of the submitted prototype. | xx hours |
| Technical Architect - William Hurley | xxxx | xxx | xxx hours |
| Back-end Developer - Alex Ford |xxxxx | xxxx | xxx |

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

