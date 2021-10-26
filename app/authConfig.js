const msalConfig = {
    auth: {
        clientId: "72cffd18-4cfd-470a-a791-4e2ed28397d4",
        authority: "https://login.microsoftonline.com/9ed09077-a7f0-4212-8ed4-61dad09cc836",
        redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  const loginRequest = {
   scopes: ["openid", "profile", "User.Read"]
  };
  
  // Add scopes here for access token to be used at Microsoft Graph API endpoints.
  const tokenRequest = {
   scopes: ["User.Read", "Mail.Read"]
  };