
    QUnit.test('Testing the PACE calculator with four sets of inputs', function (assert) {
        assert.equal(Calculation(100, 20), 5.00, "works with two positive integers");
        assert.equal(Calculation(-20, 5), -4.00, "works with a positive and a negative number");
        assert.equal(Calculation(-20, -4), 5.00, "works with two negative integers");
        assert.equal(Calculation(0, 0), "NaN", "works with zeroes");
    });
    
    QUnit.test('Testing the PACE calculator with four sets of inputs to check exception handling', function(assert) {
        assert.throws(function() { Calculation(NaN, NaN) }, 'Input should be number');
        assert.throws(function() { Calculation(null, null) }, 'Input should be number');
        assert.throws(function() { Calculation("abc", "def") }, 'Input should be number');
        assert.throws(function() { Calculation(undefined, undefined) }, undefined);
    });