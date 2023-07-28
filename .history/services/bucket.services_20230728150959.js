const BucketModel = require('../model/bucket.model');
const BallModel = require('../model/ball.model');

class BucketServices {

    static async createBucket(name, vol) {
        const addBucket = new BucketModel({ name, vol, availableVol: vol });
        return await addBucket.save();
    }

    static async createBall(name, vol) {
        const addBall = new BallModel({ name, vol });
        return await addBall.save();
    }

    static async getBall() {
        const addBall = await BallModel.find({});
        return addBall;
    }

    static async fillBucket(bucketName, ballName) {
        const bucketData = await BucketModel.findOne({ name: bucketName });
        const ballData = await BallModel.findOne({ name: ballName });

        if ((bucketData.availableVol - ballData.vol) >= 0) {
            bucketData.availableVol = bucketData.availableVol - ballData.vol;
            bucketData.filled.push(ballName);
            return await bucketData.save();
        }
        return "No Space Available";
    }

    static async bulkUpload(data) {

        console.log("data--->", data.balls[3].ball, data.balls.length);
        for (let i = 0; i < data.balls.length; i++) {
            console.log("Loop--->", data.balls[i]);
            const bucketData = await BucketModel.findOne({ name: data.bucketName });
            const ballData = await BallModel.findOne({ name: data.balls[i].ball });
            if ((bucketData.availableVol - ballData.vol) >= 0) {
                bucketData.availableVol = bucketData.availableVol - ballData.vol;
                bucketData.filled.push(data.balls[i].ball);
                return await bucketData.save();
            }
        }
        return "No Space Available";
    }
}

module.exports = BucketServices;