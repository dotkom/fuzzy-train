import 'assets/style/global.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from 'src/components';
import { redirectIfUserWantsRedirect } from 'src/utilities/redirect';

// Checks if redirect cookie is set. This check should be done in the web server/reverse proxy server
// but in case that isn't set up (such as for local testing environments), this is the fallback.
redirectIfUserWantsRedirect();

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
