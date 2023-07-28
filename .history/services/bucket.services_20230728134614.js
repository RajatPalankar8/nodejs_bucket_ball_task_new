const BucketModel = require('../model/bucket.model');
const BallModel = require('../model/ball.model');

class BucketServices {

    static async createBucket(name, vol) {
        const addBucket = new BucketModel({ name, vol, availableVol:vol });
        return await addBucket.save();
    }

    static async createBall(name, vol) {
        const addBall = new BallModel({ name, vol});
        return await addBall.save();
    }

    static async getBall() {
        const addBall = await BallModel.find({ });
        return  addBall;
    }

    static async fillBucket(bucketName,ballName) {
        const bucketData = await BucketModel.findOne({name:bucketName});
        const ballData = await BallModel.findOne({name:ballName});

        if((bucketData.availableVol - ballData.vol) >= 0 ){
                    bucketData.availableVol = bucketData.availableVol - ballData.vol;
                    bucketData.filled.push(ballName);
                    return await bucketData.save();
        }
        return "No Space Available";
    }

    static async bulkUpload(data) {
        console.log("Data=---->"),data;
        return "No Space Available";
    }
}

module.exports = BucketServices;