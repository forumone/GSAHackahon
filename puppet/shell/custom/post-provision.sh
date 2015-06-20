#!/bin/bash
OPT_DIR=/opt/puppet

# Update NPM
if [[ ! -f "${OPT_DIR}/npm-updated" ]]; then
  npm update -g npm
  touch "${OPT_DIR}/npm-updated"
fi

# Install Sails
if [[ ! -f "${OPT_DIR}/sails-installed" ]]; then
  npm install -g sails
  touch "${OPT_DIR}/sails-installed"
fi