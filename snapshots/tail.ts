import * as R from '../ramda/dist/index';

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap -> string
R.tail(string);
// @dts-jest:pass:snap -> string[]
R.tail(string_array);
