const BucketModel = require('../model/bucket.model');
const BallModel = require('../model/bucket.model');

class BucketServices {

    static async createBucket(name, vol) {
        const addBucket = new BucketModel({ name, vol, availableVol });
        return await addBucket.save();
    }

    static async createBall() {
        const addBall = new BallModel({ name, vol});
        return await addBall.save();
    }

    static async fillBucket() {

    }
}

module.exports = BucketServices;