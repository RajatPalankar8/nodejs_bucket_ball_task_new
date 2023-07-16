const router = require("express").Router();
const BucketServices = require('../services/bucket.services');

router.post('/createBucket',async (req,res,next)=>{
    try {
        const response = await BucketServices.createBucket(req.body.name,req.body.vol);

        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});


router.post('/createBall',async (req,res,next)=>{
    try {
        const response = await BucketServices.createBall(req.body.name,req.body.vol);

        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});

router.post('/fillBucket',async (req,res,next)=>{
    try {
        const response = await BucketServices.fillBucket(req.body.bucketName,req.body.ballName);

        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});


module.exports = router;