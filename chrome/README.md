# Preserve Chrome Extension
## Dependencies
- Google Chrome, obviously.
- CoffeeScript
  - CoffeeScript depends on NodeJS and NPM.
    - `brew install nodejs`
    - To install NPM, `curl https://npmjs.org/install.sh | sh`
  - `npm install -g coffee-script`
- [Underscore.js](http://underscorejs.org)
  - We're using Underscore to get some Ruby-inspired goodies in our Javascript. To be honest, I only installed it because of the [.each function](http://underscorejs.org/#each). :)
- jQuery

### Working with CoffeeScript
Once you've got CoffeeScript installed and you're ready to work on the project, you can simply run `coffee --watch --compile --output js/ src/`

The command above will watch everything in the src/ directory and compile it into the js/ directory when you save it. Pretty neat, right?

## Documentation
- [Chrome Extension Getting Started](http://developer.chrome.com/extensions/getstarted.html)
- [Chrome Tab API Documentation](http://developer.chrome.com/extensions/tabs.html)
- [Chrome Options Documentation](http://developer.chrome.com/extensions/options.html)
  - We're not using the Options API, but I would like to.
- [Adding Google Analytics](http://developer.chrome.com/extensions/tut_analytics.html)