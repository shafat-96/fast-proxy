// Type declarations for the JS module domainTemplates.js
// Using NodeNext module resolution, keep the .js extension in the import path.

export declare function generateHeadersForDomain(
  url: URL | string,
  additionalHeaders?: Record<string, string>
): Record<string, string>;
