const assert = require('assert');
const Signal_State_Manager = require('../services/Signal_State_Manager');

describe('Test Signal State Manager is Running', () => {
    it('Should return some object with active key', (done) => {
        assert.deepEqual(Signal_State_Manager.active_signal_color, { active: 'red' })
        done()
    })
});