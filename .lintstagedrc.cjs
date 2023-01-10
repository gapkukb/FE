module.exports = {
    "src/**/*.{ts,tsx}": ["prettier --write", "eslint --fix"],
    "src/**/*.{js,jsx}": ["prettier --write", "eslint --cache --fix"],
    "src/**/*.vue": ["prettier --write", "eslint --cache --fix", "stylelint --fix"],
    "src/**/*.{json,md,yml}": ["prettier --write"],
    "src/**/*.{css,styl,scss,less}": ["stylelint --fix"],
};
