# React Native Music Player

This project is set up by following [the official guideline](https://reactnative.dev/docs/environment-setup).

Figma template: https://www.figma.com/community/file/1143115506742537849

## Table of Contents

- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Local Development Information](#local-development-information)

## Tech Stack

- [React Native](https://reactnative.dev/docs/getting-started) - [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html) - [React Navigation 6](https://reactnavigation.org/docs/getting-started/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)

## Setup

1. Clone the project:

```bash
git clone https://github.com/nguyenhieptech/react-native-musium
```

2. Install dependencies

```bash
cd react-native-musium
yarn install
```

3. Pod install for iOS

```bash
# Currently, macOS 12.5.1 is shipped with Ruby 2.6.8, which is not what is required by React Native.
# You should use a Ruby version manager like rbenv or RVM to install
# and use ruby version '2.7.5' before pod install.
# See more at https://reactnative.dev/docs/environment-setup#ruby
# Choose Development OS: macOS, Target OS: iOS

npx pod-install
```

4. Start Metro Bundler

```bash
yarn start
```

5. Open new terminals, build for iOS/Android

```bash
yarn ios
```

```bash
yarn android
```

# Local Development Information

MacBook Air M1 2020
macOS Monterey 12.6
Ram 16GB
SSD 512GB
