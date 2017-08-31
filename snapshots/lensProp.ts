import { Property } from '../ramda/dist/src/$types';
import R_lensProp = require('../ramda/dist/src/lensProp');

declare const property: Property;

// @dts-jest:pass:snap -> PseudoLens<1>
R_lensProp(1);
// @dts-jest:pass:snap -> PseudoLens<"x">
R_lensProp('x');
// @dts-jest:pass:snap -> ManualLens<{}, {}>
R_lensProp(property);
// @dts-jest:pass:snap -> ManualLens<number, object>
R_lensProp<number, object>(property);
