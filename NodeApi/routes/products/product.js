const express = require('express');
const router = express.Router();

const productModel = require('../../db/models/product.model');

// get All products
router.get('/', (req, res) => {
    productModel.find()
        .then(docs => res.status(200).send(docs))
        .catch(err => res.status(404).send(err))
});

// get one product
router.get('/:productId', (req, res) => {
    productModel.findOne({ _id: req.params.productId })
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(404).send(err))
});

// add product
router.post('/', (req, res) => {
    const product = new productModel({
        productName: req.body.productName,
        price: req.body.price,
        description: req.body.description
    });
    product.save()
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(404).send(err))
})

// update product

router.put('/:productId', (req, res) => {
    productModel.update({ _id: req.params.productId }, {
        $set: {
            productName: req.body.productName,
            price: req.body.price,
            description: req.body.description
        }
    })
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(404).send(err))
});

// delete product 
router.delete('/:productId', (req, res) => {
    productModel.findByIdAndRemove({ _id: req.params.productId })
        .then(doc => res.status(200).send(doc))
        .catch(err => res.status(404).send(err))
})

module.exports = router;