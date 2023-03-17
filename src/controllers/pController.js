const pModel = require('../models/pModel')

const createP = async function (req, res) {
    try {
        let data = req.body

        let { UHID, fName, lName, age, gender, address, mobile, email, dob, patientImage, visited } = data

        console.log(data)
        let createdP = await pModel.create(data)
        return res.status(201).send({
            status: true,
            message: 'created',
            data: createdP
        })
    }
    catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}



const getInvestigationByDay = async function (req, res){
    try{
        let data = req.query
        let pId = req.params.pId

        let {visitedDay} = data

        let getData = await pModel.findById({_id :pId})
        let item = getData.visited

        let arr = []
        for(let i = 0; i<item.length; i++){
            if(item[i].visitedDay == visitedDay ){
                arr.push(item[i])
            }
        }
        return res.status(200).send({
            status: true,
            message: 'created',
            data: arr
        })
        
    }
    catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}



const updateVisit = async function (req, res){
    try{
        let data = req.body
        let pId = req.params.pId
        let {visited} = data

        const getData = await pModel.findById({_id : pId})

        let item = getData.visited
        item.push(visited)
        
        let updateP = await pModel.create(getData)
        return res.status(200).send({
            status: true,
            message: 'created',
            data: updateP
        })
    }
    catch (err) {
        return res.status(500).send({
            status: false,
            message: err.message
        })
    }
}

 
module.exports = { createP, getInvestigationByDay, updateVisit }