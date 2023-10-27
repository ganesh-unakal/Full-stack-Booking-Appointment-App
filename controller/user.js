const User = require('../model/user');


exports.postNewUser = async (req, res, next) => {
    
    try {
        if (!req.body.phone) {
            throw new Error("phone number is mandatory");
        }

        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;

        // console.log('obj received', req.body)

        const data = await User.create({
            name: name,
            phone: phone,
            email: email,
        });
        console.log(data)

        res.status(201).json({ newUserDetails: data });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err
        });
    }
}

 
exports.getUsers = async (req, res, next) => {
    // console.log(req.body)
    try {
        
        const data = await User.findAll();
        res.status(200).json({ allUsers: data })
    }
    catch (err) {
        console.log('error in fetching users', JSON.stringify(err))
        res.status(500).json({
            error: err
        })
    }
}


exports.deleteUser = async(req,res,next) => {
    try{
        if(req.params.userId == "undefined"){
            console.log('ID not found')
            return res.status(400).json({err: "no ID found"})
        }

        const uID= req.params.userId
        console.log(uID);
        await User.destroy({where : {id: uID}})
        res.sendStatus(206)
    }
    catch(err) {
        console.log(err)
        res.status(500).json(err)
    }
}



