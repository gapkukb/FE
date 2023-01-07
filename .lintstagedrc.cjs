module.exports = {
    "src/**/*.{ts,tsx}": ["prettier --write", "eslint --fix", "git add"],
    "src/**/*.{js,jsx}": ["prettier --write", "eslint --cache --fix", "git add"],
    "src/**/*.vue": ["prettier --write", "eslint --cache --fix", "stylelint --fix", "git add"],
    "src/**/*.{json,md,yml}": ["prettier --write", "git add"],
    "src/**/*.{css,styl,scss,less}": ["prettier --write", "stylelint --fix", "git add"]
};
