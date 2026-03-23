import arcjet, {
  botCategories,
  type categories,
  detectBot,
  detectPromptInjection,
  filter,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  tokenBucket,
  validateEmail,
} from '@arcjet/next';

// Re-export the rules to simplify imports inside handlers
export {
  botCategories,
  detectBot,
  detectPromptInjection,
  filter,
  fixedWindow,
  protectSignup,
  sensitiveInfo,
  shield,
  slidingWindow,
  tokenBucket,
  validateEmail,
  type categories,
};

// Create a base Arcjet instance for use by each handler
export default arcjet({
  // Get your site key from https://app.arcjet.com
  // and set it as an environment variable rather than hard coding.
  // See: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
  key: process.env.ARCJET_KEY!,
  rules: [
    // Shield protects against common web attacks e.g. SQL injection
    shield({ mode: 'LIVE' }),

    // // Block messages containing sensitive information to prevent data leaks
    // sensitiveInfo({
    //   mode: 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
    //   // Block PII types that should never appear in AI prompts.
    //   // Remove types your app legitimately handles (e.g. EMAIL for a support bot).
    //   deny: ['CREDIT_CARD_NUMBER', 'EMAIL'],
    // }),
  ],
  characteristics: ['userId'],
});
