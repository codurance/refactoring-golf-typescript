# Refactoring Golf

Refactoring Golf is a game designed to stretch your refactoring muscles and get you to explore your IDE to see what's really possible using shortcuts and automation.

This repo contains several source trees, or numbered "Holes" based on a single exercise. Each hole carries on from the last for a single exercise - which is the application of a tax amount to a set of monetary amount.

Your goal is to safely and efficiently as possible refactor the Hole-X code to look like the Hole X+1 code. You must aim to do it in as few "strokes" as possible.

A "stroke" is essentially a change made to the code, and every stroke costs you points.

Your pairing partner should carefully score you as follows:

- 1 point for every change made to the code using a shortcut or automated IDE feature (e.g., an automated refactoring, code template, or Find/Replace)
- 2 points for every manual edit. Note that a single "edit" could cover multiple lines of code.
- Double points for every change made while the code cannot pass the tests after the previous change.
- Zero points for code formatting (e.g., deleting whitespace or optimizing imports).

Allow yourselves a maximum of 2 attempts at each round to determine your best score.

## Hints: 

1. You may find that customising your IDE is useful (e.g. custom code templates, or even custom refactorings.)

2. If possible, it would be a good idea to have the two versions (Hole X and Hole X+1) of each set of source files open on different machines, as you could easily tie yourself in knots editing the wrong files!

3. Keep that second machine available as a tooling environment. Writing custom tools (scripts, templates etc) costs you zero points in refactoring golf.


## Acknowledgements:
These instructions were mostly stolen from @daviddenton's Java version



# Typescript + Jest

## Install & Run
`npm i`

`npm start`

## Only run specific Kata unit test
`npm start <name of test>` (per describe block)


ie: `npm start subtract`    

## Watch a specific Kata unit test

`npm run watch <name of test>`


ie: `npm run watch subtract`


## Watch All tests

`npm run watch-all`