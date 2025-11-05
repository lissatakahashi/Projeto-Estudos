export function initAxe() {
  if (import.meta.env.DEV) {
    // Note: @axe-core/react should be imported in dev only at runtime when installed
    try {
      // dynamic import so project won't crash if not installed
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      // const axe = require('@axe-core/react');
      // axe(React, 1000);
      console.log('Axe dev helper available (install @axe-core/react to enable)');
    } catch (e) {
      // noop
    }
  }
}
