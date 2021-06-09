const express = require('express')

module.exports = system => {
    system.use(express.json())
    system.use(express.urlencoded({
        extended :true
    }))
}