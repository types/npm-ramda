import R_invertObj = require('../ramda/dist/src/invertObj');

declare const number_object_record: { [number: number]: object };

// @dts-jest:pass:snap -> Dictionary<string>
R_invertObj(number_object_record);
