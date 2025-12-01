export const azureAdConfig = {
  identityMetadata: `https://login.microsoftonline.com/<TENANT_ID>/v2.0/.well-known/openid-configuration`,
  clientID: '<CLIENT_ID>',
  responseType: 'code id_token',
  responseMode: 'form_post',
  redirectUrl: 'http://localhost:3000/auth/openid/return',
  allowHttpForRedirectUrl: true,
  clientSecret: '<CLIENT_SECRET>',
  validateIssuer: false,
  passReqToCallback: false,
  scope: ['profile', 'email', 'openid'],
};
