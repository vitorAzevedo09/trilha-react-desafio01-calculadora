/**
 * Setup file for Jest tests
 * 
 * This file is automatically executed before running tests.
 * It configures the testing environment for React components.
 */

// Import Jest DOM to extend Jest with DOM testing utilities
require('@testing-library/jest-dom');

// Import necessary testing utilities
const { configure } = require('@testing-library/react');

// Configure testing library
configure({
  testIdAttribute: 'data-testid',
  // Increase the default timeout to avoid flaky tests
  asyncUtilTimeout: 5000
});

// Mock window.matchMedia - common source of testing errors in responsive apps
if (typeof window !== 'undefined') {
  window.matchMedia = window.matchMedia || function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { },
      addEventListener: function () { },
      removeEventListener: function () { },
      dispatchEvent: function () {
        return true;
      },
    };
  };
}

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
}

if (typeof window !== 'undefined') {
  window.IntersectionObserver = window.IntersectionObserver || MockIntersectionObserver;
}

// Mock localStorage and sessionStorage
const localStorageMock = (function () {
  let store = {};
  return {
    getItem: function (key) {
      return store[key] || null;
    },
    setItem: function (key, value) {
      store[key] = value.toString();
    },
    removeItem: function (key) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
  });
  Object.defineProperty(window, 'sessionStorage', {
    value: localStorageMock
  });
}

// Clean up after each test
afterEach(() => {
  // Reset any mocks
  if (typeof jest !== 'undefined') {
    jest.clearAllMocks();
  }

  // Reset localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.clear();
  }
});

// Set a longer timeout for tests if needed
jest.setTimeout(10000); // 10 seconds

// Suppress React 18 console errors/warnings that might be expected in tests
// Uncomment if needed for your project
/*
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (
      /Warning.*not wrapped in act/i.test(args[0]) ||
      /Warning: ReactDOM.render is no longer supported/i.test(args[0]) ||
      /Warning: An update to Component inside a test was not wrapped in act/i.test(args[0])
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (/Warning: ReactDOM.render is no longer supported/i.test(args[0])) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
*/

// Add global custom matchers if needed
// Example:
/*
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});
*/

