import { defineSupportCode } from 'cucumber';

defineSupportCode(({setDefaultTimeout}) => {
  setDefaultTimeout(1000000);
});
