// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const Mock = require('mockjs');

const router = express.Router();

router.get('/some/path', (req, res) => {
    const data = Mock.mock({
        'area|2-4': {
            '110000': '北京市',
            '120000': '天津市',
            '130000': '河北省',
            '140000': '山西省',
        },
    });
    res.json(data);
});
module.exports = router;
