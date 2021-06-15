# activesupport.js

ActiveSupport Helpers for JS

![Release](https://img.shields.io/github/v/release/yknx4/activesupport.js?include_prereleases&sort=semver)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![Tests](https://img.shields.io/github/workflow/status/yknx4/activesupport.js/Tests/main)
![npm](https://img.shields.io/npm/v/@activesupport.js/base)

The goal of this project is to implement as fully as possible all of the [ActiveSupport](https://guides.rubyonrails.org/active_support_core_extensions.html) core extensions with it equivalent JS/Typescript implementation.

If you are afraid of prototype augmentation, then leave and don't look back.

This library will inject base JS prototypes with several helper methods, since most of the drawbacks of prototype pollution are addressed by Typescript and the ability to properly document this changes this should be harmless.

## Documentation

For more detailed documentation, the changelog, and TypeDoc documentation rendered with TypeDoc, see https://typedoc.org.

## Installation

```text
# Base (Helpers with no dependencies)
npm install @activesupport.js/base --save-dev
yarn add --dev install @activesupport.js/base

# Case (Helpers for case, with dependency on case, pluralize and transliteration)
npm install @activesupport.js/case --save-dev
yarn add --dev install @activesupport.js/case

# Date (Helpers for date, with dependency on luxon)
npm install @activesupport.js/date --save-dev
yarn add --dev install @activesupport.js/date
```

## Usage

See Documentation for each package

## Contributing

This project is maintained by a community of developers. Contributions are welcome and appreciated.
You can find activesupport.js on GitHub; feel free to open an issue or create a pull request:
https://github.com/yknx4/activesupport.js/pulls

For more information, read the [contribution guide](https://github.com/yknx4/activesupport.js/blob/main/.github/CONTRIBUTING.md).

## License

Copyright (c) 2021 [Ale Ornelas](https://ale.world).<br>
Licensed under the MIT License.
