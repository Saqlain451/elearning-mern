import favourite from "../model/FavouriteSchema.js";

const addFav = async (req, res) => {
    const { mail,title,author } = req.body
    try {
        const existingFavorite = await favourite.findOne({ mail, title, author });

        if (existingFavorite) {
            res.json({ err: "Already added" });
        } else {
            const newfavourite = new favourite({ ...req.body });
            await newfavourite.save();
            res.json({ msg: 'favourite added successfully.' });
        }

    } catch (error) {
        console.log(error);
    }
}


const getAllFav = async(req,res) =>{
    const mail = req.params.mail;
    try {
        const allFavData = await favourite.find({mail});
        allFavData.length?res.status(201).json({success:allFavData}) : res.status(501).json({err : "No data found"})
    } catch (error) {
        console.log(error);
    }
}

export { addFav,getAllFav}