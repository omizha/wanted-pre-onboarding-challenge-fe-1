import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { RecoilRoot } from 'recoil';
import Page from './page';
import reportWebVitals from './reportWebVitals';

export * as Hook from './hook';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div />}>
      <Suspense fallback={<div />}>
        <RecoilRoot>
          <Page />
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
