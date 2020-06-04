module.exports = {
    roots: [
        '<rootDir>/src',
        '<rootDir>/test'
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}'
    ],
    coverageThreshold: {
        global: {
            'branches': 100,
            'functions': 100,
            'lines': 100,
            'statements': -10
        }
    }
};