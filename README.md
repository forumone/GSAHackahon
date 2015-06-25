#ADS RFQ Pool One Design
Prototype URL: [http://agilebpa.forumone.com](http://agilebpa.forumone.com).

## Description

dCARE is a tool that enables physicians, pharmacists, nurses, patients and care providers to understand the types of contraindications from taking two or more mental health drugs at the same time. The dCARE tool is specifically design to help those who are taking or prescribing pharmaceuticals for mental health issues (antidepressants and psychostimulants/nootropics) to understand if there are potentially adverse side effects from specific combinations of medicines.

dCare includes the ability to show contradictors for several medications at the same time. It is based on official FDA data, and reduces the research time substantially. You can track our progress on our [trello board.](https://trello.com/b/nCt1b9Fg/18f-agile-bpa)

## Approach

[Insert 750 words, covering use of Personas, Usability Tests, Scenarios, Use Cases, Open Source Front End Tools, interactive approach]


##Development Criteria
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted |          |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of two of the labor categories limited to the Development Pool labor categories to develop the prototype as quoted in Attachment C |          |
| 3  | Used at least five modern and open-source technologies, regardless of architectural layer (frontend, backend, etc.) |          |
| 4  | Deployed the prototype on an Infrastructure as a Service (IaaS) or Platform as a Service (PaaS) provider, and indicated which provider they used |          |
| 5  | Wrote unit tests for their code |          |
| 6  | Set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider |          |
| 7  | Set up or used configuration management |          |
| 8  | Set up or used continuous monitoring |          |
| 9  | Deploy their software in a container (i.e., utilized operating-system-level virtualization) |         |
| 10 | Make use of a API, by either consuming or providing one RESTfully. |          |
| 11 | Used an iterative approach, where feedback informed subsequent work or versions of the prototype |          |
| 12 | Provided sufficient documentation to install and run their prototype on another machine |          |
| 13 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge |          |

## Team and Labor Categories
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Product Manager | M.C. Franzini is a senior project officer at Forum One, where he leads strategy and web development projects for clients in government agencies and nonprofits. Recent clients with whom he has worked on large-scale Drupal projects include the Consumer Financial Protection Bureau, USDA’s Foreign Agricultural Service, USDA’s National Institute for Food and Agriculture, and the U.S. Department of Health’s Office of the National Coordinator for Health IT. He brings an enthusiasm for online community and collaboration, user experience and design, and building innovative web sites to help clients increase their impact. He holds an master’s in international business from the University of Edinburgh and a master’s in political management from the George Washington University. He has worked in the private, government, nonprofit, and education sectors. | M.C. Franzini has authority and responsibility over the quality of the submitted prototype. | XXX hours |

	•	Interaction Designer/User Research Lead- Matt Humphrey

	•	Visual Designer - Lisa Drobek

	•	Writer/Content Designer/Content Strategist - Mike Shoag

	•	Usability Tester - Jim Cashel
	
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

