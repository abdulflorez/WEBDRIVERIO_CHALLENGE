import * as chai from 'chai';
import chaiHttp from 'chai-http';
chai.should();
chai.use(chaiHttp);

export const chaiExpect = chai.expect;
export const assert = chai.assert;
