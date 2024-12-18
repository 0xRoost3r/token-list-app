# Token List App

A Next.js application that displays a list of tokens with features:
- Display token list with infinite scroll animation
- Token ranking based on progress and growth
- Mobile and desktop compatible
- Web3 integration via RainbowKit

## Technologies Used

- Next.js - Production React Framework
- TypeScript - Statically typed JavaScript
- TailwindCSS - Utility-first CSS Framework
- DaisyUI - Component library for TailwindCSS
- RainbowKit - Web3 wallet connection SDK
- Wagmi - React Hooks for Ethereum

## Features

- Display Infinity Token list with auto-scroll animation
- Token ranking by progress and 24h growth
- Responsive interface for mobile and desktop
- Create new tokens via modal
- Web3 wallet connection with RainbowKit
- Token list pagination

## Installation

First, install the dependencies:

```bash
pnpm install
```

Then, run the application:

```bash
pnpm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000) to see the result.

## Usage Guide

- Connect Web3 wallet with RainbowKit
- Create new tokens via modal
- Paginate token list
- View token details
- Search tokens
- Sort token list

# Directory Structure
```bash
src/
- components: Common components
- constants: Constants
- pages: Pages
- types: Data types
- utils: Helper functions
```