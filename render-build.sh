#!/bin/bash

# Installer pnpm
npm install -g pnpm

# Installer les dépendances avec pnpm
pnpm install

# Optionnel : Installer playwright avec pnpm si ce n'est pas déjà fait
pnpm dlx playwright-core install chromium
