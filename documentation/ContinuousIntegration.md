##Source Code Management Solution

Forum One used the Git code versioning system repository to serve as the authoritative source for all website development releases for the prototype. William established a Git branch and tagging standards to facilitate the automation of deployments to development, stage, and production environments. Git allows our multi-developer team to work collaboratively, while ensuring quality and redundancy. 

For the purposes of this prototype, we follow well-documented Git usage standards as is common in many open source communities (Drupal, WordPress, etc). Our use of Git relies upon Branches and Tags to control the versioning of releases across the development, staging, and production environment of the sites we develop. Each Branch and Tag is built off the central repository and ensures we maintain the integrity of the core system.

Our development, staging, and production environments are gated using the following high level rules:
- Development: Active development of new features, application of new contributed module patches, application of major point releases of contributed Drupal Modules, and quality assurance testing prior to pushing of code to the Staging Environment.
- Stage: Quality assurance and testing by QA staff of applied development changes; Client review and acceptance of changes
- Production: Live site or application.  Bug fixes or features move from Development to Staging before finally being deployed to Production.

##Continuous Integration

Whether large or small, any projects will likely require over a thousand deployments of code to the development, staging, and testing servers. We use Vagrant and Puppet for managing local virtual machines, Jenkins and GruntJS for continuous integration, and Capistrano for deployment. This approach provides some key advantages:

- Equips our developers with the same software, versions, and configuration as all other team members.
- Significantly increases the confidence we have that the code we push will be deployed the exact same way each time.
- Allows our team to recover a previously-known good version of code if for some reason something does fail. This can take place regardless of how many code commits have happened since.
