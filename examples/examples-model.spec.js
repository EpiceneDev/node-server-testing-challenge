const db = require('../data/dbConfig.js');

const { insert } = require('./examples-model.js');

describe('examples model', function () {
    describe('insert()', function() {
        it('should insert an example', async function() {
            await insert({ topic: 'topic3' });

            const examples = await db('examples');

            expect(examples).toHaveLength(3);
        });

        it('should return the inserted example', async function() {
            let example = await insert({ topic: "another topic" });
            expect(example.topic).toBe("another topic")

            example = await insert({ topic: 'topic30' });
            expect(example.topic).toBe("another topic");
        });
    });
});