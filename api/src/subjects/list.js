import Subject from './../models/Subject';

export default async (req, res) => {
  let subjects = []

  try {
    subjects = await Subject.find({})
    
    return res.status(200).json({ subjects })
  } catch(err) {
    return res.status(500).json({ err })
  }
}
