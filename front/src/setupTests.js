// Import des extensions d'assertions pour Jest depuis Testing Library
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

// Mock import.meta.env for Jest
globalThis.import = { meta: { env: { VITE_API_URL: 'http://localhost:5000' } } };

// Polyfill for TextEncoder if needed
if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = require('util').TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = require('util').TextDecoder;
}

afterEach(() => {
    cleanup();
});
