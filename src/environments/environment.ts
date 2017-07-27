// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  requestUrl: 'http://usa22543.mytenvis.org/cgi-bin/hi3510/ptzctrl.cgi?-step=1&-act=',
  requestLightUrl: 'https://www.meethue.com/api/sendmessage?token=8ee7d03f19ec6cc3b9ed11229e5689b1a59b34f1a4575fad8127d5a0b5f77014'
};
