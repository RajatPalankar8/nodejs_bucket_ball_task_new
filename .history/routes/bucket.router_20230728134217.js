const router = require("express").Router();
const BucketServices = require('../services/bucket.services');

router.post('/createBucket',async (req,res,next)=>{
    try {
        const response = await BucketServices.createBucket(req.body.name,req.body.vol);
        console.log("---->",response);
        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});


router.post('/createBall',async (req,res,next)=>{
    try {
        const response = await BucketServices.createBall(req.body.name,req.body.vol);
        console.log("---->",response);
        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});

router.post('/fillBucket',async (req,res,next)=>{
    try {
        const response = await BucketServices.fillBucket(req.body.bucketName,req.body.ballName);
        console.log("---->",response);
        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});

router.post('/getBallList',async (req,res,next)=>{
    try {
        const response = await BucketServices.getBall();
        console.log("---->",response);
        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});

router.post('/bulkFillBall',async (req,res,next)=>{
    try {
        // const response = await BucketServices.getBall();
        console.log("---->",req.body);
        res.json({ status: true, success: response });
    } catch (err) {
        console.log("---> err -->", err);
        next(err);
    }
});

module.exports = router;